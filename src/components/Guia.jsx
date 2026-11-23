import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Guia.css';

const MARGEN = 16;
const HOLGURA = 8;

function limitar(v, a, b) {
  return Math.max(a, Math.min(v, b));
}

function leerVista(id) {
  try {
    return window.localStorage.getItem(`aicb-guia-${id}`) === 'vista';
  } catch {
    return false;
  }
}

function marcarVista(id) {
  try {
    window.localStorage.setItem(`aicb-guia-${id}`, 'vista');
  } catch {
    /* el navegador no permite guardar: se ignora */
  }
}

/** Calcula dónde va el resaltado y la tarjeta, sin salirse de la pantalla. */
function calcularPosicion(rect, alto, vw, vh) {
  const W = Math.min(380, vw - 32);
  const H = alto;
  if (!rect) {
    return { foco: null, top: Math.max(MARGEN, Math.round((vh - H) / 2)), left: Math.round((vw - W) / 2) };
  }
  const fy = limitar(rect.y - HOLGURA, 4, vh - 8);
  const fb = limitar(rect.y + rect.h + HOLGURA, 8, vh - 4);
  const fx = limitar(rect.x - HOLGURA, 4, vw - 8);
  const fr = limitar(rect.x + rect.w + HOLGURA, 8, vw - 4);
  const foco = { top: fy, left: fx, width: fr - fx, height: fb - fy };
  let left = limitar(rect.x, MARGEN, vw - W - MARGEN);
  let top;
  if (fb + MARGEN + H <= vh - MARGEN) top = fb + MARGEN;
  else if (fy - MARGEN - H >= MARGEN) top = fy - MARGEN - H;
  else if (fr + MARGEN + W <= vw - MARGEN) {
    left = fr + MARGEN;
    top = limitar(rect.y, MARGEN, vh - H - MARGEN);
  } else if (fx - MARGEN - W >= MARGEN) {
    left = fx - MARGEN - W;
    top = limitar(rect.y, MARGEN, vh - H - MARGEN);
  } else {
    top = vh - H - 24;
    left = vw - W - 24;
  }
  return { foco, top: Math.round(top), left: Math.round(left) };
}

/**
 * Guía paso a paso de una página.
 * - Se abre sola la primera vez que la persona entra a la página (se recuerda en localStorage).
 * - Se vuelve a abrir con el botón Ayuda del menú (cada vez que cambia `peticion`).
 * - Resalta cada sección (selector `sel`) y acompaña con una tarjeta explicativa.
 * - Teclado: Escape cierra; flechas izquierda y derecha cambian de paso.
 */
export default function Guia({ id, pasos, peticion }) {
  const [abierta, setAbierta] = useState(false);
  const [n, setN] = useState(0);
  const [med, setMed] = useState({ rect: null, alto: 250, vw: window.innerWidth, vh: window.innerHeight });
  const tarjeta = useRef(null);
  const volver = useRef(null);
  const nRef = useRef(0);
  const temporizador = useRef(0);

  const medir = useCallback(() => {
    const p = pasos[nRef.current];
    const el = p && p.sel ? document.querySelector(p.sel) : null;
    let rect = null;
    if (el) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        rect = { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) };
      }
    }
    const alto = tarjeta.current ? tarjeta.current.offsetHeight : 250;
    setMed((prev) => {
      const nuevo = { rect, alto, vw: window.innerWidth, vh: window.innerHeight };
      return JSON.stringify(prev) === JSON.stringify(nuevo) ? prev : nuevo;
    });
  }, [pasos]);

  const cerrar = useCallback(() => {
    marcarVista(id);
    window.clearTimeout(temporizador.current);
    setAbierta(false);
    const v = volver.current;
    if (v && v.focus) window.setTimeout(() => v.focus(), 0);
  }, [id]);

  const ir = useCallback(
    (destino) => {
      if (destino < 0) return;
      if (destino >= pasos.length) {
        cerrar();
        return;
      }
      setAbierta((estaba) => {
        if (!estaba) volver.current = document.activeElement;
        return true;
      });
      nRef.current = destino;
      setN(destino);
      const p = pasos[destino];
      const el = p.sel ? document.querySelector(p.sel) : null;
      if (el) {
        const r = el.getBoundingClientRect();
        el.scrollIntoView({ block: r.height > window.innerHeight * 0.6 ? 'start' : 'center', behavior: 'smooth' });
      }
      medir();
      window.clearTimeout(temporizador.current);
      temporizador.current = window.setTimeout(() => {
        medir();
        tarjeta.current?.focus({ preventScroll: true });
      }, el ? 450 : 40);
    },
    [pasos, cerrar, medir]
  );

  // Primera visita a la página.
  useEffect(() => {
    if (leerVista(id)) return undefined;
    const t = window.setTimeout(() => ir(0), 700);
    return () => window.clearTimeout(t);
  }, [id, ir]);

  // Botón Ayuda del menú.
  const primeraPeticion = useRef(peticion);
  useEffect(() => {
    if (peticion !== primeraPeticion.current) ir(0);
  }, [peticion, ir]);

  // Recalcular con desplazamiento, cambio de tamaño y teclado.
  useEffect(() => {
    if (!abierta) return undefined;
    let raf = 0;
    const luego = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        medir();
      });
    };
    const tecla = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        cerrar();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        ir(nRef.current + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        ir(nRef.current - 1);
      }
    };
    window.addEventListener('resize', luego);
    window.addEventListener('scroll', luego, true);
    window.addEventListener('keydown', tecla);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', luego);
      window.removeEventListener('scroll', luego, true);
      window.removeEventListener('keydown', tecla);
    };
  }, [abierta, medir, cerrar, ir]);

  // La altura real de la tarjeta cambia con el texto: se vuelve a medir al dibujarla.
  useLayoutEffect(() => {
    if (abierta) medir();
  }, [abierta, n, medir]);

  useEffect(() => () => window.clearTimeout(temporizador.current), []);

  if (!abierta || !pasos.length) return null;

  const p = pasos[n] || pasos[0];
  const ultimo = n === pasos.length - 1;
  const { foco, top, left } = calcularPosicion(med.rect, med.alto, med.vw, med.vh);

  return (
    <>
      <div className="guia-fondo" style={{ background: foco ? 'transparent' : 'rgba(66, 10, 20, 0.6)' }} />
      {foco ? <div className="guia-foco" aria-hidden="true" style={foco} /> : null}
      <div
        id="guia-tarjeta"
        ref={tarjeta}
        className="guia-tarjeta"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guia-titulo"
        aria-describedby="guia-texto"
        tabIndex={-1}
        style={{ top, left }}
      >
        <div className="guia-cab">
          <span className="guia-icono" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.6 9.4a2.5 2.5 0 0 1 4.85.85c0 1.65-2.45 2.2-2.45 3.75" />
              <path d="M12 17.2h.01" />
            </svg>
          </span>
          <span className="guia-etq">Guía de la página</span>
          <button type="button" className="guia-x" onClick={cerrar} aria-label="Cerrar la guía" title="Cerrar la guía">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>
        <h2 id="guia-titulo" className="guia-titulo">
          {p.titulo}
        </h2>
        <p id="guia-texto" className="guia-texto">
          {p.texto}
        </p>
        <div className="guia-barra" aria-hidden="true">
          {pasos.map((x, i) => (
            <span key={i} className={i <= n ? 'hecho' : ''} />
          ))}
        </div>
        <div className="guia-pie">
          <span className="guia-paso" aria-live="polite">
            Paso {n + 1} de {pasos.length}
          </span>
          <div className="guia-botones">
            {n > 0 ? (
              <button type="button" className="guia-btn guia-btn-sec" onClick={() => ir(n - 1)}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M11 6l-6 6 6 6" />
                </svg>
                Anterior
              </button>
            ) : null}
            <button type="button" className="guia-btn guia-btn-pri" onClick={() => ir(n + 1)}>
              {ultimo ? 'Terminar' : 'Siguiente'}
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d={ultimo ? 'M5 12l5 5 9-10' : 'M5 12h14M13 6l6 6-6 6'} />
              </svg>
            </button>
          </div>
        </div>
        {!ultimo ? (
          <button type="button" className="guia-omitir" onClick={cerrar}>
            Omitir guía
          </button>
        ) : null}
      </div>
    </>
  );
}
