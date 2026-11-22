import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Historial.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { asistente: 'todos', q: '', pedido: null, extra: [], hecho: null };
}
renderVals() {
var self = this;
var base = [
{ id: 'v1.4', fecha: '28/09/2026', hora: '11:45 a. m.', autor: 'Juan Martínez', rol: 'Docente UAO', cambio: 'Ajustes en la matriz de alineación', asistente: 'Diseño microcurricular UAO', color: 3 },
{ id: 'v1.3', fecha: '27/09/2026', hora: '4:32 p. m.', autor: 'Laura Gómez', rol: 'Colaboradora CEEDi', cambio: 'Revisión de rúbricas', asistente: 'Instrumentos de evaluación UAO', color: 0 },
{ id: 'v1.2', fecha: '26/09/2026', hora: '10:15 a. m.', autor: 'Juan Martínez', rol: 'Docente UAO', cambio: 'Actualización de actividades', asistente: 'Diseño microcurricular UAO', color: 3 },
{ id: 'v1.1', fecha: '24/09/2026', hora: '3:20 p. m.', autor: 'Laura Gómez', rol: 'Colaboradora CEEDi', cambio: 'Correcciones de formato', asistente: 'Diseño curricular UAO', color: 0 },
{ id: 'v1.0', fecha: '22/09/2026', hora: '9:10 a. m.', autor: 'Juan Martínez', rol: 'Docente UAO', cambio: 'Versión inicial', asistente: 'Diseño curricular UAO', color: 3 }
];
var paleta = ['background: #FF051E; color: #FFFFFF', 'background: #8A1428; color: #FBF5EC', 'background: #AC0B32; color: #FFFFFF', 'background: #FBF5EC; color: #8A1428; border: 1.5px solid #FF836C'];
var todas = this.state.extra.concat(base);
var nuevaId = 'v1.' + (4 + this.state.extra.length + 1);
var q = (this.state.q || '').toLowerCase();
var a = this.state.asistente;
var vis = todas.filter(function (v) {
var okA = a === 'todos' || v.asistente === a;
var okQ = !q || [v.id, v.fecha, v.autor, v.rol, v.cambio, v.asistente].join(' ').toLowerCase().indexOf(q) >= 0;
return okA && okQ;
});
var actualId = todas[0].id;
var filas = vis.map(function (v) {
var actual = v.id === actualId;
var p = v.autor.split(' ');
var marcada = self.state.pedido === v.id;
return Object.assign({}, v, {
actual: actual,
restaurable: !actual,
ini: (p[0].charAt(0) + p[p.length - 1].charAt(0)).toUpperCase(),
avatar: 'flex: none; width: 34px; height: 34px; box-sizing: border-box; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; ' + paleta[v.color],
fila: 'border-top: 1px solid #F1E4D3; ' + (actual ? 'background: #FBF5EC' : (marcada ? 'background: #FFF3EF' : '')),
boton: 'display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px; border-radius: 10px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ' + (marcada ? 'border: 1.5px solid #FF051E; background: #FF051E; color: #FFFFFF' : 'border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428'),
pedir: function () { self.setState({ pedido: v.id, hecho: null }); },
pedirLabel: 'Restaurar la versión ' + v.id
});
});
return {
asistente: a,
elegirAsistente: function (e) { self.setState({ asistente: e.target.value }); },
q: this.state.q,
buscar: function (e) { self.setState({ q: e.target.value }); },
filas: filas,
vacio: filas.length === 0,
cuenta: filas.length,
total: todas.length,
confirmando: !!this.state.pedido,
objetivo: this.state.pedido || '',
nueva: nuevaId,
cancelar: function () { self.setState({ pedido: null }); },
confirmar: function () {
var origen = todas.filter(function (v) { return v.id === self.state.pedido; })[0];
var nueva = { id: nuevaId, fecha: '18/10/2026', hora: 'Ahora', autor: 'Juan Martínez', rol: 'Docente UAO', cambio: 'Restauración de ' + origen.id + ': ' + origen.cambio.toLowerCase(), asistente: origen.asistente, color: 3 };
self.setState({ extra: [nueva].concat(self.state.extra), pedido: null, hecho: 'Restauraste ' + origen.id + '. Ahora es la versión actual (' + nuevaId + ').' });
},
hecho: !!this.state.hecho,
hechoTexto: this.state.hecho || '',
deshacer: function () { self.setState({ extra: self.state.extra.slice(1), hecho: null }); }
};
}
}

export default function Historial(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Historial de versiones · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-historial">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 28px clamp(16px, 4vw, 48px) 32px; display: flex; flex-direction: column; gap: 24px")}>
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
                Historial de versiones
              </li>
              {" "}
            </ol>
          </nav>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 16px 24px")}>
            {" "}
            <div style={sx("flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 4px")}>
              {" "}
              <span style={sx("font-size: 14px; font-weight: 700; color: #FF051E")}>
                Diseño Web · Ingeniería Multimedia
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 34px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Historial de versiones
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.5")}>
                Consulta cómo ha evolucionado tu trayectoria y vuelve a una versión anterior cuando lo necesites.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-start; gap: 24px")}>
            {" "}
            <section aria-label="Versiones" style={sx("flex: 3 1 720px; min-width: 0; display: flex; flex-direction: column; gap: 16px")}>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; gap: 12px")}>
                {" "}
                <label style={sx("flex: 0 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
                  {" "}
                  <span style={sx("font-size: 14px; font-weight: 700")}>
                    Asistente
                  </span>
                  {" "}
                  <select value={v.asistente ?? ''} onChange={v.elegirAsistente} style={sx("min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1.5px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; cursor: pointer")}>
                    <option value="todos">
                      Todos los asistentes
                    </option>
                    <option value="Diseño curricular UAO">
                      Diseño curricular UAO
                    </option>
                    <option value="Diseño microcurricular UAO">
                      Diseño microcurricular UAO
                    </option>
                    <option value="Instrumentos de evaluación UAO">
                      Instrumentos de evaluación UAO
                    </option>
                  </select>
                  {" "}
                </label>
                {" "}
                <label style={sx("flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
                  {" "}
                  <span style={sx("font-size: 14px; font-weight: 700")}>
                    Buscar
                  </span>
                  {" "}
                  <span style={sx("display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 14px; border-radius: 12px; background: #FFFFFF; border: 1.5px solid #F1E4D3")}>
                    {" "}
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AC0B32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="6.5"></circle>
                      <path d="M20 20l-4.2-4.2"></path>
                    </svg>
                    {" "}
                    <input type="search" value={v.q ?? ''} onChange={v.buscar} placeholder="Por versión, fecha, persona o cambio" style={sx("flex: 1 1 auto; min-width: 0; border: 0; outline: none; background: transparent; font-family: inherit; font-size: 15px; color: #8A1428")} />
                    {" "}
                  </span>
                  {" "}
                </label>
                {" "}
              </div>
              {" "}
              <div style={sx("background: #FFFFFF; border-radius: 18px; overflow: hidden")}>
                {" "}
                <div style={sx("overflow-x: auto")}>
                  {" "}
                  <table style={sx("width: 100%; min-width: 820px; border-collapse: collapse; font-size: 15px")}>
                    <caption style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                      Historial de versiones de Diseño Web
                    </caption>
                    <thead>
                      <tr style={sx("background: #8A1428; color: #FBF5EC; text-align: left")}>
                        <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                          Versión
                        </th>
                        <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                          Fecha y hora
                        </th>
                        <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                          Responsable
                        </th>
                        <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                          Cambio realizado
                        </th>
                        <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700; text-align: right")}>
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(v.filas || []).map((v, v_i) => (
                        <Fragment key={v_i}>
                          <tr style={sx(v?.fila)}>
                            <th scope="row" style={sx("padding: 14px 20px; text-align: left; white-space: nowrap")}>
                              {" "}
                              <span style={sx("display: inline-flex; flex-direction: column; gap: 4px")}>
                                {" "}
                                <span style={sx("font-size: 17px; font-weight: 800")}>
                                  {v?.id}
                                </span>
                                {" "}
                                {v?.actual ? (
                                  <>
                                    <span style={sx("align-self: flex-start; padding: 3px 10px; border-radius: 999px; background: #FF051E; color: #FFFFFF; font-size: 12px; font-weight: 700")}>
                                      Versión actual
                                    </span>
                                  </>
                                ) : null}
                                {" "}
                              </span>
                              {" "}
                            </th>
                            <td style={sx("padding: 14px 20px; white-space: nowrap")}>
                              <span style={sx("display: flex; flex-direction: column")}>
                                <span style={sx("font-weight: 600")}>
                                  {v?.fecha}
                                </span>
                                <span style={sx("font-size: 14px; color: #A1434F")}>
                                  {v?.hora}
                                </span>
                              </span>
                            </td>
                            <td style={sx("padding: 14px 20px")}>
                              <span style={sx("display: inline-flex; align-items: center; gap: 10px; white-space: nowrap")}>
                                <span aria-hidden="true" style={sx(v?.avatar)}>
                                  {v?.ini}
                                </span>
                                <span style={sx("display: flex; flex-direction: column; line-height: 1.25")}>
                                  <span style={sx("font-weight: 600")}>
                                    {v?.autor}
                                  </span>
                                  <span style={sx("font-size: 13px; color: #A1434F")}>
                                    {v?.rol}
                                  </span>
                                </span>
                              </span>
                            </td>
                            <td style={sx("padding: 14px 20px")}>
                              <span style={sx("display: flex; flex-direction: column; gap: 2px")}>
                                <span style={sx("line-height: 1.45")}>
                                  {v?.cambio}
                                </span>
                                <span style={sx("font-size: 13px; color: #A1434F")}>
                                  {v?.asistente}
                                </span>
                              </span>
                            </td>
                            <td style={sx("padding: 10px 20px")}>
                              {" "}
                              <div style={sx("display: flex; justify-content: flex-end; gap: 6px")}>
                                {" "}
                                <button type="button" aria-label={`Ver versión ${v?.id ?? ''}`} title="Ver versión" style={sx("width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                                  {" "}
                                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </button>
                                {" "}
                                {v?.restaurable ? (
                                  <>
                                    {" "}
                                    <button type="button" onClick={v?.pedir} aria-haspopup="dialog" aria-label={v?.pedirLabel} style={sx(v?.boton)}>
                                      {" "}
                                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 12a8 8 0 1 0 2.4-5.7"></path>
                                        <path d="M4 4v4h4"></path>
                                      </svg>
                                      {" "}Restaurar
                                    </button>
                                    {" "}
                                  </>
                                ) : null}
                                {" "}
                              </div>
                              {" "}
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                  {" "}
                </div>
                {" "}
                {v.vacio ? (
                  <>
                    {" "}
                    <div style={sx("padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center")}>
                      {" "}
                      <p style={sx("margin: 0; font-size: 17px; font-weight: 700")}>
                        No encontramos versiones con ese criterio
                      </p>
                      {" "}
                      <p style={sx("margin: 0; font-size: 15px")}>
                        Prueba con otra búsqueda o elige otro asistente.
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px")}>
                {" "}
                <p style={sx("margin: 0; font-size: 15px")}>
                  Mostrando{" "}
                  <strong>
                    1–5
                  </strong>
                  {" "}de{" "}
                  <strong>
                    23
                  </strong>
                  {" "}versiones · Página{" "}
                  <strong>
                    1
                  </strong>
                  {" "}de{" "}
                  <strong>
                    5
                  </strong>
                </p>
                {" "}
                <nav aria-label="Paginación" style={sx("display: flex; flex-wrap: wrap; gap: 6px")}>
                  {" "}
                  <button type="button" disabled style={sx("min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1px solid #F1E4D3; background: transparent; color: #C58A93; font-family: inherit; font-size: 15px; font-weight: 600")}>
                    Anterior
                  </button>
                  {" "}
                  <button type="button" aria-current="page" style={sx("min-width: 44px; min-height: 44px; border-radius: 10px; border: 0; background: #FF051E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700")}>
                    1
                  </button>
                  {" "}
                  <button type="button" style={sx("min-width: 44px; min-height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                    2
                  </button>
                  {" "}
                  <button type="button" style={sx("min-width: 44px; min-height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                    3
                  </button>
                  {" "}
                  <button type="button" style={sx("min-width: 44px; min-height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                    4
                  </button>
                  {" "}
                  <button type="button" style={sx("min-width: 44px; min-height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                    5
                  </button>
                  {" "}
                  <button type="button" style={sx("min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer")}>
                    Siguiente
                  </button>
                  {" "}
                </nav>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
          </div>
          <aside style={sx("flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; gap: 24px")}>
            {" "}
            {v.confirmando ? (
              <>
                {" "}
                <div style={sx("position: fixed; inset: 0; z-index: 50; background: rgba(138,20,40,0.45); display: flex; align-items: center; justify-content: center; padding: 16px")}>
                  {" "}
                  <div role="alertdialog" aria-modal="true" aria-labelledby="t-confirmar" aria-describedby="d-confirmar" style={sx("width: 100%; max-width: 480px; box-sizing: border-box; border-radius: 20px; background: #FFFFFF; padding: 28px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 24px 60px rgba(138,20,40,0.3)")}>
                    {" "}
                    <span aria-hidden="true" style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FBF5EC; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12a8 8 0 1 0 2.4-5.7"></path>
                        <path d="M4 4v4h4"></path>
                      </svg>
                    </span>
                    {" "}
                    <h2 id="t-confirmar" style={sx("margin: 0; font-size: 22px; line-height: 1.25; font-weight: 800; color: #8A1428")}>
                      ¿Seguro que quieres restaurar la versión{" "}{v.objetivo}?
                    </h2>
                    {" "}
                    <p id="d-confirmar" style={sx("margin: 0; font-size: 16px; line-height: 1.55; color: #8A1428")}>
                      Crearemos la versión{" "}
                      <strong>
                        {v.nueva}
                      </strong>
                      {" "}con el contenido de{" "}{v.objetivo}, y será la versión actual de tu trayectoria. La versión actual no se borra: queda guardada en este historial.
                    </p>
                    {" "}
                    <div style={sx("display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 10px; margin-top: 4px")}>
                      {" "}
                      <button type="button" onClick={v.cancelar} autoFocus style={sx("min-height: 48px; padding: 0 20px; border-radius: 12px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer")}>
                        Cancelar
                      </button>
                      {" "}
                      <button type="button" onClick={v.confirmar} style={sx("min-height: 48px; padding: 0 20px; border-radius: 12px; border: 0; background: #FF051E; color: #FFFFFF; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer")}>
                        Sí, restaurar
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            {v.hecho ? (
              <>
                {" "}
                <div role="status" style={sx("position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); z-index: 40; display: flex; align-items: center; gap: 12px; padding: 12px 12px 12px 18px; border-radius: 14px; background: #8A1428; color: #FBF5EC; font-size: 15px; font-weight: 600; box-shadow: 0 12px 30px rgba(138,20,40,0.25)")}>
                  {" "}
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                  {v.hechoTexto}{" "}
                  <button type="button" onClick={v.deshacer} style={sx("min-height: 40px; padding: 0 14px; border-radius: 10px; border: 1.5px solid #FBF5EC; background: transparent; color: #FBF5EC; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer")}>
                    Deshacer
                  </button>
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            <section aria-labelledby="t-como" className="como" style={sx("position: relative; overflow: hidden; border-radius: 18px; background: #FF051E; color: #FFFFFF; padding: 26px 28px")}>
              {" "}
              <div aria-hidden="true" style={sx("position: absolute; left: 145px; bottom: -269px; width: 400px; height: 300px; border-radius: 50%; background: #FBF5EC")}></div>
              {" "}
              <div style={sx("position: relative; display: flex; flex-direction: column; gap: 6px")}>
                {" "}
                <h2 id="t-como" style={sx("margin: 0; font-size: 22px; line-height: 1.2; font-weight: 800")}>
                  Así funciona el historial
                </h2>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.5")}>
                  Tu trayectoria guarda cada cambio. Puedes volver atrás sin perder nada.
                </p>
                {" "}
              </div>
              {" "}
              <ol className="como-pasos" style={sx("position: relative; margin: 0; padding: 0; list-style: none")}>
                {" "}
                <li style={sx("display: flex; align-items: flex-start; gap: 14px")}>
                  <span aria-hidden="true" style={sx("flex: none; width: 44px; height: 44px; border-radius: 12px; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h11l3 3v13H5z"></path>
                      <path d="M8 4v5h7V4"></path>
                      <path d="M8 20v-6h8v6"></path>
                    </svg>
                  </span>
                  <span style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    <strong style={sx("font-size: 16px; line-height: 1.3")}>
                      Cada guardado crea una versión
                    </strong>
                    <span style={sx("font-size: 14px; line-height: 1.5")}>
                      Cuando tú o el CEEDi guardan cambios, se registra una versión nueva con fecha y responsable.
                    </span>
                  </span>
                </li>
                {" "}
                <li style={sx("display: flex; align-items: flex-start; gap: 14px")}>
                  <span aria-hidden="true" style={sx("flex: none; width: 44px; height: 44px; border-radius: 12px; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path>
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </span>
                  <span style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    <strong style={sx("font-size: 16px; line-height: 1.3")}>
                      Revisa antes de decidir
                    </strong>
                    <span style={sx("font-size: 14px; line-height: 1.5")}>
                      Con el botón Ver puedes abrir cualquier versión y compararla con la actual.
                    </span>
                  </span>
                </li>
                {" "}
                <li style={sx("display: flex; align-items: flex-start; gap: 14px")}>
                  <span aria-hidden="true" style={sx("flex: none; width: 44px; height: 44px; border-radius: 12px; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12a8 8 0 1 0 2.4-5.7"></path>
                      <path d="M4 4v4h4"></path>
                    </svg>
                  </span>
                  <span style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    <strong style={sx("font-size: 16px; line-height: 1.3")}>
                      Restaurar no borra nada
                    </strong>
                    <span style={sx("font-size: 14px; line-height: 1.5")}>
                      La versión elegida se copia como la más reciente y la actual queda guardada en el historial.
                    </span>
                  </span>
                </li>
                {" "}
              </ol>
              {" "}
            </section>
            {" "}
          </aside>
          {" "}
        </main>
        {" "}
      </div>
      {" "}
    </div>
  );
}
