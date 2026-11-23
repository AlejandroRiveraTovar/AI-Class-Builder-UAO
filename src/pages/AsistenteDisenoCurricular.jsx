import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './AsistenteDisenoCurricular.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { decision: null, borrador: '', extra: [] };
}
renderValsPagina() {
var self = this;
var d = this.state.decision;
var lista = [
['Contextualización de la trayectoria', 'Recopilar la información básica y establecer el contexto del curso.', 'hecha'],
['Contexto curricular y competencias', 'Identificar el componente curricular y las competencias a las que aporta la trayectoria.', 'hecha'],
['Formulación de la competencia', 'Construir o ajustar la competencia que desarrollará el curso.', 'hecha'],
['Niveles de desempeño', 'Definir la progresión de la competencia en cuatro niveles.', 'actual'],
['Resultados de aprendizaje', 'Formular resultados observables, medibles y alcanzables.', 'pendiente'],
['Criterios de evaluación y evidencias', 'Definir cómo se demostrará y evaluará el aprendizaje.', 'pendiente'],
['Conocimientos por nivel', 'Desarrollar los conocimientos proposicionales, funcionales y axiológicos.', 'pendiente'],
['Dedicación y esfuerzo formativo', 'Estimar el esfuerzo requerido para desarrollar cada nivel de desempeño.', 'pendiente'],
['Validación de coherencia curricular', 'Revisar la alineación entre competencia, desempeño, resultados, conocimientos y evaluación.', 'pendiente'],
['Generación del producto final', 'Consolidar el diseño curricular en un documento estructurado y listo para revisión o transferencia.', 'pendiente']
];
var completadas = lista.filter(function (x) { return x[2] === 'hecha'; }).length;
var avance = Math.round(completadas / lista.length * 100);
var c = 'width: 30px; height: 30px; border-radius: 50%; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; ';
var etapas = lista.map(function (x, i) {
var t = x[2];
return {
n: i + 1,
esActual: t === 'actual',
conTexto: t !== 'hecha',
noActual: t !== 'actual',
titulo: x[0],
texto: x[1],
marca: t === 'hecha' ? '✓' : String(i + 1),
estado: t === 'hecha' ? 'Completada' : (t === 'actual' ? 'En curso' : 'Pendiente'),
circulo: c + (t === 'hecha' ? 'background: #8A1428; color: #FBF5EC' : (t === 'actual' ? 'background: #FFFFFF; color: #FF051E; border: 2.5px solid #FF051E' : 'background: #FBF5EC; color: #A1434F; border: 1.5px solid #E3CFC2')),
linea: 'width: 2px; flex: 1 1 auto; min-height: 12px; background: ' + (t === 'hecha' ? '#8A1428' : '#F1E4D3'),
conLinea: i < lista.length - 1,
tituloEstilo: 'font-size: 15px; line-height: 1.3; font-weight: ' + (t === 'pendiente' ? '500; color: #A1434F' : '700; color: #8A1428'),
estadoEstilo: 'font-size: 13px; font-weight: ' + (t === 'actual' ? '700; color: #FF051E' : '500; color: #A1434F')
};
});
var marca = 'width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; ';
return {
etapas: etapas,
totalEtapas: lista.length,
completadas: completadas,
etapaActual: completadas + 1,
avance: avance,
barra: 'width: ' + avance + '%; height: 100%; border-radius: 999px; background: #FF051E',
pendiente: !d,
decidida: !!d,
decisionTexto: d === 'aceptada' ? 'Integraste estos niveles de desempeño a tu trayectoria.' : 'Rechazaste esta propuesta. Pídele al asistente una nueva versión.',
marcaEstilo: marca + (d === 'aceptada' ? 'background: #8A1428; color: #FBF5EC' : 'background: #FFFFFF; color: #AC0B32; border: 1.5px solid #AC0B32'),
marcaIcono: d === 'aceptada' ? 'M5 12l5 5 9-10' : 'M7 7l10 10M17 7L7 17',
aceptar: function () { self.setState({ decision: 'aceptada' }); },
rechazar: function () { self.setState({ decision: 'rechazada' }); },
deshacer: function () { self.setState({ decision: null }); },
borrador: this.state.borrador,
escribir: function (e) { self.setState({ borrador: e.target.value }); },
enviar: function (e) {
e.preventDefault();
var t = (self.state.borrador || '').trim();
if (!t) return;
self.setState({ extra: self.state.extra.concat([{ texto: t }]), borrador: '' });
},
extra: this.state.extra
};
}

renderVals() { return Object.assign({}, this.renderValsPagina(), this.usuarioVals()); }
// rol:inicio
usuarioVals() {
var rol = 'docente';
try { rol = window.localStorage.getItem('aicb-rol') === 'ceedi' ? 'ceedi' : 'docente'; } catch (e) { rol = 'docente'; }
var ceedi = rol === 'ceedi';
return {
usrTrayHref: ceedi ? '#/ceedi/trayectorias' : '#/mis-trayectorias',
usrTrayTexto: ceedi ? 'Trayectorias' : 'Mis trayectorias',
usrPerfilHref: ceedi ? '#/ceedi/perfil' : '#/perfil',
usrNombre: ceedi ? 'Laura Gómez' : 'Juan Martínez',
usrRol: ceedi ? 'Colaboradora CEEDi' : 'Docente UAO',
usrIni: ceedi ? 'LG' : 'JM'
};
}
// rol:fin
}

export default function AsistenteDisenoCurricular(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Diseño curricular UAO · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-asistente-diseno-curricular">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; display: flex; flex-direction: column; background: #FBF5EC")}>
          {" "}
          <div style={sx("padding: 14px clamp(16px, 3vw, 32px) 0; background: #FFFFFF")}>
            {" "}
            <nav aria-label="Ruta de navegación">
              <ol style={sx("list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 2px 10px; font-size: 14px; color: #8A1428")}>
                {" "}
                <li>
                  <a href={v.usrTrayHref} style={sx("display: inline-flex; align-items: center; min-height: 36px; font-weight: 600; color: #FF051E; text-underline-offset: 3px")}>
                    {v.usrTrayTexto}
                  </a>
                </li>
                {" "}
                <li aria-hidden="true" style={sx("color: #A1434F")}>
                  ›
                </li>
                {" "}
                <li aria-current="page" style={sx("font-weight: 700")}>
                  Diseño curricular UAO
                </li>
                {" "}
              </ol>
            </nav>
            {" "}
          </div>
          {" "}
          <header data-guia="encabezado" style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 16px; padding: 12px clamp(16px, 3vw, 32px) 18px; background: #FFFFFF; border-bottom: 1px solid #F1E4D3")}>
            {" "}
            <span style={sx("flex: none; width: 48px; height: 48px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
              {" "}
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11l8-7 8 7"></path>
                <path d="M6 10v10h12V10"></path>
                <path d="M10 20v-5h4v5"></path>
              </svg>
            </span>
            {" "}
            <div style={sx("flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 2px")}>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 700; color: #AC0B32")}>
                Asistente 1
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 22px; line-height: 1.2; font-weight: 800")}>
                Diseño curricular UAO
              </h1>
              {" "}
              <span style={sx("font-size: 14px")}>
                Trayectoria:{" "}
                <strong>
                  Diseño Web
                </strong>
                {" "}· Ingeniería Multimedia
              </span>
              {" "}
            </div>
            {" "}
            <button type="button" aria-label="Más opciones del asistente" title="Más opciones" style={sx("width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
              {" "}
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.8"></circle>
                <circle cx="12" cy="12" r="1.8"></circle>
                <circle cx="12" cy="19" r="1.8"></circle>
              </svg>
            </button>
            {" "}
          </header>
          {" "}
          <div role="log" aria-label="Conversación con el asistente" style={sx("flex: 1 1 auto; padding: 32px clamp(16px, 3vw, 32px); display: flex; flex-direction: column; gap: 28px")}>
            {" "}
            <div style={sx("display: flex; justify-content: flex-end; align-items: flex-start; gap: 12px")}>
              {" "}
              <div style={sx("max-width: 640px; background: #8A1428; color: #FBF5EC; border-radius: 18px 4px 18px 18px; padding: 16px 20px; display: flex; flex-direction: column; gap: 8px")}>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Necesito definir las competencias de la trayectoria y sus 4 niveles de desempeño, además de los resultados de aprendizaje y sus indicadores.
                </p>
                {" "}
                <span style={sx("align-self: flex-end; font-size: 12px")}>
                  10:24 a. m.
                </span>
                {" "}
              </div>
              {" "}
              <span aria-hidden="true" style={sx("flex: none; width: 40px; height: 40px; border-radius: 50%; background: #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800")}>
                JM
              </span>
              {" "}
            </div>
            {" "}
            <div style={sx("display: flex; align-items: flex-start; gap: 12px")}>
              {" "}
              <span aria-hidden="true" style={sx("flex: none; width: 40px; height: 40px; border-radius: 12px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11l8-7 8 7"></path>
                  <path d="M6 10v10h12V10"></path>
                  <path d="M10 20v-5h4v5"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 0 1 820px; min-width: 0; background: #FFFFFF; border-radius: 4px 18px 18px 18px; padding: 22px 24px; display: flex; flex-direction: column; gap: 18px")}>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.6")}>
                  Te propongo una estructura inicial para la competencia{" "}
                  <strong>
                    «Comunicación efectiva»
                  </strong>
                  , con sus 4 niveles de desempeño. Revísala y decide cómo seguimos.
                </p>
                {" "}
                <div style={sx("overflow-x: auto; border-radius: 12px; border: 1px solid #F1E4D3")}>
                  {" "}
                  <table style={sx("width: 100%; min-width: 460px; border-collapse: collapse; font-size: 15px")}>
                    <caption style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                      Niveles de desempeño de la competencia Comunicación efectiva
                    </caption>
                    <thead>
                      <tr style={sx("background: #FBF5EC; text-align: left")}>
                        <th scope="col" style={sx("padding: 12px 16px; width: 140px; font-size: 14px; font-weight: 700")}>
                          Nivel
                        </th>
                        <th scope="col" style={sx("padding: 12px 16px; font-size: 14px; font-weight: 700")}>
                          Descripción del desempeño
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={sx("border-top: 1px solid #F1E4D3")}>
                        <th scope="row" style={sx("padding: 12px 16px; text-align: left")}>
                          <span style={sx("display: inline-flex; align-items: center; gap: 8px")}>
                            <span aria-hidden="true" style={sx("display: inline-flex; gap: 2px")}>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #F1E4D3")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #F1E4D3")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #F1E4D3")}></span>
                            </span>
                            Básico
                          </span>
                        </th>
                        <td style={sx("padding: 12px 16px; line-height: 1.5")}>
                          Reconoce conceptos fundamentales.
                        </td>
                      </tr>
                      <tr style={sx("border-top: 1px solid #F1E4D3")}>
                        <th scope="row" style={sx("padding: 12px 16px; text-align: left")}>
                          <span style={sx("display: inline-flex; align-items: center; gap: 8px")}>
                            <span aria-hidden="true" style={sx("display: inline-flex; gap: 2px")}>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #F1E4D3")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #F1E4D3")}></span>
                            </span>
                            Intermedio
                          </span>
                        </th>
                        <td style={sx("padding: 12px 16px; line-height: 1.5")}>
                          Aplica los conceptos en contextos conocidos.
                        </td>
                      </tr>
                      <tr style={sx("border-top: 1px solid #F1E4D3")}>
                        <th scope="row" style={sx("padding: 12px 16px; text-align: left")}>
                          <span style={sx("display: inline-flex; align-items: center; gap: 8px")}>
                            <span aria-hidden="true" style={sx("display: inline-flex; gap: 2px")}>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #F1E4D3")}></span>
                            </span>
                            Avanzado
                          </span>
                        </th>
                        <td style={sx("padding: 12px 16px; line-height: 1.5")}>
                          Integra y adapta conocimientos a nuevos contextos.
                        </td>
                      </tr>
                      <tr style={sx("border-top: 1px solid #F1E4D3")}>
                        <th scope="row" style={sx("padding: 12px 16px; text-align: left")}>
                          <span style={sx("display: inline-flex; align-items: center; gap: 8px")}>
                            <span aria-hidden="true" style={sx("display: inline-flex; gap: 2px")}>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                              <span style={sx("width: 6px; height: 14px; border-radius: 2px; background: #FF051E")}></span>
                            </span>
                            Experto
                          </span>
                        </th>
                        <td style={sx("padding: 12px 16px; line-height: 1.5")}>
                          Lidera procesos y genera propuestas innovadoras.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {" "}
                </div>
                {" "}
                {v.pendiente ? (
                  <>
                    {" "}
                    <div data-guia="propuesta" style={sx("display: flex; flex-wrap: wrap; gap: 8px")}>
                      {" "}
                      <button type="button" onClick={v.aceptar} style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; border: 0; background: #FF051E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer")}>
                        {" "}
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5 9-10"></path>
                        </svg>
                        {" "}Aceptar e integrar
                      </button>
                      {" "}
                      <button type="button" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                        {" "}
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                          <path d="M13.5 6.5l4 4"></path>
                        </svg>
                        {" "}Editar
                      </button>
                      {" "}
                      <button type="button" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                        {" "}
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5"></path>
                          <path d="M20 4v4.5h-4.5"></path>
                          <path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5"></path>
                          <path d="M4 20v-4.5h4.5"></path>
                        </svg>
                        {" "}Regenerar
                      </button>
                      {" "}
                      <button type="button" onClick={v.rechazar} style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #F1E4D3; background: #FFFFFF; color: #AC0B32; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                        {" "}
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 6l12 12"></path>
                          <path d="M18 6L6 18"></path>
                        </svg>
                        {" "}Rechazar
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
                {v.decidida ? (
                  <>
                    {" "}
                    <div role="status" style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; border-radius: 12px; background: #FBF5EC")}>
                      {" "}
                      <span style={sx("display: inline-flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 600")}>
                        {" "}
                        <span aria-hidden="true" style={sx(v.marcaEstilo)}>
                          {" "}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d={v.marcaIcono}></path>
                          </svg>
                        </span>
                        {" "}{v.decisionTexto}
                      </span>
                      {" "}
                      <button type="button" onClick={v.deshacer} style={sx("min-height: 44px; padding: 0 12px; border: 0; background: transparent; color: #FF051E; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer")}>
                        Deshacer
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
                <span style={sx("align-self: flex-end; font-size: 12px; color: #A1434F")}>
                  10:25 a. m.
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {(v.extra || []).map((m, m_i) => (
              <Fragment key={m_i}>
                {" "}
                <div style={sx("display: flex; justify-content: flex-end; align-items: flex-start; gap: 12px")}>
                  {" "}
                  <div style={sx("max-width: 640px; background: #8A1428; color: #FBF5EC; border-radius: 18px 4px 18px 18px; padding: 16px 20px")}>
                    {" "}
                    <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                      {m?.texto}
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <span aria-hidden="true" style={sx("flex: none; width: 40px; height: 40px; border-radius: 50%; background: #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800")}>
                    JM
                  </span>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <form data-guia="mensaje" onSubmit={v.enviar} style={sx("padding: 16px clamp(16px, 3vw, 32px) 24px; background: #FFFFFF; border-top: 1px solid #F1E4D3")}>
            {" "}
            <div style={sx("display: flex; align-items: center; gap: 8px; padding: 6px 6px 6px 8px; border-radius: 14px; border: 1.5px solid #F1E4D3; background: #FBF5EC")}>
              {" "}
              <details className="adjuntar">
                {" "}
                <summary aria-label="Adjuntar" title="Adjuntar" style={sx("flex: none; width: 44px; height: 44px; border-radius: 10px; border: 0; background: transparent; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                  {" "}
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6"></path>
                  </svg>
                </summary>
                {" "}
                <div className="adjuntar-menu" role="group" aria-label="Adjuntar">
                  {" "}
                  <span className="adjuntar-tit" aria-hidden="true">
                    Adjuntar
                  </span>
                  {" "}
                  <label className="adjuntar-op">
                    <span className="adjuntar-ic" style={sx("background: #FF051E; color: #FFFFFF")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 3v5h5"></path>
                        <path d="M9 13h6"></path>
                        <path d="M9 17h4"></path>
                      </svg>
                    </span>
                    Documento
                    <input type="file" className="adjuntar-in" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv" aria-label="Adjuntar documento" />
                  </label>
                  {" "}
                  <label className="adjuntar-op">
                    <span className="adjuntar-ic" style={sx("background: #8A1428; color: #FBF5EC")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                        <circle cx="9" cy="10" r="2"></circle>
                        <path d="M21 16l-5-5-9 9"></path>
                      </svg>
                    </span>
                    Fotos y videos
                    <input type="file" className="adjuntar-in" accept="image/*,video/*" aria-label="Adjuntar fotos y videos" />
                  </label>
                  {" "}
                  <label className="adjuntar-op">
                    <span className="adjuntar-ic" style={sx("background: #FF836C; color: #8A1428")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18V6l11-2v12"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="17" cy="16" r="3"></circle>
                      </svg>
                    </span>
                    Audio
                    <input type="file" className="adjuntar-in" accept="audio/*" aria-label="Adjuntar audio" />
                  </label>
                  {" "}
                  <label className="adjuntar-op">
                    <span className="adjuntar-ic" style={sx("background: #AC0B32; color: #FFFFFF")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4"></circle>
                        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
                      </svg>
                    </span>
                    Contacto
                    <input type="file" className="adjuntar-in" accept=".vcf,text/vcard" aria-label="Adjuntar contacto" />
                  </label>
                  {" "}
                </div>
                {" "}
              </details>
              {" "}
              <label style={sx("flex: 1 1 auto; min-width: 0; display: flex")}>
                {" "}
                <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                  Mensaje para el asistente
                </span>
                {" "}
                <input type="text" value={v.borrador ?? ''} onChange={v.escribir} placeholder="Escribe tu mensaje o una instrucción para el asistente" style={sx("flex: 1 1 auto; min-width: 0; min-height: 44px; border: 0; outline: none; background: transparent; font-family: inherit; font-size: 16px; color: #8A1428")} />
                {" "}
              </label>
              {" "}
              <button type="submit" aria-label="Enviar mensaje" title="Enviar" style={sx("flex: none; width: 48px; height: 48px; border-radius: 12px; border: 0; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                {" "}
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </button>
              {" "}
            </div>
            {" "}
            <p style={sx("margin: 10px 0 0; font-size: 13px; color: #A1434F")}>
              La IA propone; tú decides. Revisa cada propuesta antes de integrarla a tu trayectoria.
            </p>
            {" "}
          </form>
          {" "}
        </main>
        {" "}
        <aside aria-label="Progreso del diseño" className="progreso" style={sx("flex: 1 1 320px; max-width: 100%; box-sizing: border-box; background: #FFFFFF; border-left: 1px solid #F1E4D3; padding: 28px 24px; display: flex; flex-direction: column; gap: 24px")}>
          {" "}
          <div style={sx("display: flex; flex-direction: column; gap: 10px")}>
            {" "}
            <h2 style={sx("margin: 0; font-size: 20px; font-weight: 800")}>
              Progreso del diseño
            </h2>
            {" "}
            <div style={sx("display: flex; justify-content: space-between; font-size: 14px")}>
              {" "}
              <span>
                Etapa{" "}{v.etapaActual}{" "}de{" "}{v.totalEtapas}
              </span>
              {" "}
              <span style={sx("font-weight: 700")}>
                {v.avance}{" "}%
              </span>
              {" "}
            </div>
            {" "}
            <div role="progressbar" aria-label="Avance del diseño" aria-valuenow={v.avance} aria-valuemin="0" aria-valuemax="100" style={sx("height: 10px; border-radius: 999px; background: #F1E4D3; overflow: hidden")}>
              {" "}
              <div style={sx(v.barra)}></div>
              {" "}
            </div>
            {" "}
            <span style={sx("font-size: 14px; color: #A1434F")}>
              {v.completadas}{" "}de{" "}{v.totalEtapas}{" "}etapas completadas
            </span>
            {" "}
          </div>
          {" "}
          <ol className="progreso-lista" style={sx("list-style: none; margin: 0; padding: 0 4px 0 0; display: flex; flex-direction: column")}>
            {" "}
            {(v.etapas || []).map((e, e_i) => (
              <Fragment key={e_i}>
                {" "}
                <li style={sx("display: flex; gap: 14px")}>
                  {" "}
                  <div style={sx("flex: none; display: flex; flex-direction: column; align-items: center")}>
                    {" "}
                    <span aria-hidden="true" style={sx(e?.circulo)}>
                      {e?.marca}
                    </span>
                    {" "}
                    {e?.conLinea ? (
                      <>
                        {" "}
                        <span aria-hidden="true" style={sx(e?.linea)}></span>
                        {" "}
                      </>
                    ) : null}
                    {" "}
                  </div>
                  {" "}
                  <div style={sx("padding: 3px 0 16px; display: flex; flex-direction: column; gap: 2px")}>
                    {" "}
                    <span style={sx(e?.tituloEstilo)}>
                      <span className="vh" style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                        Etapa{" "}{e?.n}.{" "}
                      </span>
                      {e?.titulo}
                    </span>
                    {" "}
                    {e?.conTexto ? (
                      <>
                        <span style={sx("font-size: 13px; line-height: 1.4; color: #A1434F")}>
                          {e?.texto}
                        </span>
                      </>
                    ) : null}
                    {" "}
                    {e?.esActual ? (
                      <>
                        <span style={sx(e?.estadoEstilo)}>
                          {e?.estado}
                        </span>
                      </>
                    ) : null}
                    {" "}
                    {e?.noActual ? (
                      <>
                        <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                          {e?.estado}
                        </span>
                      </>
                    ) : null}
                    {" "}
                  </div>
                  {" "}
                </li>
                {" "}
              </Fragment>
            ))}
            {" "}
          </ol>
          {" "}
          <div data-guia="siguiente" style={sx("flex: none; margin-top: auto; position: relative; overflow: hidden; border-radius: 18px; background: #FF051E; color: #FFFFFF; padding: 22px 22px 70px; display: flex; flex-direction: column; gap: 10px")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; left: 50%; bottom: -190px; width: 260px; height: 240px; margin-left: -130px; border-radius: 50%; background: #FFFFFF")}></div>
            {" "}
            <span style={sx("position: relative; font-size: 13px; font-weight: 700")}>
              Siguiente paso sugerido
            </span>
            {" "}
            <p style={sx("position: relative; margin: 0; font-size: 15px; line-height: 1.5")}>
              Cuando termines las 10 etapas, guardamos tu propuesta curricular. Luego completa el formulario de{" "}
              <strong>
                contextualización de la trayectoria
              </strong>
              {" "}para que los demás asistentes conozcan tu curso.
            </p>
            {" "}
            <a href="#/contextualizacion/1" style={sx("position: relative; align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px; border-radius: 10px; background: #FFFFFF; color: #8A1428; font-size: 14px; font-weight: 700; text-decoration: none")}>
              <span>
                Ir a la contextualización
              </span>
              {" "}
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
            </a>
            {" "}
          </div>
          {" "}
        </aside>
        {" "}
      </div>
      {" "}
    </div>
  );
}
