import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './RecursosPlantillas.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { q: '', orden: 'uso', pagina: 1 };
}
renderValsPagina() {
var self = this;
var sellos = {
XLSX: 'background: #8A1428; color: #FBF5EC',
DOCX: 'background: #FF836C; color: #8A1428',
PPTX: 'background: #AC0B32; color: #FFFFFF',
PDF: 'background: #FF051E; color: #FFFFFF'
};
var datos = [
{ nombre: 'Matriz de alineación de actividades', asistente: 'Diseño microcurricular', formato: 'XLSX', detalle: 'Formato en blanco y un ejemplo diligenciado.', uso: 24 },
{ nombre: 'Canvas de actividad de aprendizaje', asistente: 'Diseña UAO', formato: 'DOCX', detalle: 'Propósito, evidencias, estrategias, recursos y evaluación.', uso: 19 },
{ nombre: 'Rúbrica analítica (escala de 0 a 5)', asistente: 'Instrumentos de evaluación', formato: 'XLSX', detalle: 'Tabla de especificaciones y ponderaciones al 100 %.', uso: 17 },
{ nombre: 'Tabla de especificaciones de evaluación', asistente: 'Instrumentos de evaluación', formato: 'XLSX', detalle: '[DESCRIPCIÓN]', uso: 11 },
{ nombre: 'Formato de programa de trayectoria', asistente: 'Diseño curricular', formato: 'DOCX', detalle: '[DESCRIPCIÓN]', uso: 9 },
{ nombre: 'Plantilla de guion audiovisual', asistente: 'Guiones técnicos', formato: 'DOCX', detalle: '[DESCRIPCIÓN]', uso: 6 },
{ nombre: 'Ficha de recurso visual', asistente: 'AUREA', formato: 'PPTX', detalle: '[DESCRIPCIÓN]', uso: 4 },
{ nombre: 'Lista de chequeo de coherencia curricular', asistente: 'Diseño microcurricular', formato: 'PDF', detalle: '[DESCRIPCIÓN]', uso: 3 },
{ nombre: 'Formato de contextualización de la trayectoria', asistente: 'Diseño curricular', formato: 'DOCX', detalle: 'Las 5 partes del formulario en un documento para diligenciar sin conexión.', uso: 2 },
{ nombre: 'Guía de estrategias de aprendizaje activo', asistente: 'Diseña UAO', formato: 'PDF', detalle: 'Estrategias por tipo de conocimiento, con ejemplos para cada momento de la clase.', uso: 2 },
{ nombre: 'Cuestionario de opción múltiple', asistente: 'Instrumentos de evaluación', formato: 'DOCX', detalle: 'Banco de preguntas con clave de respuestas y retroalimentación.', uso: 1 },
{ nombre: 'Presentación institucional de curso', asistente: 'AUREA', formato: 'PPTX', detalle: 'Diapositivas con la identidad UAO para presentar el curso al estudiantado.', uso: 1 }
];
var q = (this.state.q || '').toLowerCase();
var filas = datos.filter(function (r) {
return !q || (r.nombre + ' ' + r.asistente + ' ' + r.formato + ' ' + r.detalle).toLowerCase().indexOf(q) >= 0;
}).slice().sort(function (a, b) {
return self.state.orden === 'az' ? a.nombre.localeCompare(b.nombre, 'es') : b.uso - a.uso;
});
var pag = this.paginador(filas.length, this.state.pagina, 8, 'pagina', { normal: '', activo: 'background: #FF051E; border-color: #FF051E; color: #FFFFFF; font-weight: 800', flecha: '', apagado: 'color: #C58A93; cursor: default' });
filas = filas.slice(pag.inicio, pag.inicio + 8).map(function (r) {
return Object.assign({}, r, { sello: 'flex: none; width: 52px; height: 52px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; ' + sellos[r.formato] });
});
return {
q: this.state.q,
buscar: function (e) { self.setState({ q: e.target.value, pagina: 1 }); },
orden: this.state.orden,
ordenar: function (e) { self.setState({ orden: e.target.value, pagina: 1 }); },
filas: filas,
pag: pag,
cuenta: filas.length,
vacio: filas.length === 0
};
}

// paginacion:inicio
paginador(total, pagina, porPagina, clave, estilos) {
var self = this;
var paginas = Math.max(1, Math.ceil(total / porPagina));
var actual = Math.min(Math.max(1, pagina || 1), paginas);
var ir = function (n) { return function () { var o = {}; o[clave] = n; self.setState(o); }; };
var nums = [];
if (paginas <= 7) { for (var i = 1; i <= paginas; i++) nums.push(i); }
else {
var a = Math.max(2, actual - 1), b = Math.min(paginas - 1, actual + 1);
if (actual <= 3) { a = 2; b = 4; }
if (actual >= paginas - 2) { a = paginas - 3; b = paginas - 1; }
nums.push(1);
if (a > 2) nums.push(0);
for (var j = a; j <= b; j++) nums.push(j);
if (b < paginas - 1) nums.push(0);
nums.push(paginas);
}
return {
actual: actual, paginas: paginas, total: total,
inicio: (actual - 1) * porPagina,
desde: total ? (actual - 1) * porPagina + 1 : 0,
hasta: Math.min(total, actual * porPagina),
sinAnterior: actual === 1, sinSiguiente: actual === paginas,
estiloAnterior: actual === 1 ? estilos.apagado : estilos.flecha,
estiloSiguiente: actual === paginas ? estilos.apagado : estilos.flecha,
anterior: ir(Math.max(1, actual - 1)),
siguiente: ir(Math.min(paginas, actual + 1)),
items: nums.map(function (n) {
return { elipsis: n === 0, numero: n !== 0, n: n, actual: n === actual ? 'page' : 'false', etiqueta: 'Página ' + n, ir: ir(n), estilo: n === actual ? estilos.activo : estilos.normal };
})
};
}
// paginacion:fin

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

export default function RecursosPlantillas(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Plantillas institucionales · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-recursos-plantillas">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="recursos" />
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 28px clamp(16px, 4vw, 48px) 36px; display: flex; flex-direction: column; gap: 22px")}>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px")}>
            {" "}
            <nav aria-label="Ruta de navegación">
              {" "}
              <ol style={sx("list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 15px")}>
                {" "}
                <li>
                  <a href="#/recursos" style={sx("display: inline-flex; align-items: center; min-height: 44px; font-weight: 700; text-decoration: none")}>
                    Recursos
                  </a>
                </li>
                {" "}
                <li aria-hidden="true" style={sx("color: #A1434F")}>
                  ›
                </li>
                {" "}
                <li aria-current="page" style={sx("font-weight: 700")}>
                  Plantillas institucionales
                </li>
                {" "}
              </ol>
              {" "}
            </nav>
            {" "}
            <span role="status" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 36px; padding: 0 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #F1E4D3; font-size: 14px; font-weight: 600")}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF051E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
              Sesión institucional UAO activa
            </span>
            {" "}
          </div>
          {" "}
          <header style={sx("position: relative; overflow: hidden; border-radius: 20px; background: #FF051E; color: #FFFFFF; padding: 26px 30px; display: flex; flex-wrap: wrap; align-items: center; gap: 20px")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; right: -40px; bottom: -200px; width: 340px; height: 290px; border-radius: 50%; background: #FBF5EC")}></div>
            {" "}
            <span aria-hidden="true" style={sx("position: relative; flex: none; width: 60px; height: 60px; border-radius: 16px; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path>
                <path d="M4 9h16M9 9v11"></path>
              </svg>
            </span>
            {" "}
            <div style={sx("position: relative; flex: 1 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 4px")}>
              {" "}
              <h1 style={sx("margin: 0; font-size: 32px; line-height: 1.1; font-weight: 800; letter-spacing: -0.5px")}>
                Plantillas institucionales
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.5")}>
                Matrices, Canvas, tablas de especificaciones y rúbricas listas para descargar.
              </p>
              {" "}
            </div>
            {" "}
            <span style={sx("position: relative; display: flex; flex-direction: column; align-items: center; padding: 10px 18px; border-radius: 14px; background: #FFFFFF; color: #8A1428")}>
              <span style={sx("font-size: 40px; line-height: 1; font-weight: 800")}>
                12
              </span>
              <span style={sx("font-size: 13px; font-weight: 700")}>
                plantillas
              </span>
            </span>
            {" "}
          </header>
          {" "}
          <div data-guia="busqueda" style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; gap: 12px")}>
            {" "}
            <label style={sx("flex: 1 1 380px; min-width: 0; display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 14px; border-radius: 12px; background: #FFFFFF; border: 1.5px solid #F1E4D3")}>
              {" "}
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AC0B32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="6.5"></circle>
                <path d="M20 20l-4.2-4.2"></path>
              </svg>
              {" "}
              <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                Buscar plantillas
              </span>
              {" "}
              <input type="search" value={v.q ?? ''} onChange={v.buscar} placeholder="Buscar por nombre, asistente o formato" style={sx("flex: 1 1 auto; min-width: 0; border: 0; outline: none; background: transparent; font-family: inherit; font-size: 15px; color: #8A1428")} />
              {" "}
            </label>
            {" "}
            <label style={sx("display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700")}>
              Ordenar por{" "}
              <select value={v.orden ?? ''} onChange={v.ordenar} style={sx("min-height: 48px; padding: 0 12px; border-radius: 12px; border: 1.5px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                <option value="uso">
                  Más usadas
                </option>
                <option value="az">
                  Nombre (A a Z)
                </option>
              </select>
              {" "}
            </label>
            {" "}
          </div>
          {" "}
          <div data-guia="tabla" style={sx("background: #FFFFFF; border-radius: 18px; overflow: hidden")}>
            {" "}
            <div style={sx("overflow-x: auto")}>
              {" "}
              <table style={sx("width: 100%; min-width: 560px; border-collapse: collapse; font-size: 15px")}>
                <caption style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                  Plantillas institucionales
                </caption>
                <thead>
                  <tr style={sx("background: #8A1428; color: #FBF5EC")}>
                    <th scope="col" className="th">
                      Archivo
                    </th>
                    <th scope="col" className="th" style={sx("text-align: right; width: 180px")}>
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(v.filas || []).map((r, r_i) => (
                    <Fragment key={r_i}>
                      <tr style={sx("border-top: 1px solid #F1E4D3")}>
                        <th scope="row" className="td" style={sx("text-align: left")}>
                          {" "}
                          <span style={sx("display: flex; align-items: center; gap: 14px")}>
                            {" "}
                            <span aria-hidden="true" style={sx(r?.sello)}>
                              {r?.formato}
                            </span>
                            {" "}
                            <span style={sx("display: flex; flex-direction: column; gap: 3px")}>
                              <span style={sx("font-size: 16px; font-weight: 800")}>
                                {r?.nombre}
                              </span>
                              <span style={sx("font-size: 14px; font-weight: 500")}>
                                {r?.detalle}
                              </span>
                              <span style={sx("font-size: 13px; font-weight: 500; color: #A1434F")}>
                                {r?.asistente}{" "}·{" "}{r?.formato}{" "}· Vinculada a{" "}{r?.uso}{" "}actividades
                              </span>
                            </span>
                            {" "}
                          </span>
                          {" "}
                        </th>
                        <td className="td" style={sx("text-align: right")}>
                          {" "}
                          <button type="button" aria-label={`Descargar ${r?.nombre ?? ''} (${r?.formato ?? ''})`} style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer")}>
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 4v11"></path>
                              <path d="M7 10l5 5 5-5"></path>
                              <path d="M5 20h14"></path>
                            </svg>
                            Descargar
                          </button>
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
                <div style={sx("padding: 40px 24px; text-align: center")}>
                  <p style={sx("margin: 0; font-size: 17px; font-weight: 700")}>
                    No encontramos plantillas con ese criterio
                  </p>
                  <p style={sx("margin: 6px 0 0; font-size: 15px")}>
                    Prueba con otro nombre, asistente o formato.
                  </p>
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
                {v.pag?.desde}–{v.pag?.hasta}
              </strong>
              {" "}de{" "}
              <strong>
                {v.pag?.total}
              </strong>
              {" "}plantillas
            </p>
            {" "}
            <nav aria-label="Paginación" style={sx("display: flex; gap: 6px")}>
              {" "}
              <button type="button" className="pag" onClick={v.pag?.anterior} disabled={!!v.pag?.sinAnterior} aria-label="Página anterior" style={sx(v.pag?.estiloAnterior)}>
                ‹
              </button>
              {" "}
              {(v.pag?.items || []).map((pg, pg_i) => (
                <Fragment key={pg_i}>
                  {" "}
                  {pg?.elipsis ? (
                    <>
                      <span aria-hidden="true" style={sx("display: inline-flex; align-items: center; padding: 0 4px; font-weight: 700")}>
                        …
                      </span>
                    </>
                  ) : null}
                  {" "}
                  {pg?.numero ? (
                    <>
                      <button type="button" className="pag" onClick={pg?.ir} aria-current={pg?.actual} aria-label={pg?.etiqueta} style={sx(pg?.estilo)}>
                        {pg?.n}
                      </button>
                    </>
                  ) : null}
                  {" "}
                </Fragment>
              ))}
              {" "}
              <button type="button" className="pag" onClick={v.pag?.siguiente} disabled={!!v.pag?.sinSiguiente} aria-label="Página siguiente" style={sx(v.pag?.estiloSiguiente)}>
                ›
              </button>
              {" "}
            </nav>
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
