import { useEffect, useMemo, useRef, useState } from 'react';
import { navigate, useRoute } from './lib/router.js';
import { NavContext } from './components/NavContext.js';
import Guia from './components/Guia.jsx';
import GUIAS from './lib/guias.js';
import Inicio from './pages/Inicio.jsx';
import InicioSesion from './pages/InicioSesion.jsx';
import MisTrayectorias from './pages/MisTrayectorias.jsx';
import Contextualizacion from './pages/Contextualizacion.jsx';
import CentroDiseno from './pages/CentroDiseno.jsx';
import AsistenteDisenoCurricular from './pages/AsistenteDisenoCurricular.jsx';
import AsistenteMicrocurricular from './pages/AsistenteMicrocurricular.jsx';
import AsistenteDisena from './pages/AsistenteDisena.jsx';
import AsistenteEvaluacion from './pages/AsistenteEvaluacion.jsx';
import AsistenteAurea from './pages/AsistenteAurea.jsx';
import AsistenteGuiones from './pages/AsistenteGuiones.jsx';
import Historial from './pages/Historial.jsx';
import Exportacion from './pages/Exportacion.jsx';
import Visualizacion from './pages/Visualizacion.jsx';
import AnaliticaTrayectoria from './pages/AnaliticaTrayectoria.jsx';
import AnaliticaGeneral from './pages/AnaliticaGeneral.jsx';
import Chat from './pages/Chat.jsx';
import Recursos from './pages/Recursos.jsx';
import RecursosPlantillas from './pages/RecursosPlantillas.jsx';
import Perfil from './pages/Perfil.jsx';
import TrayectoriasCeedi from './pages/TrayectoriasCeedi.jsx';
import PerfilCeedi from './pages/PerfilCeedi.jsx';
import Politica from './pages/Politica.jsx';

// Tabla de rutas de la aplicación (#/ruta).
const RUTAS = {
  '/': Inicio,
  '/iniciar-sesion': InicioSesion,
  '/mis-trayectorias': MisTrayectorias,
  '/centro-diseno': CentroDiseno,
  '/asistentes/diseno-curricular': AsistenteDisenoCurricular,
  '/asistentes/diseno-microcurricular': AsistenteMicrocurricular,
  '/asistentes/disena': AsistenteDisena,
  '/asistentes/evaluacion': AsistenteEvaluacion,
  '/asistentes/aurea': AsistenteAurea,
  '/asistentes/guiones': AsistenteGuiones,
  '/historial': Historial,
  '/exportacion': Exportacion,
  '/vista-previa': Visualizacion,
  '/analitica-trayectoria': AnaliticaTrayectoria,
  '/analitica': AnaliticaGeneral,
  '/chat': Chat,
  '/recursos': Recursos,
  '/recursos/plantillas': RecursosPlantillas,
  '/perfil': Perfil,
  '/ceedi/trayectorias': TrayectoriasCeedi,
  '/ceedi/perfil': PerfilCeedi,
  '/politica-privacidad': Politica,
};

// Guía que corresponde a cada ruta.
const GUIA_DE_RUTA = {
  '/mis-trayectorias': 'mis-trayectorias',
  '/ceedi/trayectorias': 'trayectorias-ceedi',
  '/centro-diseno': 'centro-diseno',
  '/asistentes/diseno-curricular': 'asistente-1',
  '/asistentes/diseno-microcurricular': 'asistente-2',
  '/asistentes/disena': 'asistente-3',
  '/asistentes/evaluacion': 'asistente-4',
  '/asistentes/aurea': 'asistente-5',
  '/asistentes/guiones': 'asistente-6',
  '/historial': 'historial',
  '/exportacion': 'exportacion',
  '/vista-previa': 'vista-previa',
  '/analitica-trayectoria': 'analitica-trayectoria',
  '/analitica': 'analitica',
  '/chat': 'chat',
  '/recursos': 'recursos',
  '/recursos/plantillas': 'plantillas',
  '/perfil': 'perfil',
  '/ceedi/perfil': 'perfil-ceedi',
};

// Páginas propias de cada rol: si alguien del otro rol llega a ellas, va a su equivalente.
const EQUIVALENTE_CEEDI = { '/mis-trayectorias': '/ceedi/trayectorias', '/perfil': '/ceedi/perfil' };

function leer(clave, porDefecto) {
  try {
    return window.localStorage.getItem(clave) ?? porDefecto;
  } catch {
    return porDefecto;
  }
}

function guardar(clave, valor) {
  try {
    window.localStorage.setItem(clave, valor);
  } catch {
    /* el navegador no permite guardar: se ignora */
  }
}

export default function App() {
  const path = useRoute();
  const [plegado, setPlegadoState] = useState(() => leer('menuPlegado', '0') === '1');
  const [rol, setRol] = useState(() => leer('aicb-rol', 'docente'));
  const [peticionGuia, setPeticionGuia] = useState(0);
  const anterior = useRef(path);

  // Rol de la sesión (solo frontend):
  // Iniciar sesión → docente; Continuar con Google → colaborador CEEDi (páginas /ceedi/...).
  useEffect(() => {
    const desde = anterior.current;
    anterior.current = path;
    if (path.startsWith('/ceedi/')) {
      setRol('ceedi');
      guardar('aicb-rol', 'ceedi');
    } else if (desde === '/iniciar-sesion' && path === '/mis-trayectorias') {
      setRol('docente');
      guardar('aicb-rol', 'docente');
    } else if (rol === 'ceedi' && EQUIVALENTE_CEEDI[path]) {
      navigate(EQUIVALENTE_CEEDI[path]);
    }
  }, [path, rol]);

  const nav = useMemo(
    () => ({
      plegado,
      setPlegado: (valor) => {
        setPlegadoState(valor);
        guardar('menuPlegado', valor ? '1' : '0');
      },
      rol,
      abrirGuia: () => setPeticionGuia((v) => v + 1),
    }),
    [plegado, rol]
  );

  // Menú de adjuntar: se cierra al hacer clic fuera, con Escape o al elegir un archivo.
  useEffect(() => {
    const cerrar = (excepto) => {
      document.querySelectorAll('details.adjuntar[open]').forEach((d) => {
        if (d !== excepto) d.removeAttribute('open');
      });
    };
    const alPulsar = (e) => cerrar(e.target.closest ? e.target.closest('details.adjuntar') : null);
    const alTeclear = (e) => {
      if (e.key === 'Escape') cerrar(null);
    };
    const alElegir = (e) => {
      if (e.target.classList && e.target.classList.contains('adjuntar-in')) cerrar(null);
    };
    document.addEventListener('mousedown', alPulsar);
    document.addEventListener('keydown', alTeclear);
    document.addEventListener('change', alElegir);
    return () => {
      document.removeEventListener('mousedown', alPulsar);
      document.removeEventListener('keydown', alTeclear);
      document.removeEventListener('change', alElegir);
    };
  }, []);

  // Enlaces internos de la página (#arriba) y enlaces vacíos (#).
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        return;
      }
      if (!href.startsWith('#/')) {
        const destino = document.getElementById(href.slice(1));
        if (destino) {
          e.preventDefault();
          destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  let pagina;
  let rutaGuia = path;
  const contexto = path.match(/^\/contextualizacion(?:\/([1-5]))?$/);
  if (contexto) {
    const paso = contexto[1] || '1';
    pagina = <Contextualizacion key={paso} pasoInicial={paso} />;
  } else {
    const Pagina = RUTAS[path] || Inicio;
    if (!RUTAS[path]) rutaGuia = '/';
    pagina = <Pagina key={path} />;
  }
  const idGuia = contexto ? 'contextualizacion' : GUIA_DE_RUTA[rutaGuia];

  return (
    <NavContext.Provider value={nav}>
      {pagina}
      {idGuia ? <Guia key={idGuia} id={idGuia} pasos={GUIAS[idGuia] || []} peticion={peticionGuia} /> : null}
    </NavContext.Provider>
  );
}
