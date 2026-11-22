import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Exportacion.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { sel: { dc: true, ma: true, aa: true, ie: true, rv: true, gt: true, an: true, hv: true }, formato: 'pdf', listo: false };
}
renderVals() {
var self = this;
var datos = [
{ id: 'dc', nombre: 'Competencias y resultados de aprendizaje', detalle: 'Competencias, niveles de desempeño y resultados de aprendizaje', origen: 'Contextualización', icono: ['M4 11l8-7 8 7', 'M6 10v10h12V10', 'M10 20v-5h4v5'] },
{ id: 'ma', nombre: 'Matriz de alineación de actividades', detalle: 'Metas, medios de evaluación y semanas', origen: 'Diseño microcurricular UAO', icono: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'] },
{ id: 'aa', nombre: 'Actividades de aprendizaje', detalle: 'Modelo Canvas de cada actividad', origen: 'Diseña UAO', icono: ['M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M4 10h16', 'M10 10v10'] },
{ id: 'ie', nombre: 'Instrumentos de evaluación', detalle: 'Rúbricas y cuestionarios', origen: 'Instrumentos de evaluación UAO', icono: ['M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0', 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0', 'M12 12h.01'] },
{ id: 'rv', nombre: 'Recursos visuales', detalle: 'Portadas, banners e infografías', origen: 'AUREA', icono: ['M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'M10.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0', 'M20 16l-5-5-8 8'] },
{ id: 'gt', nombre: 'Guiones técnicos audiovisuales', detalle: 'Escenas, planos y audio', origen: 'Guiones técnicos audiovisuales', icono: ['M5 6h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z', 'M3 10h18', 'M7 6l2 4', 'M12 6l2 4', 'M17 6l2 4'] },
{ id: 'an', nombre: 'Analítica de la trayectoria formativa', detalle: 'Avance por etapas, uso de la IA y acompañamiento del CEEDi', origen: 'Analítica de la trayectoria', icono: ['M4 20V4', 'M4 20h16', 'M8 15l4-4 3 3 5-6'] },
{ id: 'hv', nombre: 'Historial de versiones', detalle: 'Versiones guardadas, cambios y responsables', origen: 'Historial de versiones', icono: ['M4 12a8 8 0 1 0 2.4-5.7', 'M4 4v4h4', 'M12 8v4l3 2'] }
];
var sel = this.state.sel;
var cuenta = datos.filter(function (d) { return sel[d.id]; }).length;
var todos = cuenta === datos.length;
var componentes = datos.map(function (d) {
var on = !!sel[d.id];
return {
nombre: d.nombre, detalle: d.detalle, origen: d.origen, icono: d.icono, on: on,
caja: 'display: flex; align-items: flex-start; gap: 14px; padding: 16px; border-radius: 14px; cursor: pointer; ' + (on ? 'background: #FBF5EC; border: 1.5px solid #FF051E' : 'background: #FFFFFF; border: 1.5px solid #F1E4D3'),
tile: 'flex: none; width: 42px; height: 42px; box-sizing: border-box; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: #FFFFFF; border: 1px solid #F1E4D3; color: #FF051E',
alternar: function () { var s = Object.assign({}, self.state.sel); s[d.id] = !s[d.id]; self.setState({ sel: s, listo: false }); }
};
});
var fdatos = [
{ id: 'pdf', sigla: 'PDF', nombre: 'PDF', uso: 'Recomendado para revisar e imprimir.', fondo: '#FF051E', tinta: '#FFFFFF' },
{ id: 'xlsx', sigla: 'XLSX', nombre: 'Excel (.xlsx)', uso: 'Matrices y tablas editables.', fondo: '#8A1428', tinta: '#FBF5EC' },
{ id: 'docx', sigla: 'DOCX', nombre: 'Word (.docx)', uso: 'Documento editable.', fondo: '#FFFFFF', tinta: '#8A1428' },
{ id: 'csv', sigla: 'CSV', nombre: 'CSV (.csv)', uso: 'Datos en tablas para analizar en otras herramientas.', fondo: '#FF836C', tinta: '#8A1428' }
];
var f = this.state.formato;
var formatos = fdatos.map(function (x) {
var on = x.id === f;
return {
sigla: x.sigla, nombre: x.nombre, uso: x.uso, on: on,
caja: 'display: flex; align-items: flex-start; gap: 12px; padding: 16px; border-radius: 14px; cursor: pointer; ' + (on ? 'background: #FBF5EC; border: 1.5px solid #FF051E' : 'background: #FFFFFF; border: 1.5px solid #F1E4D3'),
sello: 'flex: none; width: 52px; height: 32px; box-sizing: border-box; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; background: ' + x.fondo + '; color: ' + x.tinta + (x.fondo === '#FFFFFF' ? '; border: 1.5px solid #8A1428' : ''),
elegir: function () { self.setState({ formato: x.id, listo: false }); }
};
});
var nombreF = fdatos.filter(function (x) { return x.id === f; })[0].nombre;
var resumen = cuenta === 0
? 'Elige al menos un componente para generar tu paquete.'
: 'Tu paquete incluirá ' + cuenta + (cuenta === 1 ? ' componente' : ' componentes') + ' en formato ' + nombreF + ', organizados y listos para usar o imprimir.' + (f === 'csv' && sel.rv ? ' Los recursos visuales no tienen versión en CSV, así que no se incluirán.' : '');
return {
componentes: componentes,
cuenta: cuenta,
total: datos.length,
textoTodos: todos ? 'Quitar todos' : 'Seleccionar todos',
alternarTodos: function () {
var s = {}; datos.forEach(function (d) { s[d.id] = !todos; });
self.setState({ sel: s, listo: false });
},
formatos: formatos,
resumen: resumen,
listo: this.state.listo,
sinSeleccion: cuenta === 0,
generar: function () { if (cuenta > 0) self.setState({ listo: true }); },
botonEstilo: 'position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 28px; border-radius: 12px; border: 0; font-family: inherit; font-size: 17px; font-weight: 700; ' + (cuenta === 0 ? 'background: #FFFFFF; color: #A1434F; border: 1.5px solid #E3CFC2; cursor: not-allowed' : 'background: #FF051E; color: #FFFFFF; cursor: pointer')
};
}
}

export default function Exportacion(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Consolidación y exportación · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-exportacion">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 36px clamp(16px, 4vw, 48px) 48px; display: flex; flex-direction: column; gap: 28px")}>
          {" "}
          <div style={sx("display: flex; flex-direction: column; gap: 20px")}>
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
                <li></li>
                {" "}
                <li aria-hidden="true" style={sx("color: #A1434F")}>
                  ›
                </li>
                {" "}
                <li aria-current="page" style={sx("font-weight: 700")}>
                  Consolidación y exportación
                </li>
                {" "}
              </ol>
            </nav>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 8px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                Diseño Web · Ingeniería Multimedia
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 40px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Consolidación y exportación
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 17px; line-height: 1.55; max-width: 760px; width: 892px")}>
                Elige qué incluir y en qué formato. Descarga en un solo paquete todo lo que construiste para tu trayectoria.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <section className="caja" aria-labelledby="t-componentes">
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px")}>
              {" "}
              <div className="paso">
                <span aria-hidden="true">
                  1
                </span>
                <h2 id="t-componentes">
                  Elige los componentes
                </h2>
              </div>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 16px")}>
                {" "}
                <p role="status" style={sx("margin: 0; font-size: 15px")}>
                  <strong>
                    {v.cuenta}{" "}de{" "}{v.total}
                  </strong>
                  {" "}componentes seleccionados
                </p>
                {" "}
                <button type="button" onClick={v.alternarTodos} style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer")}>
                  {v.textoTodos}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <fieldset style={sx("margin: 0; padding: 0; border: 0; min-width: 0")}>
              {" "}
              <legend className="vh">
                Componentes del paquete
              </legend>
              {" "}
              <div className="rej4">
                {" "}
                {(v.componentes || []).map((c, c_i) => (
                  <Fragment key={c_i}>
                    {" "}
                    <label style={sx(c?.caja)}>
                      {" "}
                      <input type="checkbox" checked={!!c?.on} onChange={c?.alternar} />
                      {" "}
                      <span aria-hidden="true" style={sx(c?.tile)}>
                        {" "}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {(c?.icono || []).map((p, p_i) => (
                            <Fragment key={p_i}>
                              <path d={p}></path>
                            </Fragment>
                          ))}
                        </svg>
                      </span>
                      {" "}
                      <span style={sx("flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 3px")}>
                        {" "}
                        <span style={sx("font-size: 16px; font-weight: 700; line-height: 1.3")}>
                          {c?.nombre}
                        </span>
                        {" "}
                        <span style={sx("font-size: 14px; line-height: 1.4")}>
                          {c?.detalle}
                        </span>
                        {" "}
                        <span style={sx("font-size: 13px; color: #A1434F")}>
                          {c?.origen}
                        </span>
                        {" "}
                      </span>
                      {" "}
                    </label>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </fieldset>
            {" "}
          </section>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: stretch; gap: 24px")}>
            {" "}
            <section className="caja" aria-labelledby="t-formato" style={sx("flex: 2 1 720px")}>
              {" "}
              <div className="paso">
                <span aria-hidden="true">
                  2
                </span>
                <h2 id="t-formato">
                  Elige el formato
                </h2>
              </div>
              {" "}
              <fieldset style={sx("margin: 0; padding: 0; border: 0; min-width: 0")}>
                {" "}
                <legend className="vh">
                  Formato de exportación
                </legend>
                {" "}
                <div className="rej4">
                  {" "}
                  {(v.formatos || []).map((f, f_i) => (
                    <Fragment key={f_i}>
                      {" "}
                      <label style={sx(f?.caja)}>
                        {" "}
                        <input type="radio" name="formato" checked={!!f?.on} onChange={f?.elegir} />
                        {" "}
                        <span style={sx("flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 8px")}>
                          {" "}
                          <span aria-hidden="true" style={sx(f?.sello)}>
                            {f?.sigla}
                          </span>
                          {" "}
                          <span style={sx("font-size: 16px; font-weight: 700")}>
                            {f?.nombre}
                          </span>
                          {" "}
                          <span style={sx("font-size: 14px; line-height: 1.4")}>
                            {f?.uso}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </label>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </fieldset>
              {" "}
            </section>
            {" "}
            <section aria-labelledby="t-descarga" style={sx("flex: 1 1 380px; min-width: 0; box-sizing: border-box; position: relative; overflow: hidden; border-radius: 18px; background: #FF051E; color: #FFFFFF; padding: 24px 26px 0; display: flex; flex-direction: column; gap: 14px")}>
              {" "}
              <div style={sx("display: flex; align-items: center; gap: 12px")}>
                {" "}
                <span aria-hidden="true" style={sx("width: 34px; height: 34px; border-radius: 50%; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800")}>
                  3
                </span>
                {" "}
                <h2 id="t-descarga" style={sx("margin: 0; font-size: 20px; font-weight: 800")}>
                  Descarga tu paquete
                </h2>
                {" "}
              </div>
              {" "}
              <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                {v.resumen}
              </p>
              {" "}
              {v.listo ? (
                <>
                  {" "}
                  <div role="status" style={sx("display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 12px; background: #8A1428; color: #FBF5EC; font-size: 15px; font-weight: 600")}>
                    {" "}
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10"></path>
                    </svg>
                    {" "}Listo. Tu paquete se está descargando.
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
              <div style={sx("position: relative; margin: auto -26px 0; padding: 44px 26px 26px; display: flex; justify-content: center")}>
                {" "}
                <div aria-hidden="true" style={sx("position: absolute; left: -25%; right: -25%; top: 0; height: 420px; border-radius: 50%; background: #FFFFFF")}></div>
                {" "}
                <button type="button" onClick={v.generar} disabled={!!v.sinSeleccion} style={sx(v.botonEstilo)}>
                  {" "}
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v11"></path>
                    <path d="M7 10l5 5 5-5"></path>
                    <path d="M5 20h14"></path>
                  </svg>
                  {" "}Generar y descargar
                </button>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
          </div>
          {" "}
        </main>
        {" "}
      </div>
      {" "}
    </div>
  );
}
