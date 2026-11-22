import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './AsistenteDisena.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { decision: null, borrador: '', extra: [] };
}
renderVals() {
var self = this;
var d = this.state.decision;
var lista = [
['Contextualización curricular', 'Identifica la trayectoria y los elementos curriculares que orientan el diseño de la actividad.', 'hecha'],
['Competencia y nivel de desempeño', 'Selecciona la competencia, el nivel de desempeño y el nivel formativo correspondiente.', 'hecha'],
['Propósito formativo', 'Define la intención de aprendizaje y lo que se espera desarrollar en el estudiantado.', 'hecha'],
['Contexto de aprendizaje', 'Establece la situación, reto o problema que dará sentido a la experiencia.', 'hecha'],
['Estrategia de aprendizaje', 'Diseña las actividades, fases, recursos, interacciones y tiempos de ejecución.', 'actual'],
['Evidencias y evaluación', 'Define las evidencias, criterios, instrumentos y mecanismos de retroalimentación.', 'pendiente'],
['Alineación institucional', 'Valida la actividad frente a las políticas curriculares, el PEI, la proyección social y la sostenibilidad.', 'pendiente'],
['Consolidación de la actividad', 'Integra, revisa y finaliza la actividad de aprendizaje en el modelo Canvas.', 'pendiente']
];
var objeto = 'este Canvas de actividad';
var hechas = lista.filter(function (x) { return x[2] === 'hecha'; }).length;
var actual = lista.findIndex(function (x) { return x[2] === 'actual'; }) + 1;
var pct = Math.round(hechas / lista.length * 100);
var c = 'width: 30px; height: 30px; border-radius: 50%; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; ';
var etapas = lista.map(function (x, i) {
var t = x[2];
return {
n: i + 1,
texto: x[1],
esActual: t === 'actual',
conTexto: t !== 'hecha',
noActual: t !== 'actual',
titulo: x[0],
marca: t === 'hecha' ? '✓' : String(i + 1),
estado: t === 'hecha' ? 'Completada' : (t === 'actual' ? 'En curso' : 'Pendiente'),
circulo: c + (t === 'hecha' ? 'background: #8A1428; color: #FBF5EC' : (t === 'actual' ? 'background: #FFFFFF; color: #FF051E; border: 2.5px solid #FF051E' : 'background: #FBF5EC; color: #A1434F; border: 1.5px solid #E3CFC2')),
linea: 'width: 2px; flex: 1 1 auto; min-height: 12px; background: ' + (t === 'hecha' ? '#8A1428' : '#F1E4D3'),
conLinea: i < lista.length - 1,
tituloEstilo: 'font-size: 15px; line-height: 1.3; font-weight: ' + (t === 'pendiente' ? '500; color: #A1434F' : '700; color: #8A1428'),
estadoEstilo: 'font-size: 13px; font-weight: ' + (t === 'actual' ? '700; color: #FF051E' : '500; color: #A1434F')
};
});
return {
etapas: etapas,
pct: pct,
barra: 'width: ' + pct + '%; height: 100%; border-radius: 999px; background: #FF051E',
etapaTexto: 'Etapa ' + actual + ' de ' + lista.length,
completadasTexto: hechas + ' de ' + lista.length + ' etapas completadas',
pendiente: !d,
decidida: !!d,
decisionTexto: d === 'aceptada' ? 'Integraste ' + objeto + ' a tu trayectoria.' : 'Rechazaste esta propuesta. Pídele al asistente una nueva versión.',
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
}

export default function AsistenteDisena(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Diseña UAO · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-asistente-disena">
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
                  <a href="#/mis-trayectorias" style={sx("display: inline-flex; align-items: center; min-height: 36px; font-weight: 600; color: #FF051E; text-underline-offset: 3px")}>
                    Mis trayectorias
                  </a>
                </li>
                {" "}
                <li aria-hidden="true" style={sx("color: #A1434F")}>
                  ›
                </li>
                {" "}
                <li>
                  <a href="#/centro-diseno" style={sx("display: inline-flex; align-items: center; min-height: 36px; font-weight: 600; color: #FF051E; text-underline-offset: 3px")}>
                    Centro de diseño microcurricular
                  </a>
                </li>
                {" "}
                <li aria-hidden="true" style={sx("color: #A1434F")}>
                  ›
                </li>
                {" "}
                <li aria-current="page" style={sx("font-weight: 700")}>
                  Diseña UAO
                </li>
                {" "}
              </ol>
            </nav>
            {" "}
          </div>
          {" "}
          <header style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 16px; padding: 12px clamp(16px, 3vw, 32px) 18px; background: #FFFFFF; border-bottom: 1px solid #F1E4D3")}>
            {" "}
            <span style={sx("flex: none; width: 48px; height: 48px; border-radius: 14px; background: #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
              {" "}
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <path d="M4 10h16"></path>
                <path d="M10 10v10"></path>
              </svg>
            </span>
            {" "}
            <div style={sx("flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 2px")}>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 700; color: #AC0B32")}>
                Asistente 3
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 22px; line-height: 1.2; font-weight: 800")}>
                Diseña UAO
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
                  Crea una actividad de aprendizaje individual con el Canvas de actividad. El tema es el análisis de casos.
                </p>
                {" "}
                <span style={sx("align-self: flex-end; font-size: 12px")}>
                  10:45 a. m.
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
              <span aria-hidden="true" style={sx("flex: none; width: 40px; height: 40px; border-radius: 12px; background: #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M4 10h16"></path>
                  <path d="M10 10v10"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 0 1 900px; min-width: 0; background: #FFFFFF; border-radius: 4px 18px 18px 18px; padding: 22px 24px; display: flex; flex-direction: column; gap: 18px")}>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.6")}>
                  Esta es una propuesta de actividad en formato Canvas. Revisa cada bloque y ajusta lo que necesites.
                </p>
                {" "}
                <section aria-labelledby="t-canvas" style={sx("border-radius: 14px; background: #FBF5EC; padding: 16px; display: flex; flex-direction: column; gap: 14px")}>
                  {" "}
                  <div style={sx("display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px")}>
                    {" "}
                    <h2 id="t-canvas" style={sx("margin: 0; font-size: 17px; font-weight: 800")}>
                      Canvas de actividad: análisis de casos
                    </h2>
                    {" "}
                    <span style={sx("font-size: 13px; font-weight: 600")}>
                      Individual · Semana 1
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px")}>
                    {" "}
                    <div className="bloque">
                      <h3>
                        <span className="num" aria-hidden="true">
                          1
                        </span>
                        Propósito
                      </h3>
                      <p>
                        Analizar un caso real y aplicar los conceptos vistos.
                      </p>
                    </div>
                    {" "}
                    <div className="bloque">
                      <h3>
                        <span className="num" aria-hidden="true">
                          2
                        </span>
                        Rol del estudiantado
                      </h3>
                      <p>
                        Analista individual del caso.
                      </p>
                    </div>
                    {" "}
                    <div className="bloque">
                      <h3>
                        <span className="num" aria-hidden="true">
                          3
                        </span>
                        Recursos
                      </h3>
                      <p>
                        Caso de estudio en PDF y lecturas complementarias.
                      </p>
                    </div>
                    {" "}
                    <div className="bloque">
                      <h3>
                        <span className="num" aria-hidden="true">
                          4
                        </span>
                        Actividad
                      </h3>
                      <p>
                        Resolver el caso y elaborar un informe breve.
                      </p>
                    </div>
                    {" "}
                    <div className="bloque">
                      <h3>
                        <span className="num" aria-hidden="true">
                          5
                        </span>
                        Producto
                      </h3>
                      <p>
                        Informe individual.
                      </p>
                    </div>
                    {" "}
                    <div className="bloque">
                      <h3>
                        <span className="num" aria-hidden="true">
                          6
                        </span>
                        Evaluación
                      </h3>
                      <p>
                        Rúbrica de análisis de caso.
                      </p>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </section>
                {" "}
                {v.pendiente ? (
                  <>
                    {" "}
                    <div style={sx("display: flex; flex-wrap: wrap; gap: 8px")}>
                      {" "}
                      <button type="button" className="btn-pri" onClick={v.aceptar}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5 9-10"></path>
                        </svg>
                        Aceptar e integrar
                      </button>
                      {" "}
                      <button type="button" className="btn-sec">
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                          <path d="M13.5 6.5l4 4"></path>
                        </svg>
                        Editar
                      </button>
                      {" "}
                      <button type="button" className="btn-sec">
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5"></path>
                          <path d="M20 4v4.5h-4.5"></path>
                          <path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5"></path>
                          <path d="M4 20v-4.5h4.5"></path>
                        </svg>
                        Regenerar
                      </button>
                      {" "}
                      <button type="button" className="btn-baja" onClick={v.rechazar}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 6l12 12"></path>
                          <path d="M18 6L6 18"></path>
                        </svg>
                        Rechazar
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
                      <span style={sx("font-size: 15px; font-weight: 600")}>
                        {v.decisionTexto}
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
                  10:46 a. m.
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
                    <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                      {m?.texto}
                    </p>
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
          <form onSubmit={v.enviar} style={sx("padding: 16px clamp(16px, 3vw, 32px) 24px; background: #FFFFFF; border-top: 1px solid #F1E4D3")}>
            {" "}
            <div style={sx("display: flex; align-items: center; gap: 8px; padding: 6px 6px 6px 8px; border-radius: 14px; border: 1.5px solid #F1E4D3; background: #FBF5EC")}>
              {" "}
              <button type="button" aria-label="Adjuntar archivo" title="Adjuntar archivo" style={sx("flex: none; width: 44px; height: 44px; border-radius: 10px; border: 0; background: transparent; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6"></path>
                </svg>
              </button>
              {" "}
              <label style={sx("flex: 1 1 auto; min-width: 0; display: flex")}>
                <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                  Mensaje para el asistente
                </span>
                {" "}
                <input type="text" value={v.borrador ?? ''} onChange={v.escribir} placeholder="Escribe tu mensaje o una instrucción para el asistente" style={sx("flex: 1 1 auto; min-width: 0; min-height: 44px; border: 0; outline: none; background: transparent; font-family: inherit; font-size: 16px; color: #8A1428")} />
              </label>
              {" "}
              <button type="submit" aria-label="Enviar mensaje" title="Enviar" style={sx("flex: none; width: 48px; height: 48px; border-radius: 12px; border: 0; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
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
              <span>
                {v.etapaTexto}
              </span>
              <span style={sx("font-weight: 700")}>
                {v.pct}{" "}%
              </span>
            </div>
            {" "}
            <div role="progressbar" aria-label="Avance del diseño" aria-valuenow={v.pct} aria-valuemin="0" aria-valuemax="100" style={sx("height: 10px; border-radius: 999px; background: #F1E4D3; overflow: hidden")}>
              <div style={sx(v.barra)}></div>
            </div>
            {" "}
            <span style={sx("font-size: 14px; color: #A1434F")}>
              {v.completadasTexto}
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
                    <span aria-hidden="true" style={sx(e?.circulo)}>
                      {e?.marca}
                    </span>
                    {e?.conLinea ? (
                      <>
                        <span aria-hidden="true" style={sx(e?.linea)}></span>
                      </>
                    ) : null}
                  </div>
                  {" "}
                  <div style={sx("padding: 3px 0 16px; display: flex; flex-direction: column; gap: 2px")}>
                    <span style={sx(e?.tituloEstilo)}>
                      <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                        Etapa{" "}{e?.n}.{" "}
                      </span>
                      {e?.titulo}
                    </span>
                    {e?.conTexto ? (
                      <>
                        <span style={sx("font-size: 13px; line-height: 1.4; color: #A1434F")}>
                          {e?.texto}
                        </span>
                      </>
                    ) : null}
                    {e?.esActual ? (
                      <>
                        <span style={sx(e?.estadoEstilo)}>
                          {e?.estado}
                        </span>
                      </>
                    ) : null}
                    {e?.noActual ? (
                      <>
                        <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                          {e?.estado}
                        </span>
                      </>
                    ) : null}
                  </div>
                  {" "}
                </li>
                {" "}
              </Fragment>
            ))}
            {" "}
          </ol>
          {" "}
          <div style={sx("flex: none; margin-top: auto; position: relative; overflow: hidden; border-radius: 18px; background: #FF051E; color: #FFFFFF; padding: 22px 22px 70px; display: flex; flex-direction: column; gap: 10px")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; left: 50%; bottom: -190px; width: 260px; height: 240px; margin-left: -130px; border-radius: 50%; background: #FFFFFF")}></div>
            {" "}
            <span style={sx("position: relative; font-size: 13px; font-weight: 700")}>
              Siguiente paso sugerido
            </span>
            {" "}
            <p style={sx("position: relative; margin: 0; font-size: 15px; line-height: 1.5")}>
              Cuando valides el Canvas, continúa con{" "}
              <strong>
                Instrumentos de evaluación UAO
              </strong>
              {" "}para diseñar rúbricas o cuestionarios.
            </p>
            {" "}
            <a href="#/asistentes/evaluacion" style={sx("position: relative; align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px; border-radius: 10px; background: #FFFFFF; color: #8A1428; font-size: 14px; font-weight: 700; text-decoration: none")}>
              <span>
                Ir al asistente
              </span>
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
