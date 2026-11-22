import { useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Visualizacion.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
renderVals() { return {}; }
}

export default function Visualizacion(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Vista previa del diseño microcurricular · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-visualizacion">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main id="arriba" style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 28px clamp(16px, 4vw, 48px) 48px; display: flex; flex-direction: column; gap: 24px")}>
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
                Vista previa
              </li>
              {" "}
            </ol>
          </nav>
          {" "}
          <div style={sx("display: flex; flex-direction: column; gap: 6px")}>
            {" "}
            <span style={sx("font-size: 14px; font-weight: 700; color: #FF051E")}>
              Trayectoria académica
            </span>
            {" "}
            <h1 style={sx("margin: 0; font-size: 36px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
              Vista previa del diseño microcurricular
            </h1>
            {" "}
            <p style={sx("margin: 0; max-width: 820px; font-size: 16px; line-height: 1.55")}>
              Revisa en un solo lugar lo que construiste en la contextualización y con los asistentes. Así se verá el documento final de tu trayectoria antes de integrarlo a la Universidad.
            </p>
            {" "}
          </div>
          {" "}
          <section aria-label="Ficha de la trayectoria" style={sx("position: relative; overflow: hidden; border-radius: 20px; background: #FF051E; color: #FFFFFF; padding: 26px 30px; display: flex; flex-wrap: wrap; align-items: center; gap: 20px 36px")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; right: -60px; bottom: -230px; width: 380px; height: 320px; border-radius: 50%; background: #FBF5EC")}></div>
            {" "}
            <div style={sx("position: relative; flex: 1 1 340px; min-width: 0; display: flex; align-items: center; gap: 16px")}>
              {" "}
              <span aria-hidden="true" style={sx("flex: none; width: 60px; height: 60px; border-radius: 16px; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"></path>
                  <path d="M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                {" "}
                <h2 style={sx("margin: 0; font-size: 26px; line-height: 1.15; font-weight: 800")}>
                  Diseño Web
                </h2>
                {" "}
                <span style={sx("font-size: 15px")}>
                  Ingeniería Multimedia · Semestre 5 · 3 créditos · Presencial
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <dl style={sx("position: relative; flex: 2 1 560px; min-width: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px 24px; font-size: 14px")}>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                <dt>
                  Última edición
                </dt>
                <dd style={sx("margin: 0; font-size: 16px; font-weight: 800")}>
                  28/09/2026
                </dd>
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                <dt>
                  Versión actual
                </dt>
                <dd style={sx("margin: 0; font-size: 16px; font-weight: 800")}>
                  v1.4
                </dd>
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                <dt>
                  Responsable
                </dt>
                <dd style={sx("margin: 0; font-size: 16px; font-weight: 800")}>
                  Juan Martinez
                </dd>
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 4px")}></div>
              {" "}
            </dl>
            {" "}
          </section>
          {" "}
          <nav aria-label="Artefactos del diseño" className="indice" style={sx("display: flex; flex-direction: column; gap: 10px")}>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px")}>
              {" "}
              <h2 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                Artefactos del diseño microcurricular
              </h2>
              {" "}
              <span style={sx("font-size: 14px")}>
                <strong>
                  2
                </strong>
                {" "}aprobados ·{" "}
                <strong>
                  2
                </strong>
                {" "}en revisión ·{" "}
                <strong>
                  2
                </strong>
                {" "}pendientes
              </span>
              {" "}
            </div>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; gap: 8px")}>
              {" "}
              <a href="#a1">
                Competencias y RA
              </a>
              {" "}
              <a href="#a2">
                Matriz de alineación
              </a>
              {" "}
              <a href="#a3">
                Actividades de aprendizaje
              </a>
              {" "}
              <a href="#a4">
                Instrumentos de evaluación
              </a>
              {" "}
              <a href="#a5">
                Recursos visuales
              </a>
              {" "}
              <a href="#a6">
                Guion técnico
              </a>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
          <section id="a1" className="art" aria-labelledby="t-a1">
            {" "}
            <div className="cab">
              {" "}
              <span className="tile" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11l8-7 8 7"></path>
                  <path d="M6 10v10h12V10"></path>
                  <path d="M10 20v-5h4v5"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 320px; min-width: 0")}>
                <h2 id="t-a1">
                  Competencias y resultados de aprendizaje
                </h2>
                <p>
                  Competencias de la trayectoria y sus resultados de aprendizaje.
                </p>
                <dl className="meta">
                  <div>
                    <dt className="vh">
                      Estado
                    </dt>
                    <dd>
                      <span className="pill ap">
                        Aprobado
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Última edición
                    </dt>
                    <dd>
                      22/09/2026
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Origen
                    </dt>
                    <dd>
                      Contextualización, parte 2
                    </dd>
                  </div>
                </dl>
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="prev">
                <div style={sx("overflow-x: auto")}>
                  <table className="tb">
                    <thead>
                      <tr>
                        <th scope="col" style={sx("width: 40%")}>
                          Competencia
                        </th>
                        <th scope="col">
                          Resultados de aprendizaje
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" rowSpan="2">
                          C1 · Diseña interfaces interactivas centradas en las personas usuarias, con principios de usabilidad, en contextos reales.
                        </th>
                        <td>
                          RA1 · Identifica los principios de usabilidad presentes en interfaces existentes.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          RA2 · Prototipa interfaces interactivas que responden a necesidades reales de las personas usuarias.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="a2" className="art" aria-labelledby="t-a2">
            {" "}
            <div className="cab">
              {" "}
              <span className="tile" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5"></circle>
                  <path d="M3 20c0-3.3 2.7-6 6-6"></path>
                  <path d="M14 20l1-3 4.5-4.5 2 2L17 19z"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 320px; min-width: 0")}>
                <h2 id="t-a2">
                  Matriz de alineación
                </h2>
                <p>
                  Relación entre actividades, aportes, escalones, medios de evaluación y semanas.
                </p>
                <dl className="meta">
                  <div>
                    <dt className="vh">
                      Estado
                    </dt>
                    <dd>
                      <span className="pill rv">
                        En revisión
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Última edición
                    </dt>
                    <dd>
                      28/09/2026
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Asistente
                    </dt>
                    <dd>
                      Diseño microcurricular UAO
                    </dd>
                  </div>
                </dl>
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="prev">
                <h3>
                  Matriz de alineación · Semana 1
                </h3>
                <div style={sx("overflow-x: auto")}>
                  <table className="tb">
                    <thead>
                      <tr>
                        <th scope="col">
                          Actividad
                        </th>
                        <th scope="col">
                          Aporte
                        </th>
                        <th scope="col">
                          Escalón
                        </th>
                        <th scope="col">
                          Medio de evaluación
                        </th>
                        <th scope="col">
                          Semana
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          1 · Introducción
                        </th>
                        <td>
                          Participación activa
                        </td>
                        <td>
                          Básico
                        </td>
                        <td>
                          Foro y cuestionario
                        </td>
                        <td>
                          1
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          2 · Desarrollo
                        </th>
                        <td>
                          Análisis y aplicación
                        </td>
                        <td>
                          Intermedio
                        </td>
                        <td>
                          Tarea individual
                        </td>
                        <td>
                          1
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          3 · Cierre
                        </th>
                        <td>
                          Síntesis y reflexión
                        </td>
                        <td>
                          Avanzado
                        </td>
                        <td>
                          Proyecto final
                        </td>
                        <td>
                          1
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="a3" className="art" aria-labelledby="t-a3">
            {" "}
            <div className="cab">
              {" "}
              <span className="tile" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M4 10h16"></path>
                  <path d="M10 10v10"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 320px; min-width: 0")}>
                <h2 id="t-a3">
                  Actividades de aprendizaje
                </h2>
                <p>
                  Cada actividad desarrollada con el modelo Canvas.
                </p>
                <dl className="meta">
                  <div>
                    <dt className="vh">
                      Estado
                    </dt>
                    <dd>
                      <span className="pill ap">
                        Aprobado
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Última edición
                    </dt>
                    <dd>
                      26/09/2026
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Asistente
                    </dt>
                    <dd>
                      Diseña UAO
                    </dd>
                  </div>
                </dl>
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="prev">
                <h3>
                  Canvas de actividad: análisis de casos
                </h3>
                {" "}
                <div style={sx("padding: 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px")}>
                  {" "}
                  <div className="bloque">
                    <strong>
                      Propósito
                    </strong>
                    <span>
                      Analizar un caso real y aplicar los conceptos vistos.
                    </span>
                  </div>
                  {" "}
                  <div className="bloque">
                    <strong>
                      Rol del estudiantado
                    </strong>
                    <span>
                      Analista individual del caso.
                    </span>
                  </div>
                  {" "}
                  <div className="bloque">
                    <strong>
                      Recursos
                    </strong>
                    <span>
                      Caso de estudio en PDF y lecturas complementarias.
                    </span>
                  </div>
                  {" "}
                  <div className="bloque">
                    <strong>
                      Actividad
                    </strong>
                    <span>
                      Resolver el caso y elaborar un informe breve.
                    </span>
                  </div>
                  {" "}
                  <div className="bloque">
                    <strong>
                      Producto
                    </strong>
                    <span>
                      Informe individual.
                    </span>
                  </div>
                  {" "}
                  <div className="bloque">
                    <strong>
                      Evaluación
                    </strong>
                    <span>
                      Rúbrica de análisis de caso.
                    </span>
                  </div>
                  {" "}
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="a4" className="art" aria-labelledby="t-a4">
            {" "}
            <div className="cab">
              {" "}
              <span className="tile" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8"></circle>
                  <circle cx="12" cy="12" r="4.5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 320px; min-width: 0")}>
                <h2 id="t-a4">
                  Instrumentos de evaluación
                </h2>
                <p>
                  Rúbrica analítica del informe final y cuestionario de opción múltiple.
                </p>
                <dl className="meta">
                  <div>
                    <dt className="vh">
                      Estado
                    </dt>
                    <dd>
                      <span className="pill rv">
                        En revisión
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Última edición
                    </dt>
                    <dd>
                      27/09/2026
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Asistente
                    </dt>
                    <dd>
                      Instrumentos de evaluación UAO
                    </dd>
                  </div>
                </dl>
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="prev">
                <h3>
                  Rúbrica analítica del informe final · Escala de 0 a 5
                </h3>
                <div style={sx("overflow-x: auto")}>
                  <table className="tb">
                    <thead>
                      <tr>
                        <th scope="col">
                          Criterio
                        </th>
                        <th scope="col">
                          Peso
                        </th>
                        <th scope="col">
                          0 a 1
                        </th>
                        <th scope="col">
                          2 a 3
                        </th>
                        <th scope="col">
                          4 a 5
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          Análisis del caso
                        </th>
                        <td>
                          30 %
                        </td>
                        <td>
                          No analiza
                        </td>
                        <td>
                          Análisis parcial
                        </td>
                        <td>
                          Análisis completo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Argumentación
                        </th>
                        <td>
                          25 %
                        </td>
                        <td>
                          Débil
                        </td>
                        <td>
                          Parcial
                        </td>
                        <td>
                          Sólida
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Estructura del informe
                        </th>
                        <td>
                          20 %
                        </td>
                        <td>
                          Desorganizada
                        </td>
                        <td>
                          Parcial
                        </td>
                        <td>
                          Clara y coherente
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Formato y redacción
                        </th>
                        <td>
                          15 %
                        </td>
                        <td>
                          Deficiente
                        </td>
                        <td>
                          Aceptable
                        </td>
                        <td>
                          Excelente
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Fuentes y referencias
                        </th>
                        <td>
                          10 %
                        </td>
                        <td>
                          No usa fuentes
                        </td>
                        <td>
                          Limitadas
                        </td>
                        <td>
                          Adecuadas
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="a5" className="art" aria-labelledby="t-a5">
            {" "}
            <div className="cab">
              {" "}
              <span className="tile" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="5" width="16" height="14" rx="2"></rect>
                  <circle cx="9" cy="10" r="1.5"></circle>
                  <path d="M20 16l-5-5-8 8"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 320px; min-width: 0")}>
                <h2 id="t-a5">
                  Recursos visuales
                </h2>
                <p>
                  Portadas, banners e infografías con la identidad UAO.
                </p>
                <dl className="meta">
                  <div>
                    <dt className="vh">
                      Estado
                    </dt>
                    <dd>
                      <span className="pill pe">
                        Pendiente
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Última edición
                    </dt>
                    <dd>
                      26/09/2026
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Asistente
                    </dt>
                    <dd>
                      AUREA
                    </dd>
                  </div>
                </dl>
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="prev">
                <h3>
                  Infografía: niveles de desempeño
                </h3>
                {" "}
                <figure role="img" aria-label="Infografía con los niveles básico, intermedio, avanzado y experto" style={sx("margin: 0; padding: 16px; display: flex; flex-direction: column; gap: 12px")}>
                  {" "}
                  <div style={sx("display: flex; align-items: center; gap: 10px")}>
                    <span style={sx("font-size: 24px; font-weight: 800; letter-spacing: -1px; line-height: 1; color: #FF051E")}>
                      uao
                    </span>
                    <span style={sx("width: 1.5px; height: 22px; background: #8A1428")}></span>
                    <span style={sx("font-size: 16px; font-weight: 800")}>
                      Niveles de desempeño
                    </span>
                  </div>
                  {" "}
                  <div style={sx("display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px")}>
                    {" "}
                    <span style={sx("padding: 12px 8px; border-radius: 10px; background: #FF836C; color: #8A1428; font-size: 14px; font-weight: 800; text-align: center")}>
                      Básico
                    </span>
                    {" "}
                    <span style={sx("padding: 12px 8px; border-radius: 10px; background: #FF051E; color: #FFFFFF; font-size: 14px; font-weight: 800; text-align: center")}>
                      Intermedio
                    </span>
                    {" "}
                    <span style={sx("padding: 12px 8px; border-radius: 10px; background: #AC0B32; color: #FFFFFF; font-size: 14px; font-weight: 800; text-align: center")}>
                      Avanzado
                    </span>
                    {" "}
                    <span style={sx("padding: 12px 8px; border-radius: 10px; background: #8A1428; color: #FBF5EC; font-size: 14px; font-weight: 800; text-align: center")}>
                      Experto
                    </span>
                    {" "}
                  </div>
                  {" "}
                </figure>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="a6" className="art" aria-labelledby="t-a6">
            {" "}
            <div className="cab">
              {" "}
              <span className="tile" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M7 6l2 4"></path>
                  <path d="M12 6l2 4"></path>
                  <path d="M17 6l2 4"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 320px; min-width: 0")}>
                <h2 id="t-a6">
                  Guion técnico audiovisual
                </h2>
                <p>
                  Desglose técnico por escenas, planos, movimientos y audio.
                </p>
                <dl className="meta">
                  <div>
                    <dt className="vh">
                      Estado
                    </dt>
                    <dd>
                      <span className="pill pe">
                        Pendiente
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Última edición
                    </dt>
                    <dd>
                      27/09/2026
                    </dd>
                  </div>
                  <div>
                    <dt>
                      Asistente
                    </dt>
                    <dd>
                      Guiones técnicos audiovisuales
                    </dd>
                  </div>
                </dl>
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="prev">
                <h3>
                  Desglose técnico · 3 escenas
                </h3>
                <div style={sx("overflow-x: auto")}>
                  <table className="tb">
                    <thead>
                      <tr>
                        <th scope="col">
                          Escena
                        </th>
                        <th scope="col">
                          Plano
                        </th>
                        <th scope="col">
                          Movimiento de cámara
                        </th>
                        <th scope="col">
                          Audio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          1
                        </th>
                        <td>
                          Plano general
                        </td>
                        <td>
                          <em>
                            Travelling
                          </em>
                          {" "}de acercamiento
                        </td>
                        <td>
                          Voz en off y música
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          2
                        </th>
                        <td>
                          Plano medio
                        </td>
                        <td>
                          Paneo
                        </td>
                        <td>
                          Diálogo entre personajes
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          3
                        </th>
                        <td>
                          Primer plano
                        </td>
                        <td>
                          Cámara fija
                        </td>
                        <td>
                          Sonido ambiente y música
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section aria-labelledby="t-nota" style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 26px; border-radius: 18px; background: #8A1428; color: #FBF5EC")}>
            {" "}
            <div style={sx("flex: 1 1 520px; min-width: 0; display: flex; gap: 14px; align-items: flex-start")}>
              {" "}
              <span aria-hidden="true" style={sx("flex: none; width: 40px; height: 40px; border-radius: 12px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 11v5"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                {" "}
                <h2 id="t-nota" style={sx("margin: 0; font-size: 17px; font-weight: 800; color: #FFFFFF")}>
                  La IA propone; tú decides
                </h2>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                  El contenido generado con IA es un apoyo. Revísalo y valídalo con el CEEDi antes de integrarlo a la Universidad.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <a href="#arriba" style={sx("display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #FBF5EC; color: #FBF5EC; font-size: 15px; font-weight: 700; text-decoration: none")}>
              Volver arriba
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
