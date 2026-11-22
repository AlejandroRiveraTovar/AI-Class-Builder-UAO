import { useEffect, useRef, useState } from 'react';
import { useNav } from './NavContext.js';
import { useAuth } from '../lib/auth.jsx';
import { navigate } from '../lib/router.js';
import './Sidebar.css';

const ENLACES = [
  {
    id: 'trayectorias',
    texto: 'Mis trayectorias',
    href: '#/mis-trayectorias',
    icono: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6', 'M9 17h4'],
  },
  {
    id: 'chat',
    texto: 'Chat',
    href: '#/chat',
    icono: ['M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z'],
  },
  {
    id: 'analitica',
    texto: 'Analítica',
    href: '#/analitica',
    icono: ['M4 20V4', 'M4 20h16', 'M8 15l4-4 3 3 5-6'],
  },
  {
    id: 'recursos',
    texto: 'Recursos',
    href: '#/recursos',
    icono: ['M5 4v16', 'M9 4v16', 'M13 5l4 15'],
  },
];

function Icono({ paths, size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const ICONO_CONFIG = [
  'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
];
const ICONO_SALIR = ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9'];

/**
 * Botón de la cuenta con su menú: Configuración (Mi perfil) y Cerrar sesión (landing).
 * Se cierra al hacer clic fuera, al pulsar Escape o al elegir una opción.
 */
function MenuCuenta({ activo }) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef(null);
  const { user, role, signOut } = useAuth();
  const nombre = user?.user_metadata?.full_name ?? user?.email ?? 'Usuario';
  const iniciales = nombre.split(/[\s@._-]+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('');
  const rolTexto = { docente: 'Docente UAO', ceedi: 'CEEDi', tecnico: 'Equipo técnico', custodio: 'Custodio UAO' }[role] ?? 'Docente UAO';

  useEffect(() => {
    if (!abierto) return undefined;
    const fuera = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setAbierto(false);
    };
    const tecla = (e) => {
      if (e.key === 'Escape') {
        setAbierto(false);
        ref.current?.querySelector('.usuario-btn')?.focus();
      }
    };
    document.addEventListener('mousedown', fuera);
    document.addEventListener('keydown', tecla);
    return () => {
      document.removeEventListener('mousedown', fuera);
      document.removeEventListener('keydown', tecla);
    };
  }, [abierto]);

  return (
    <div className={abierto ? 'usuario abierto' : 'usuario'} ref={ref}>
      {abierto ? (
        <div className="usuario-pop" id="menu-cuenta" aria-label="Opciones de la cuenta">
          <a href="#/perfil" onClick={() => setAbierto(false)}>
            <Icono paths={ICONO_CONFIG} size={18} />
            Configuración
          </a>
          <hr />
          <a
            href="#/"
            className="salir"
            onClick={async (e) => {
              e.preventDefault();
              setAbierto(false);
              await signOut();
              navigate('/');
            }}
          >
            <Icono paths={ICONO_SALIR} size={18} />
            Cerrar sesión
          </a>
        </div>
      ) : null}
      <button
        type="button"
        className={activo ? 'usuario-btn activo' : 'usuario-btn'}
        aria-label={`Menú de cuenta de ${nombre}`}
        aria-expanded={abierto}
        aria-controls="menu-cuenta"
        title="Opciones de la cuenta"
        onClick={() => setAbierto((v) => !v)}
      >
        <span className="usuario-av" aria-hidden="true">{iniciales}</span>
        <span className="usuario-txt">
          <span className="usuario-nom">{nombre}</span>
          <span className="usuario-rol">{activo ? 'Mi perfil' : rolTexto}</span>
        </span>
        <span className="usuario-flecha">
          <Icono paths={['M6 15l6-6 6 6']} size={18} />
        </span>
      </button>
    </div>
  );
}

/**
 * Menú principal de la plataforma (barra lateral vino).
 * Queda fijo a la altura de la pantalla y se puede plegar.
 */
export default function Sidebar({ active }) {
  const { plegado, setPlegado } = useNav();

  return (
    <>
      <input
        type="checkbox"
        id="nav-pleg"
        className="nav-pleg"
        aria-label="Plegar el menú principal"
        checked={plegado}
        onChange={(e) => setPlegado(e.target.checked)}
      />
      <aside className="menu-principal">
        <a href="#/" className="menu-marca" aria-label="AI Class Builder, Universidad Autónoma de Occidente">
          <span className="menu-marca-uao">uao</span>
          <span className="menu-marca-linea" />
          <span className="menu-marca-nombre">
            AI Class
            <br />
            Builder
          </span>
        </a>

        <nav aria-label="Principal" className="menu-nav">
          {ENLACES.map((e) => (
            <a
              key={e.id}
              href={e.href}
              className={e.id === active ? 'menu-enlace activo' : 'menu-enlace'}
              aria-current={e.id === active ? 'page' : undefined}
              title={e.texto}
            >
              <Icono paths={e.icono} />
              {e.texto}
            </a>
          ))}
        </nav>

        <label htmlFor="nav-pleg" className="nav-pleg-btn" title="Plegar o desplegar el menú">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M9 4v16" />
            <path className="pleg-flecha" d="M16 9l-3 3 3 3" />
          </svg>
          {plegado ? 'Mostrar menú' : 'Ocultar menú'}
        </label>

        <MenuCuenta activo={active === 'perfil'} />
      </aside>
    </>
  );
}
