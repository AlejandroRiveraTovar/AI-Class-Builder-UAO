import { useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './AnaliticaTrayectoria.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
renderVals() { return {}; }
}

export default function AnaliticaTrayectoria(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Analítica de la trayectoria formativa · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-analitica-trayectoria">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main id="arriba" style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 28px clamp(16px, 4vw, 48px) 56px; display: flex; flex-direction: column; gap: 28px")}>
          {" "}
          <nav aria-label="Ruta de navegación">
            <ol style={sx("list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 2px 10px; font-size: 14px; color: #8A1428")}>
              {" "}
              <li>
                <a href="#/mis-trayectorias" style={sx("display: inline-flex; align-items: center; min-height: 36px; font-weight: 600; color: #FF051E; text-underline-offset: 3px")}>
                  Mis trayectorias
                </a>
              </li>
              {" "}
              <li aria-hidden="true" style={sx("color: #A1434F")}>
                ›
              </li>
              {" "}
              <li aria-current="page" style={sx("font-weight: 700")}>
                Analítica de la trayectoria
              </li>
              {" "}
            </ol>
          </nav>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px")}>
            {" "}
            <div style={sx("flex: 1 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
              {" "}
              <span style={sx("font-size: 14px; font-weight: 700; color: #FF051E")}>
                Trayectoria formativa · Diseño Web
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 36px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Analítica de la trayectoria formativa
              </h1>
              {" "}
              <p style={sx("margin: 0; max-width: 820px; font-size: 16px; line-height: 1.55")}>
                Consulta cómo avanza el diseño microcurricular y cómo lo ha desarrollado el docente. Solo mostramos datos de uso; nunca el contenido que escribe.
              </p>
              {" "}
            </div>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; gap: 10px")}>
              {" "}
              <span className="periodo">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="5" width="16" height="15" rx="2"></rect>
                  <path d="M4 10h16"></path>
                  <path d="M9 3v4"></path>
                  <path d="M15 3v4"></path>
                </svg>
                Periodo: 15/09/2026 a 30/09/2026
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <section aria-label="Ficha del docente y del proceso" style={sx("position: relative; overflow: hidden; border-radius: 20px; background: #FF051E; color: #FFFFFF; padding: 28px 32px; display: flex; flex-wrap: wrap; gap: 24px 48px")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; right: -80px; bottom: -250px; width: 420px; height: 340px; border-radius: 50%; background: #FBF5EC")}></div>
            {" "}
            <div style={sx("position: relative; flex: 1 1 360px; min-width: 0; display: flex; align-items: center; gap: 18px")}>
              {" "}
              <span aria-hidden="true" style={sx("flex: none; width: 68px; height: 68px; border-radius: 50%; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800")}>
                JM
              </span>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                {" "}
                <span style={sx("font-size: 13px; font-weight: 700")}>
                  Docente
                </span>
                {" "}
                <h2 style={sx("margin: 0; font-size: 26px; line-height: 1.15; font-weight: 800")}>
                  Juan Martínez
                </h2>
                {" "}
                <span style={sx("font-size: 15px")}>
                  Facultad de Ingeniería · Ingeniería Multimedia
                </span>
                {" "}
                <span style={sx("font-size: 14px")}>
                  Identificador: DOC-0482
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <dl className="ficha" style={sx("position: relative; flex: 2 1 640px")}>
              {" "}
              <div>
                <dt>
                  Proceso
                </dt>
                <dd>
                  Diseño microcurricular de Diseño Web
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Identificador del proceso
                </dt>
                <dd>
                  PRC-2026-0157
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Tipo de proceso
                </dt>
                <dd>
                  Diseño microcurricular
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Trayectoria y programa
                </dt>
                <dd>
                  Diseño Web · Ingeniería Multimedia
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Fecha de inicio
                </dt>
                <dd>
                  15/09/2026
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Estado actual
                </dt>
                <dd>
                  <span className="pill" style={sx("background: #FFFFFF; color: #8A1428")}>
                    En desarrollo
                  </span>
                </dd>
              </div>
              {" "}
            </dl>
            {" "}
          </section>
          {" "}
          <section aria-labelledby="t-kpi" style={sx("display: flex; flex-direction: column; gap: 14px")}>
            {" "}
            <h2 id="t-kpi" className="vh">
              Indicadores clave
            </h2>
            {" "}
            <ul className="kpis">
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Completitud
                </span>
                {" "}
                <div style={sx("display: flex; align-items: center; gap: 14px")}>
                  {" "}
                  <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="23" fill="none" stroke="#F1E4D3" strokeWidth="7"></circle>
                    <circle cx="28" cy="28" r="23" fill="none" stroke="#FF051E" strokeWidth="7" strokeLinecap="round" strokeDasharray="62.1 144.5" transform="rotate(-90 28 28)"></circle>
                  </svg>
                  {" "}
                  <span className="kpi-v">
                    43 %
                  </span>
                  {" "}
                </div>
                {" "}
                <span className="kpi-n">
                  3 de 7 etapas obligatorias
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Etapa actual
                </span>
                {" "}
                <span className="kpi-v" style={sx("font-size: 22px; line-height: 1.2")}>
                  Instrumentos de evaluación UAO
                </span>
                {" "}
                <span className="kpi-n">
                  Etapa 4 de 7 · hace 2 días
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Días sin interacción
                </span>
                {" "}
                <span className="kpi-v">
                  3 días
                </span>
                {" "}
                <span className="kpi-n">
                  Última: 28/09/2026, 10:24 a. m.
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Solicitudes a la IA
                </span>
                {" "}
                <span className="kpi-v">
                  126
                </span>
                {" "}
                <span className="kpi-n">
                  41 iteraciones sobre una misma tarea
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Asistentes utilizados
                </span>
                {" "}
                <span className="kpi-v">
                  4 de 5
                </span>
                {" "}
                <span className="kpi-n">
                  Más usado: Diseño microcurricular UAO
                </span>
                {" "}
              </li>
              {" "}
            </ul>
            {" "}
          </section>
          {" "}
          <div className="dos">
            {" "}
            <section className="caja" aria-labelledby="t-etapas" style={sx("flex: 3 1 640px")}>
              {" "}
              <div className="caja-cab">
                <h2 id="t-etapas">
                  Avance por etapas
                </h2>
                <span className="sub">
                  3 completadas · 1 en desarrollo · 3 pendientes
                </span>
              </div>
              {" "}
              <ol className="etapas">
                {" "}
                <li className="hecha">
                  <span className="marca" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <div className="et-txt">
                    <strong>
                      Contextualización de la trayectoria
                    </strong>
                    <span>
                      Información general, marco curricular, tipos de conocimiento e intención pedagógica
                    </span>
                  </div>
                  <span className="pill ok">
                    Completada
                  </span>
                  <span className="fecha">
                    18/09/2026
                  </span>
                </li>
                {" "}
                <li className="hecha">
                  <span className="marca" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <div className="et-txt">
                    <strong>
                      Diseño microcurricular UAO
                    </strong>
                    <span>
                      Matriz de alineación de actividades
                    </span>
                  </div>
                  <span className="pill ok">
                    Completada
                  </span>
                  <span className="fecha">
                    22/09/2026
                  </span>
                </li>
                {" "}
                <li className="hecha">
                  <span className="marca" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                  </span>
                  <div className="et-txt">
                    <strong>
                      Diseña UAO
                    </strong>
                    <span>
                      Actividades de aprendizaje con el modelo Canvas
                    </span>
                  </div>
                  <span className="pill ok">
                    Completada
                  </span>
                  <span className="fecha">
                    26/09/2026
                  </span>
                </li>
                {" "}
                <li className="actual" aria-current="step">
                  <span className="marca" aria-hidden="true">
                    4
                  </span>
                  <div className="et-txt">
                    <strong>
                      Instrumentos de evaluación UAO
                    </strong>
                    <span>
                      Rúbricas y cuestionarios
                    </span>
                  </div>
                  <span className="pill dev">
                    En desarrollo
                  </span>
                  <span className="fecha">
                    Desde 26/09/2026
                  </span>
                </li>
                {" "}
                <li>
                  <span className="marca" aria-hidden="true">
                    5
                  </span>
                  <div className="et-txt">
                    <strong>
                      AUREA
                    </strong>
                    <span>
                      Recursos visuales con la identidad UAO
                    </span>
                  </div>
                  <span className="pill pe">
                    Pendiente
                  </span>
                  <span className="fecha">
                    —
                  </span>
                </li>
                {" "}
                <li>
                  <span className="marca" aria-hidden="true">
                    6
                  </span>
                  <div className="et-txt">
                    <strong>
                      Guiones técnicos audiovisuales
                    </strong>
                    <span>
                      Guiones por escenas y planos
                    </span>
                  </div>
                  <span className="pill pe">
                    Pendiente
                  </span>
                  <span className="fecha">
                    —
                  </span>
                </li>
                {" "}
                <li>
                  <span className="marca" aria-hidden="true">
                    7
                  </span>
                  <div className="et-txt">
                    <strong>
                      Consolidación y exportación
                    </strong>
                    <span>
                      Revisión final y documento de la trayectoria
                    </span>
                  </div>
                  <span className="pill pe">
                    Pendiente
                  </span>
                  <span className="fecha">
                    —
                  </span>
                </li>
                {" "}
              </ol>
              {" "}
            </section>
            {" "}
            <section className="caja" aria-labelledby="t-estado" style={sx("flex: 2 1 420px")}>
              {" "}
              <div className="caja-cab">
                <h2 id="t-estado">
                  Estado del proceso
                </h2>
              </div>
              {" "}
              <dl className="lista-dl">
                {" "}
                <div>
                  <dt>
                    Siguiente etapa
                  </dt>
                  <dd>
                    AUREA
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Última transición
                  </dt>
                  <dd>
                    De Diseña UAO a Instrumentos de evaluación UAO · 26/09/2026
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Tiempo en la etapa actual
                  </dt>
                  <dd>
                    2 días
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Última interacción
                  </dt>
                  <dd>
                    28/09/2026, 10:24 a. m.
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Actividad finalizada
                  </dt>
                  <dd>
                    No
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Fecha de finalización
                  </dt>
                  <dd>
                    Sin registro
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Producto exportado
                  </dt>
                  <dd>
                    No
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    Fecha de exportación
                  </dt>
                  <dd>
                    Sin registro
                  </dd>
                </div>
                {" "}
              </dl>
              {" "}
            </section>
            {" "}
          </div>
          {" "}
          <section aria-labelledby="t-ia" style={sx("display: flex; flex-direction: column; gap: 14px")}>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px")}>
              {" "}
              <h2 id="t-ia" style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                Uso de la inteligencia artificial
              </h2>
              {" "}
              <span className="chip-ok">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"></path>
                </svg>
                Intervención humana observable: sí
              </span>
              {" "}
            </div>
            {" "}
            <div className="dos">
              {" "}
              <div className="caja" style={sx("flex: 1 1 520px")}>
                {" "}
                <div className="caja-cab">
                  <h3>
                    Solicitudes por asistente
                  </h3>
                  <span className="sub">
                    126 solicitudes válidas
                  </span>
                </div>
                {" "}
                <ul className="barras">
                  {" "}
                  <li>
                    <span className="b-nom">
                      Diseño microcurricular UAO
                    </span>
                    <span className="b-pista">
                      <span style={sx("width: 100%")}></span>
                    </span>
                    <span className="b-val">
                      52{" "}
                      <small>
                        (41 %)
                      </small>
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="b-nom">
                      Diseña UAO
                    </span>
                    <span className="b-pista">
                      <span style={sx("width: 73%")}></span>
                    </span>
                    <span className="b-val">
                      38{" "}
                      <small>
                        (30 %)
                      </small>
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="b-nom">
                      Instrumentos de evaluación UAO
                    </span>
                    <span className="b-pista">
                      <span style={sx("width: 58%")}></span>
                    </span>
                    <span className="b-val">
                      30{" "}
                      <small>
                        (24 %)
                      </small>
                    </span>
                  </li>
                  {" "}
                  <li>
                    <span className="b-nom">
                      AUREA
                    </span>
                    <span className="b-pista">
                      <span style={sx("width: 12%")}></span>
                    </span>
                    <span className="b-val">
                      6{" "}
                      <small>
                        (5 %)
                      </small>
                    </span>
                  </li>
                  {" "}
                  <li className="sin-uso">
                    <span className="b-nom">
                      Guiones técnicos audiovisuales
                    </span>
                    <span className="b-pista">
                      <span style={sx("width: 0%")}></span>
                    </span>
                    <span className="b-val">
                      Sin uso
                    </span>
                  </li>
                  {" "}
                </ul>
                {" "}
              </div>
              {" "}
              <div className="caja" style={sx("flex: 1 1 520px")}>
                {" "}
                <div className="caja-cab">
                  <h3>
                    Qué pasó con las sugerencias
                  </h3>
                  <span className="sub">
                    118 sugerencias generadas
                  </span>
                </div>
                {" "}
                <div role="img" aria-label="De 118 sugerencias: 72 aceptadas, 27 editadas y 19 rechazadas" className="apilada">
                  {" "}
                  <span style={sx("width: 61%; background: #8A1428")}></span>
                  <span style={sx("width: 23%; background: #FF836C")}></span>
                  <span style={sx("width: 16%; background: #E3CFC2")}></span>
                  {" "}
                </div>
                {" "}
                <ul className="leyenda">
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #8A1428")}></span>
                    <span>
                      Aceptadas
                    </span>
                    <strong>
                      72{" "}
                      <small>
                        (61 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #FF836C")}></span>
                    <span>
                      Editadas después
                    </span>
                    <strong>
                      27{" "}
                      <small>
                        (23 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #E3CFC2")}></span>
                    <span>
                      Rechazadas
                    </span>
                    <strong>
                      19{" "}
                      <small>
                        (16 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                </ul>
                {" "}
                <dl className="mini">
                  {" "}
                  <div>
                    <dt>
                      Iteraciones
                    </dt>
                    <dd>
                      41
                    </dd>
                  </div>
                  {" "}
                  <div>
                    <dt>
                      Generaciones fallidas
                    </dt>
                    <dd>
                      8{" "}
                      <small>
                        (6 %)
                      </small>
                    </dd>
                  </div>
                  {" "}
                  <div>
                    <dt>
                      Asistentes distintos
                    </dt>
                    <dd>
                      4
                    </dd>
                  </div>
                  {" "}
                </dl>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <div className="dos">
            {" "}
            <section className="caja" aria-labelledby="t-act" style={sx("flex: 1 1 520px")}>
              {" "}
              <div className="caja-cab">
                <h2 id="t-act">
                  Actividad reciente
                </h2>
                <span className="sub">
                  Sin contenido textual del docente
                </span>
              </div>
              {" "}
              <ol className="linea">
                {" "}
                <li>
                  <time>
                    28/09/2026 · 10:24 a. m.
                  </time>
                  <strong>
                    Solicitud a Instrumentos de evaluación UAO
                  </strong>
                  <span>
                    Generación de una rúbrica analítica.
                  </span>
                </li>
                {" "}
                <li>
                  <time>
                    27/09/2026 · 4:10 p. m.
                  </time>
                  <strong>
                    Edición posterior registrada
                  </strong>
                  <span>
                    El docente modificó una propuesta generada.
                  </span>
                </li>
                {" "}
                <li>
                  <time>
                    26/09/2026 · 11:18 a. m.
                  </time>
                  <strong>
                    Cambio de etapa
                  </strong>
                  <span>
                    De Diseña UAO a Instrumentos de evaluación UAO.
                  </span>
                </li>
                {" "}
                <li>
                  <time>
                    26/09/2026 · 9:50 a. m.
                  </time>
                  <strong>
                    Sugerencia aceptada
                  </strong>
                  <span>
                    Propuesta de actividad generada por Diseña UAO.
                  </span>
                </li>
                {" "}
                <li>
                  <time>
                    22/09/2026 · 3:05 p. m.
                  </time>
                  <strong>
                    Nueva iteración solicitada
                  </strong>
                  <span>
                    Ajuste de la matriz de alineación.
                  </span>
                </li>
                {" "}
              </ol>
              {" "}
              <a href="#/historial" className="enlace">
                Ver historial completo
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </a>
              {" "}
            </section>
            {" "}
            <section className="caja" aria-labelledby="t-ceedi" style={sx("flex: 1 1 520px")}>
              {" "}
              <div className="caja-cab">
                <h2 id="t-ceedi">
                  Acompañamiento del CEEDi
                </h2>
                <span className="pill prog">
                  Programado
                </span>
              </div>
              {" "}
              <div style={sx("display: flex; align-items: center; gap: 12px")}>
                {" "}
                <span aria-hidden="true" style={sx("flex: none; width: 40px; height: 40px; border-radius: 50%; background: #FBF5EC; border: 1.5px solid #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800")}>
                  LG
                </span>
                {" "}
                <span style={sx("display: flex; flex-direction: column")}>
                  <span style={sx("font-size: 13px; color: #A1434F")}>
                    Responsable del acompañamiento
                  </span>
                  <strong style={sx("font-size: 15px")}>
                    Laura Gómez · CEEDi
                  </strong>
                </span>
                {" "}
              </div>
              {" "}
              <div className="nota">
                {" "}
                <span className="nota-et">
                  Observación
                </span>
                {" "}
                <p>
                  Avance constante. La matriz de alineación quedó lista antes de lo previsto; conviene revisar la coherencia entre la rúbrica y los resultados de aprendizaje.
                </p>
                {" "}
              </div>
              {" "}
              <div className="nota">
                {" "}
                <span className="nota-et">
                  Recomendación registrada · 27/09/2026
                </span>
                {" "}
                <p>
                  Sesión de acompañamiento para revisar la rúbrica del informe final con el repositorio institucional de rúbricas.
                </p>
                {" "}
              </div>
              {" "}
              <a href="#/chat" className="enlace">
                Escribir al docente
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </a>
              {" "}
            </section>
            {" "}
          </div>
          {" "}
          <section aria-labelledby="t-perfil" className="caja" style={sx("gap: 20px")}>
            {" "}
            <div className="caja-cab">
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                <h2 id="t-perfil">
                  Perfil del docente: todas sus trayectorias
                </h2>
                <span className="sub">
                  Juan Martínez · Docente UAO
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <dl className="resumen">
              {" "}
              <div>
                <dt>
                  Trayectorias
                </dt>
                <dd>
                  3
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Finalizadas
                </dt>
                <dd>
                  1
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Completitud promedio
                </dt>
                <dd>
                  54 %
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Solicitudes a la IA
                </dt>
                <dd>
                  241
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  Sugerencias aceptadas
                </dt>
                <dd>
                  64 %
                </dd>
              </div>
              {" "}
            </dl>
            {" "}
            <div style={sx("overflow-x: auto")}>
              {" "}
              <table className="tabla">
                <caption className="vh">
                  Trayectorias formativas de Juan Martínez
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      Trayectoria
                    </th>
                    <th scope="col">
                      Estado
                    </th>
                    <th scope="col">
                      Etapa actual
                    </th>
                    <th scope="col">
                      Completitud
                    </th>
                    <th scope="col">
                      Última interacción
                    </th>
                    <th scope="col">
                      <span className="vh">
                        Acción
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="esta">
                    <th scope="row">
                      Diseño Web
                      <small>
                        Ingeniería Multimedia
                      </small>
                    </th>
                    <td>
                      <span className="pill dev">
                        En desarrollo
                      </span>
                    </td>
                    <td>
                      Instrumentos de evaluación UAO
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 43%")}></span>
                        </span>
                        43 %
                      </span>
                    </td>
                    <td>
                      28/09/2026
                    </td>
                    <td>
                      <span className="aqui">
                        Estás aquí
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Taller de Creatividad
                      <small>
                        Diseño
                      </small>
                    </th>
                    <td>
                      <span className="pill dev">
                        En desarrollo
                      </span>
                    </td>
                    <td>
                      Diseño microcurricular UAO
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 19%")}></span>
                        </span>
                        19 %
                      </span>
                    </td>
                    <td>
                      22/09/2026
                    </td>
                    <td>
                      <a href="#/analitica-trayectoria" className="enlace">
                        Ver analítica
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Fundamentos de Programación
                      <small>
                        Ingeniería Multimedia
                      </small>
                    </th>
                    <td>
                      <span className="pill ok">
                        Finalizada
                      </span>
                    </td>
                    <td>
                      Exportada el 30/08/2026
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 100%")}></span>
                        </span>
                        100 %
                      </span>
                    </td>
                    <td>
                      30/08/2026
                    </td>
                    <td>
                      <a href="#/analitica-trayectoria" className="enlace">
                        Ver analítica
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section aria-labelledby="t-priv" style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 26px; border-radius: 18px; background: #8A1428; color: #FBF5EC")}>
            {" "}
            <div style={sx("flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 4px")}>
              {" "}
              <h2 id="t-priv" style={sx("margin: 0; font-size: 17px; font-weight: 800; color: #FFFFFF")}>
                Datos de uso, no de contenido
              </h2>
              {" "}
              <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                Esta analítica registra acciones, fechas y conteos. No guarda lo que el docente escribe ni lo que edita. Solo la consultan colaboradores autorizados del CEEDi.
              </p>
              {" "}
            </div>
            {" "}
            <a href="#/politica-privacidad" target="_blank" rel="noopener noreferrer" title="Se abre en una pestaña nueva" style={sx("display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #FBF5EC; color: #FBF5EC; font-size: 15px; font-weight: 700; text-decoration: none")}>
              Política de privacidad
            </a>
            {" "}
          </section>
          {" "}
        </main>
        {" "}
      </div>
      {" "}
    </div>
  );
}
