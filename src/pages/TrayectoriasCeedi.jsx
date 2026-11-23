import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './TrayectoriasCeedi.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { filtro: 'todas', q: '', programa: '', borrar: null, borradas: [], aviso: '', pagina: 1 };
}
renderVals() {
var self = this;
var data = [
{ programa: 'Ingeniería Multimedia', asignatura: 'Diseño Web', docente: 'Juan Martínez', estado: 'En progreso', avance: 60, editada: '28/09/2026' },
{ programa: 'Formación general', asignatura: 'Pensamiento Crítico', docente: 'Laura Gómez', estado: 'Pendiente', avance: 15, editada: '27/09/2026' },
{ programa: 'Ingeniería Industrial', asignatura: 'Gestión de Proyectos', docente: 'Carolina Herrera', estado: 'Pendiente', avance: 20, editada: '25/09/2026' },
{ programa: 'Administración de Empresas', asignatura: 'Economía', docente: 'Carlos Rengifo', estado: 'Completada', avance: 100, editada: '25/09/2026' },
{ programa: 'Diseño de la Comunicación Gráfica', asignatura: 'Taller de Creatividad', docente: 'Juan Martínez', estado: 'En progreso', avance: 35, editada: '22/09/2026' },
{ programa: 'Psicología', asignatura: 'Procesos Cognitivos', docente: 'Ana María Torres', estado: 'Pendiente', avance: 10, editada: '20/09/2026' },
{ programa: 'Comunicación Social y Periodismo', asignatura: 'Comunicación Digital', docente: 'María Fernanda López', estado: 'En progreso', avance: 50, editada: '18/09/2026' }
].concat(this.trayectoriasExtra()).sort(function (a, b) { var k = function (x) { return x.editada.split('/').reverse().join(''); }; return k(b).localeCompare(k(a)); });
var pill = {
'Pendiente': ['background: #FFFFFF; color: #AC0B32; border: 1.5px solid #AC0B32', 'background: #AC0B32'],
'En progreso': ['background: #FF836C; color: #8A1428; border: 1.5px solid #FF836C', 'background: #8A1428'],
'Completada': ['background: #8A1428; color: #FBF5EC; border: 1.5px solid #8A1428', 'background: #FBF5EC']
};
var base = 'display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px; border-radius: 999px; font-size: 14px; font-weight: 700; white-space: nowrap; ';
var dot = 'width: 8px; height: 8px; border-radius: 50%; ';
var q = (this.state.q || '').toLowerCase();
var f = this.state.filtro;
var pr = this.state.programa;
var rows = data.filter(function (r) {
if (self.state.borradas.indexOf(r.asignatura) >= 0) return false;
var okF = f === 'todas' || r.estado === f;
var okP = !pr || r.programa === pr;
var okQ = !q || (r.asignatura + ' ' + r.programa + ' ' + r.docente).toLowerCase().indexOf(q) >= 0;
return okF && okP && okQ;
});
var pag = this.paginador(rows.length, this.state.pagina, 6, 'pagina', { normal: 'min-width: 44px; min-height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer', activo: 'min-width: 44px; min-height: 44px; border-radius: 10px; border: 0; background: #FF051E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700', flecha: 'min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer', apagado: 'min-height: 44px; padding: 0 14px; border-radius: 10px; border: 1px solid #F1E4D3; background: transparent; color: #C58A93; font-family: inherit; font-size: 15px; font-weight: 600; cursor: default' });
rows = rows.slice(pag.inicio, pag.inicio + 6).map(function (r, i) {
var partes = r.docente.split(' ');
var ini = (partes[0].charAt(0) + partes[partes.length - 1].charAt(0)).toUpperCase();
return Object.assign({}, r, { esPropia: r.docente === 'Laura Gómez', chatActivo: r.docente !== 'Laura Gómez', rol: r.docente === 'Laura Gómez' ? 'Tú' : 'Docente UAO', pedirBorrar: function () { self.setState({ borrar: r.asignatura }); }, iniciales: ini, guiaAcciones: i === 0 ? 'acciones' : '', pillStyle: base + pill[r.estado][0], dotStyle: dot + pill[r.estado][1], barra: 'width: ' + r.avance + '%; height: 100%; border-radius: 999px; background: ' + (r.avance === 100 ? '#8A1428' : '#FF051E') });
});
var chipDefs = [
{ id: 'todas', label: 'Todas' },
{ id: 'Pendiente', label: 'Pendientes' },
{ id: 'En progreso', label: 'En progreso' },
{ id: 'Completada', label: 'Completadas' }
];
var chips = chipDefs.map(function (c) {
var on = c.id === f;
return {
label: c.label,
pressed: on ? 'true' : 'false',
style: 'min-height: 44px; padding: 0 18px; border-radius: 999px; font-family: inherit; font-size: 15px; cursor: pointer; ' + (on ? 'background: #8A1428; color: #FBF5EC; border: 1.5px solid #8A1428; font-weight: 700' : 'background: #FFFFFF; color: #8A1428; border: 1.5px solid #F1E4D3; font-weight: 600'),
pick: function () { self.setState({ filtro: c.id, pagina: 1 }); }
};
});
var punto = function (estilo) { return 'flex: none; width: 14px; height: 14px; border-radius: 50%; box-sizing: border-box; ' + estilo; };
var vivas = data.filter(function (r) { return self.state.borradas.indexOf(r.asignatura) < 0; });
var contar = function (e) { return String(vivas.filter(function (r) { return r.estado === e; }).length); };
var resumen = [
{ nombre: 'Trayectorias en total', valor: String(vivas.length), punto: punto('background: #FF051E') },
{ nombre: 'En progreso', valor: contar('En progreso'), punto: punto('background: #FF836C') },
{ nombre: 'Pendientes', valor: contar('Pendiente'), punto: punto('border: 2.5px solid #AC0B32') },
{ nombre: 'Completadas', valor: contar('Completada'), punto: punto('background: #8A1428') }
];
var programas = [];
data.forEach(function (r) { if (programas.indexOf(r.programa) < 0) programas.push(r.programa); });
programas.sort();
return {
rows: rows,
pag: pag,
totalVisibles: rows.length,
chips: chips,
resumen: resumen,
programas: programas,
programa: pr,
onPrograma: function (e) { self.setState({ programa: e.target.value, pagina: 1 }); },
q: this.state.q,
empty: rows.length === 0,
hayConfirmacion: !!this.state.borrar,
nombreBorrar: this.state.borrar || '',
cancelarBorrar: function () { self.setState({ borrar: null }); },
confirmarBorrar: function () { var n = self.state.borrar; self.setState({ borrar: null, borradas: self.state.borradas.concat([n]), aviso: 'Borraste la trayectoria ' + n + '.' }); },
hayAviso: !!this.state.aviso,
aviso: this.state.aviso,
deshacer: function () { var b = self.state.borradas.slice(0, -1); self.setState({ borradas: b, aviso: '' }); },
onSearch: function (e) { self.setState({ q: e.target.value, pagina: 1 }); }
};
}

// datos:inicio
trayectoriasExtra() {
var cursos = [
['Cálculo Diferencial', 'Ingeniería Industrial'], ['Programación Orientada a Objetos', 'Ingeniería Informática'], ['Bases de Datos', 'Ingeniería Informática'],
['Estadística Descriptiva', 'Administración de Empresas'], ['Contabilidad General', 'Administración de Empresas'], ['Mercadeo Estratégico', 'Administración de Empresas'],
['Fotografía Digital', 'Diseño de la Comunicación Gráfica'], ['Tipografía', 'Diseño de la Comunicación Gráfica'], ['Ilustración Editorial', 'Diseño de la Comunicación Gráfica'],
['Psicología del Desarrollo', 'Psicología'], ['Evaluación Psicológica', 'Psicología'], ['Neuropsicología', 'Psicología'],
['Periodismo de Datos', 'Comunicación Social y Periodismo'], ['Producción Radial', 'Comunicación Social y Periodismo'], ['Narrativas Transmedia', 'Comunicación Social y Periodismo'],
['Modelado 3D', 'Ingeniería Multimedia'], ['Desarrollo de Videojuegos', 'Ingeniería Multimedia'], ['Realidad Aumentada', 'Ingeniería Multimedia'],
['Animación Digital', 'Ingeniería Multimedia'], ['Interacción Humano-Computador', 'Ingeniería Multimedia'], ['Investigación de Operaciones', 'Ingeniería Industrial'],
['Logística y Cadena de Suministro', 'Ingeniería Industrial'], ['Control de Calidad', 'Ingeniería Industrial'], ['Robótica Industrial', 'Ingeniería Mecatrónica'],
['Electrónica Digital', 'Ingeniería Mecatrónica'], ['Sistemas de Control', 'Ingeniería Mecatrónica'], ['Microeconomía', 'Economía'],
['Macroeconomía', 'Economía'], ['Econometría', 'Economía'], ['Ética Profesional', 'Formación general'],
['Lectura y Escritura Académica', 'Formación general'], ['Constitución Política', 'Formación general'], ['Inglés Técnico', 'Formación general'],
['Gestión del Talento Humano', 'Administración de Empresas'], ['Finanzas Corporativas', 'Administración de Empresas'], ['Seguridad Informática', 'Ingeniería Informática'],
['Inteligencia Artificial', 'Ingeniería Informática'], ['Diseño de Experiencias', 'Diseño de la Comunicación Gráfica'], ['Psicología Social', 'Psicología'],
['Comunicación Organizacional', 'Comunicación Social y Periodismo'], ['Cine Documental', 'Comunicación Social y Periodismo']
];
var docentes = ['Juan Martínez', 'Carolina Herrera', 'Carlos Rengifo', 'Ana María Torres', 'María Fernanda López', 'Jorge Valencia', 'Paula Andrea Ríos', 'Diego Cárdenas', 'Natalia Ospina', 'Felipe Arango', 'Sandra Muñoz'];
var estados = [];
for (var k = 0; k < 41; k++) estados.push(k < 18 ? 'En progreso' : (k < 30 ? 'Pendiente' : 'Completada'));
var dos = function (n) { return (n < 10 ? '0' : '') + n; };
return cursos.map(function (c, i) {
if (c[0] === 'Animación Digital') return { programa: c[1], asignatura: c[0], docente: 'Juan Martínez', estado: 'Pendiente', avance: 10, editada: '19/09/2026' };
if (c[0] === 'Interacción Humano-Computador') return { programa: c[1], asignatura: c[0], docente: 'Juan Martínez', estado: 'Completada', avance: 100, editada: '30/08/2026' };
var estado = estados[(i * 7) % 41];
var avance = estado === 'Completada' ? 100 : (estado === 'Pendiente' ? 5 + (i * 3) % 21 : 30 + (i * 11) % 56);
var f = new Date(2026, 8, 17 - i);
return { programa: c[1], asignatura: c[0], docente: docentes[(i * 5) % docentes.length], estado: estado, avance: avance, editada: dos(f.getDate()) + '/' + dos(f.getMonth() + 1) + '/' + f.getFullYear() };
});
}
// datos:fin
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

}

export default function TrayectoriasCeedi(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Trayectorias · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-trayectorias-ceedi">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 40px clamp(16px, 4vw, 48px); display: flex; flex-direction: column; gap: 24px")}>
          {" "}
          <div data-guia="encabezado" style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px")}>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 6px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                Hola, Laura
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 40px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Trayectorias formativas
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 17px; line-height: 1.5")}>
                Acompaña y revisa las trayectorias que crea el cuerpo docente de la UAO.
              </p>
              {" "}
            </div>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 12px")}>
              {" "}
              <div className="nt">
                {" "}
                <nav className="nt-menu" aria-label="Opciones para una nueva trayectoria">
                  {" "}
                  <div className="nt-pill">
                    {" "}
                    <a href="#/asistentes/diseno-curricular" className="nt-op nt-crear" aria-label="Crear trayectoria con el asistente de diseño curricular" title="Crear trayectoria">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                      <span className="nt-lbl" aria-hidden="true">
                        Crear trayectoria
                      </span>
                    </a>
                    {" "}
                    <a href="#/contextualizacion/1" className="nt-op nt-ctx" aria-label="Contextualizar la trayectoria con el formulario" title="Contextualizar">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 3v5h5"></path>
                        <path d="M9 13h6"></path>
                        <path d="M9 17h4"></path>
                      </svg>
                      <span className="nt-lbl" aria-hidden="true">
                        Contextualizar
                      </span>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </nav>
                {" "}
                <button type="button" className="nt-btn" aria-haspopup="true">
                  {" "}
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                  {" "}Nueva trayectoria
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <ul data-guia="resumen" aria-label="Resumen de trayectorias" style={sx("list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px")}>
            {" "}
            {(v.resumen || []).map((k, k_i) => (
              <Fragment key={k_i}>
                {" "}
                <li style={sx("display: flex; align-items: center; gap: 14px; padding: 16px 18px; border-radius: 16px; background: #FFFFFF")}>
                  <span aria-hidden="true" style={sx(k?.punto)}></span>
                  <span style={sx("display: flex; flex-direction: column")}>
                    <strong style={sx("font-size: 28px; line-height: 1.1; font-weight: 800")}>
                      {k?.valor}
                    </strong>
                    <span style={sx("font-size: 14px; font-weight: 600")}>
                      {k?.nombre}
                    </span>
                  </span>
                </li>
                {" "}
              </Fragment>
            ))}
            {" "}
          </ul>
          {" "}
          <div data-guia="filtros" style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 16px")}>
            {" "}
            <label style={sx("flex: 1 1 320px; min-width: 0; display: flex; align-items: center; gap: 10px; min-height: 50px; padding: 0 16px; border-radius: 12px; background: #FFFFFF; border: 1.5px solid #F1E4D3")}>
              {" "}
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AC0B32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="6.5"></circle>
                <path d="M20 20l-4.2-4.2"></path>
              </svg>
              {" "}
              <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                Buscar trayectoria
              </span>
              {" "}
              <input type="search" value={v.q ?? ''} onChange={v.onSearch} placeholder="Buscar por trayectoria, programa o docente" style={sx("flex: 1 1 auto; min-width: 0; border: 0; outline: none; background: transparent; font-family: inherit; font-size: 16px; color: #8A1428")} />
              {" "}
            </label>
            {" "}
            <label style={sx("flex: 0 1 300px; min-width: 0; display: flex; align-items: center; min-height: 50px; border-radius: 12px; background: #FFFFFF; border: 1.5px solid #F1E4D3")}>
              {" "}
              <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                Filtrar por programa
              </span>
              {" "}
              <select value={v.programa ?? ''} onChange={v.onPrograma} style={sx("flex: 1 1 auto; min-width: 0; min-height: 46px; padding: 0 14px; border: 0; border-radius: 12px; background: transparent; color: #8A1428; font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer")}>
                <option value="">
                  Todos los programas
                </option>
                {(v.programas || []).map((p, p_i) => (
                  <Fragment key={p_i}>
                    <option value={p ?? ''}>
                      {p}
                    </option>
                  </Fragment>
                ))}
              </select>
              {" "}
            </label>
            {" "}
            <div role="group" aria-label="Filtrar por estado" style={sx("display: flex; flex-wrap: wrap; gap: 8px")}>
              {" "}
              {(v.chips || []).map((chip, chip_i) => (
                <Fragment key={chip_i}>
                  {" "}
                  <button type="button" onClick={chip?.pick} aria-pressed={chip?.pressed} style={sx(chip?.style)}>
                    {chip?.label}
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-guia="tabla" style={sx("background: #FFFFFF; border-radius: 18px; overflow: hidden")}>
            {" "}
            <div style={sx("overflow-x: auto")}>
              {" "}
              <table style={sx("width: 100%; min-width: 1100px; border-collapse: collapse; font-size: 15px")}>
                <caption style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                  Trayectorias de todo el cuerpo docente
                </caption>
                <thead>
                  <tr style={sx("background: #8A1428; color: #FBF5EC; text-align: left")}>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                      Trayectoria
                    </th>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                      Programa
                    </th>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                      Docente
                    </th>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                      Estado
                    </th>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700")}>
                      Avance
                    </th>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700; white-space: nowrap")}>
                      Última edición
                    </th>
                    <th scope="col" style={sx("padding: 16px 20px; font-size: 14px; font-weight: 700; text-align: right")}>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(v.rows || []).map((r, r_i) => (
                    <Fragment key={r_i}>
                      <tr style={sx("border-top: 1px solid #F1E4D3")}>
                        <th scope="row" style={sx("padding: 14px 20px; text-align: left; font-size: 16px; font-weight: 700")}>
                          {r?.asignatura}
                        </th>
                        <td style={sx("padding: 14px 20px")}>
                          {r?.programa}
                        </td>
                        <td style={sx("padding: 14px 20px")}>
                          <span style={sx("display: inline-flex; align-items: center; gap: 10px; white-space: nowrap")}>
                            <span aria-hidden="true" style={sx("flex: none; width: 32px; height: 32px; border-radius: 50%; background: #FBF5EC; border: 1.5px solid #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800")}>
                              {r?.iniciales}
                            </span>
                            <span style={sx("display: flex; flex-direction: column; line-height: 1.25")}>
                              <span style={sx("font-weight: 600")}>
                                {r?.docente}
                              </span>
                              <span style={sx("font-size: 13px; color: #A1434F")}>
                                {r?.rol}
                              </span>
                            </span>
                          </span>
                        </td>
                        <td style={sx("padding: 14px 20px")}>
                          <span style={sx(r?.pillStyle)}>
                            <span aria-hidden="true" style={sx(r?.dotStyle)}></span>
                            {r?.estado}
                          </span>
                        </td>
                        <td style={sx("padding: 14px 20px")}>
                          <span role="img" aria-label={`Avance del ${r?.avance ?? ''} %`} style={sx("display: inline-flex; align-items: center; gap: 10px; white-space: nowrap")}>
                            <span aria-hidden="true" style={sx("width: 96px; height: 8px; border-radius: 999px; background: #F1E4D3; overflow: hidden; display: inline-flex")}>
                              <span style={sx(r?.barra)}></span>
                            </span>
                            <span style={sx("font-size: 14px; font-weight: 700")}>
                              {r?.avance}{" "}%
                            </span>
                          </span>
                        </td>
                        <td style={sx("padding: 14px 20px; white-space: nowrap")}>
                          {r?.editada}
                        </td>
                        <td style={sx("padding: 10px 20px")}>
                          {" "}
                          <div data-guia={r?.guiaAcciones} style={sx("display: flex; justify-content: flex-end; gap: 6px")}>
                            {" "}
                            <a href="#/vista-previa" aria-label={`Ver vista previa de ${r?.asignatura ?? ''}`} title="Ver vista previa" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                              {" "}
                              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            {" "}
                            <a href="#/analitica-trayectoria" aria-label={`Ver analítica de ${r?.asignatura ?? ''}`} title="Ver analítica de la trayectoria" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                              {" "}
                              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 20V4"></path>
                                <path d="M4 20h16"></path>
                                <path d="M8 15l4-4 3 3 5-6"></path>
                              </svg>
                            </a>
                            {" "}
                            <a href="#/centro-diseno" aria-label={`Editar ${r?.asignatura ?? ''} en el Centro de diseño microcurricular`} title="Editar" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                              {" "}
                              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                                <path d="M13.5 6.5l4 4"></path>
                              </svg>
                            </a>
                            {" "}
                            <a href="#/historial" aria-label={`Ver historial de versiones de ${r?.asignatura ?? ''}`} title="Historial de versiones" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                              {" "}
                              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 12a8 8 0 1 0 2.4-5.7"></path>
                                <path d="M4 4v4h4"></path>
                                <path d="M12 8v4l3 2"></path>
                              </svg>
                            </a>
                            {" "}
                            <a href="#/exportacion" aria-label={`Descargar ${r?.asignatura ?? ''}`} title="Consolidación y exportación" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FBF5EC; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                              {" "}
                              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 4v11"></path>
                                <path d="M7 10l5 5 5-5"></path>
                                <path d="M5 20h14"></path>
                              </svg>
                            </a>
                            {" "}
                            {r?.chatActivo ? (
                              <>
                                <a href="#/chat" aria-label={`Comentar ${r?.asignatura ?? ''} con ${r?.docente ?? ''}`} title="Comentar en el chat" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 0; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                                  {" "}
                                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>
                                    <path d="M8.5 12h7"></path>
                                  </svg>
                                </a>
                              </>
                            ) : null}
                            {r?.esPropia ? (
                              <>
                                <button type="button" disabled aria-label={`No puedes comentar ${r?.asignatura ?? ''}: es tu propia trayectoria`} title="Es tu trayectoria: el chat es para conversar con su docente" style={sx("box-sizing: border-box; width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #F1E4D3; color: #C58A93; display: inline-flex; align-items: center; justify-content: center; cursor: not-allowed")}>
                                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>
                                    <path d="M8.5 12h7"></path>
                                  </svg>
                                </button>
                              </>
                            ) : null}
                            {" "}
                            <button type="button" onClick={r?.pedirBorrar} aria-haspopup="dialog" aria-label={`Borrar ${r?.asignatura ?? ''}`} title="Borrar trayectoria" style={sx("width: 44px; height: 44px; border-radius: 10px; border: 1px solid #F1E4D3; background: #FFFFFF; color: #AC0B32; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                              {" "}
                              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 7h16"></path>
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M6 7l1 13h10l1-13"></path>
                                <path d="M9 7V4h6v3"></path>
                              </svg>
                            </button>
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
            {v.empty ? (
              <>
                {" "}
                <div style={sx("padding: 48px 24px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center")}>
                  {" "}
                  <p style={sx("margin: 0; font-size: 18px; font-weight: 700")}>
                    No encontramos trayectorias con ese criterio
                  </p>
                  {" "}
                  <p style={sx("margin: 0; font-size: 15px")}>
                    Prueba con otro nombre, otro programa o cambia el filtro de estado.
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
                {v.pag?.desde}–{v.pag?.hasta}
              </strong>
              {" "}de{" "}
              <strong>
                {v.pag?.total}
              </strong>
              {" "}trayectorias · Página{" "}
              <strong>
                {v.pag?.actual}
              </strong>
              {" "}de{" "}
              <strong>
                {v.pag?.paginas}
              </strong>
            </p>
            {" "}
            <nav aria-label="Paginación" style={sx("display: flex; flex-wrap: wrap; gap: 6px")}>
              {" "}
              <button type="button" onClick={v.pag?.anterior} disabled={!!v.pag?.sinAnterior} aria-label="Página anterior" style={sx(v.pag?.estiloAnterior)}>
                Anterior
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
                      <button type="button" onClick={pg?.ir} aria-current={pg?.actual} aria-label={pg?.etiqueta} style={sx(pg?.estilo)}>
                        {pg?.n}
                      </button>
                    </>
                  ) : null}
                  {" "}
                </Fragment>
              ))}
              {" "}
              <button type="button" onClick={v.pag?.siguiente} disabled={!!v.pag?.sinSiguiente} aria-label="Página siguiente" style={sx(v.pag?.estiloSiguiente)}>
                Siguiente
              </button>
              {" "}
            </nav>
            {" "}
          </div>
          {" "}
          {v.hayAviso ? (
            <>
              {" "}
              <div role="status" style={sx("position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); z-index: 40; display: flex; align-items: center; gap: 12px; padding: 12px 12px 12px 18px; border-radius: 14px; background: #8A1428; color: #FBF5EC; font-size: 15px; font-weight: 600; box-shadow: 0 12px 30px rgba(138,20,40,0.25)")}>
                {" "}
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
                {v.aviso}{" "}
                <button type="button" onClick={v.deshacer} style={sx("min-height: 40px; padding: 0 14px; border-radius: 10px; border: 1.5px solid #FBF5EC; background: transparent; color: #FBF5EC; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer")}>
                  Deshacer
                </button>
                {" "}
              </div>
              {" "}
            </>
          ) : null}
          {" "}
        </main>
        {" "}
        {v.hayConfirmacion ? (
          <>
            {" "}
            <div style={sx("position: fixed; inset: 0; z-index: 50; background: rgba(138,20,40,0.45); display: flex; align-items: center; justify-content: center; padding: 16px")}>
              {" "}
              <div role="alertdialog" aria-modal="true" aria-labelledby="t-borrar" aria-describedby="d-borrar" style={sx("width: 100%; max-width: 480px; box-sizing: border-box; border-radius: 20px; background: #FFFFFF; padding: 28px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 24px 60px rgba(138,20,40,0.3)")}>
                {" "}
                <span aria-hidden="true" style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FBF5EC; color: #AC0B32; display: inline-flex; align-items: center; justify-content: center")}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7h16"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M6 7l1 13h10l1-13"></path>
                    <path d="M9 7V4h6v3"></path>
                  </svg>
                </span>
                {" "}
                <h2 id="t-borrar" style={sx("margin: 0; font-size: 22px; line-height: 1.25; font-weight: 800; color: #8A1428")}>
                  ¿Seguro que quieres borrar esta trayectoria?
                </h2>
                {" "}
                <p id="d-borrar" style={sx("margin: 0; font-size: 16px; line-height: 1.55; color: #8A1428")}>
                  Vas a borrar{" "}
                  <strong>
                    {v.nombreBorrar}
                  </strong>
                  {" "}con su contextualización, sus versiones y lo que construiste con los asistentes. Esta acción no se puede deshacer después de salir de la página.
                </p>
                {" "}
                <div style={sx("display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 10px; margin-top: 4px")}>
                  {" "}
                  <button type="button" onClick={v.cancelarBorrar} autoFocus style={sx("min-height: 48px; padding: 0 20px; border-radius: 12px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer")}>
                    Cancelar
                  </button>
                  {" "}
                  <button type="button" onClick={v.confirmarBorrar} style={sx("min-height: 48px; padding: 0 20px; border-radius: 12px; border: 0; background: #AC0B32; color: #FFFFFF; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer")}>
                    Sí, borrar
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
      </div>
      {" "}
    </div>
  );
}
