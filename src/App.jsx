import { useEffect, useMemo, useState } from 'react';
import { useRoute } from './lib/router.js';
import { NavContext } from './components/NavContext.js';
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
  '/politica-privacidad': Politica,
};

function leerPlegado() {
  try {
    return window.localStorage.getItem('menuPlegado') === '1';
  } catch {
    return false;
  }
}

export default function App() {
  const path = useRoute();
  const [plegado, setPlegadoState] = useState(leerPlegado);

  const nav = useMemo(
    () => ({
      plegado,
      setPlegado: (valor) => {
        setPlegadoState(valor);
        try {
          window.localStorage.setItem('menuPlegado', valor ? '1' : '0');
        } catch {
          /* el navegador no permite guardar: se ignora */
        }
      },
    }),
    [plegado]
  );

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
  const contexto = path.match(/^\/contextualizacion(?:\/([1-5]))?$/);
  if (contexto) {
    const paso = contexto[1] || '1';
    pagina = <Contextualizacion key={paso} pasoInicial={paso} />;
  } else {
    const Pagina = RUTAS[path] || Inicio;
    pagina = <Pagina key={path} />;
  }

  return <NavContext.Provider value={nav}>{pagina}</NavContext.Provider>;
}
