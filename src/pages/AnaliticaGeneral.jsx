import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './AnaliticaGeneral.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { menu: false, aviso: '' };
}
renderVals() {
var self = this;
var datos = [
{ id: 'pdf', sigla: 'PDF', nombre: 'Reporte en PDF', uso: 'Para compartir e imprimir', fondo: '#FF051E', tinta: '#FFFFFF' },
{ id: 'xlsx', sigla: 'XLSX', nombre: 'Excel (.xlsx)', uso: 'Tablas y cifras editables', fondo: '#8A1428', tinta: '#FBF5EC' },
{ id: 'csv', sigla: 'CSV', nombre: 'CSV (.csv)', uso: 'Datos para analizar en otras herramientas', fondo: '#FF836C', tinta: '#8A1428' }
];
return {
menuAbierto: this.state.menu ? 'true' : 'false',
menuVisible: this.state.menu,
alternarMenu: function () { self.setState({ menu: !self.state.menu }); },
hayAviso: !!this.state.aviso,
aviso: this.state.aviso,
formatos: datos.map(function (d) {
return {
sigla: d.sigla, nombre: d.nombre, uso: d.uso,
sello: 'background: ' + d.fondo + '; color: ' + d.tinta,
elegir: function () { self.setState({ menu: false, aviso: 'Listo. La analítica del periodo 01/08/2026 a 16/11/2026 se está descargando en formato ' + d.sigla + '.' }); }
};
})
};
}
}

export default function AnaliticaGeneral(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Analítica general · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-analitica-general">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="analitica" />
        {" "}
        <main id="arriba" style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 36px clamp(16px, 4vw, 48px) 56px; display: flex; flex-direction: column; gap: 28px")}>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px")}>
            {" "}
            <div style={sx("flex: 1 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                Analítica general
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 40px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Uso de la IA en AI Class Builder
              </h1>
              {" "}
              <p style={sx("margin: 0; max-width: 820px; font-size: 17px; line-height: 1.55")}>
                Así avanzan las trayectorias formativas de la Universidad y así se usan los asistentes de IA. Todos los datos son de uso; nunca del contenido que escriben los docentes.
              </p>
              {" "}
            </div>
            {" "}
            <div className="filtros" role="group" aria-label="Filtros de la analítica">
              {" "}
              <label>
                <span>
                  Periodo
                </span>
                <select>
                  <option>
                    01/08/2026 a 16/11/2026
                  </option>
                  <option>
                    Últimos 30 días
                  </option>
                  <option>
                    Semestre 2026-1
                  </option>
                </select>
              </label>
              {" "}
              <label>
                <span>
                  Programa
                </span>
                <select>
                  <option>
                    Todos los programas
                  </option>
                  <option>
                    Ingeniería Multimedia
                  </option>
                  <option>
                    Ingeniería Industrial
                  </option>
                  <option>
                    Administración
                  </option>
                  <option>
                    Diseño
                  </option>
                  <option>
                    Psicología
                  </option>
                </select>
              </label>
              {" "}
              <div className="exportar">
                {" "}
                <button type="button" className="btn-exp" aria-haspopup="true" aria-expanded={v.menuAbierto} aria-controls="menu-exportar" onClick={v.alternarMenu}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v11"></path>
                    <path d="M7 10l5 5 5-5"></path>
                    <path d="M5 20h14"></path>
                  </svg>
                  Exportar
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </button>
                {" "}
                {v.menuVisible ? (
                  <>
                    {" "}
                    <ul id="menu-exportar" className="menu-exp" aria-label="Formatos de exportación">
                      {" "}
                      {(v.formatos || []).map((f, f_i) => (
                        <Fragment key={f_i}>
                          {" "}
                          <li>
                            <button type="button" onClick={f?.elegir}>
                              <span className="sello" aria-hidden="true" style={sx(f?.sello)}>
                                {f?.sigla}
                              </span>
                              <span>
                                {f?.nombre}
                                <small>
                                  {f?.uso}
                                </small>
                              </span>
                            </button>
                          </li>
                          {" "}
                        </Fragment>
                      ))}
                      {" "}
                    </ul>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {v.hayAviso ? (
            <>
              {" "}
              <div role="status" className="aviso-exp">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
                {v.aviso}
              </div>
              {" "}
            </>
          ) : null}
          {" "}
          <section aria-labelledby="t-kpi">
            {" "}
            <h2 id="t-kpi" className="vh">
              Indicadores clave del periodo
            </h2>
            {" "}
            <ul className="kpis">
              {" "}
              <li className="kpi destacado">
                {" "}
                <span className="kpi-et">
                  Interacciones con la IA
                </span>
                {" "}
                <span className="kpi-v">
                  1246
                </span>
                {" "}
                <span className="kpi-n">
                  <span className="sube" aria-hidden="true">
                    ↑
                  </span>
                  {" "}25 % frente al periodo anterior
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Docentes activos
                </span>
                {" "}
                <span className="kpi-v">
                  42
                </span>
                {" "}
                <span className="kpi-n">
                  <span className="sube" aria-hidden="true">
                    ↑
                  </span>
                  {" "}12 % frente al periodo anterior
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Trayectorias iniciadas
                </span>
                {" "}
                <span className="kpi-v">
                  128
                </span>
                {" "}
                <span className="kpi-n">
                  <span className="sube" aria-hidden="true">
                    ↑
                  </span>
                  {" "}8 % frente al periodo anterior
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Trayectorias finalizadas
                </span>
                {" "}
                <span className="kpi-v">
                  76
                </span>
                {" "}
                <span className="kpi-n">
                  59 % de las iniciadas
                </span>
                {" "}
              </li>
              {" "}
              <li className="kpi">
                {" "}
                <span className="kpi-et">
                  Trayectorias exportadas
                </span>
                {" "}
                <span className="kpi-v">
                  52
                </span>
                {" "}
                <span className="kpi-n">
                  68 % de las finalizadas
                </span>
                {" "}
              </li>
              {" "}
            </ul>
            {" "}
          </section>
          {" "}
          <div className="tres">
            {" "}
            <section className="caja" aria-labelledby="t-estado">
              {" "}
              <div className="caja-cab">
                <h2 id="t-estado">
                  Estado de las trayectorias
                </h2>
              </div>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 24px")}>
                {" "}
                <div style={sx("position: relative; flex: none; width: 168px; height: 168px")}>
                  {" "}
                  <svg aria-hidden="true" width="168" height="168" viewBox="0 0 168 168">
                    <g transform="rotate(-90 84 84)" fill="none" strokeWidth="22">
                      <circle cx="84" cy="84" r="70" stroke="#E3CFC2" strokeDasharray="54.2 385.6"></circle>
                      <circle cx="84" cy="84" r="70" stroke="#FF836C" strokeDasharray="90.4 349.4" strokeDashoffset="-54.2"></circle>
                      <circle cx="84" cy="84" r="70" stroke="#FF051E" strokeDasharray="66.3 373.5" strokeDashoffset="-144.6"></circle>
                      <circle cx="84" cy="84" r="70" stroke="#8A1428" strokeDasharray="228.9 210.9" strokeDashoffset="-210.9"></circle>
                    </g>
                  </svg>
                  {" "}
                  <div style={sx("position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center")}>
                    <strong style={sx("font-size: 30px; line-height: 1")}>
                      146
                    </strong>
                    <span style={sx("font-size: 13px")}>
                      trayectorias
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <ul className="leyenda" style={sx("flex: 1 1 200px")}>
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #8A1428")}></span>
                    <span>
                      Finalizadas
                    </span>
                    <strong>
                      76{" "}
                      <small>
                        (52 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #FF051E")}></span>
                    <span>
                      En revisión
                    </span>
                    <strong>
                      22{" "}
                      <small>
                        (15 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #FF836C")}></span>
                    <span>
                      En desarrollo
                    </span>
                    <strong>
                      30{" "}
                      <small>
                        (21 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #E3CFC2")}></span>
                    <span>
                      Sin iniciar
                    </span>
                    <strong>
                      18{" "}
                      <small>
                        (12 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                </ul>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section className="caja" aria-labelledby="t-asis">
              {" "}
              <div className="caja-cab">
                <h2 id="t-asis">
                  Uso de los asistentes
                </h2>
                <span className="sub">
                  Interacciones
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
                    452
                  </span>
                </li>
                {" "}
                <li>
                  <span className="b-nom">
                    Diseña UAO
                  </span>
                  <span className="b-pista">
                    <span style={sx("width: 75%")}></span>
                  </span>
                  <span className="b-val">
                    338
                  </span>
                </li>
                {" "}
                <li>
                  <span className="b-nom">
                    Instrumentos de evaluación UAO
                  </span>
                  <span className="b-pista">
                    <span style={sx("width: 54%")}></span>
                  </span>
                  <span className="b-val">
                    245
                  </span>
                </li>
                {" "}
                <li>
                  <span className="b-nom">
                    AUREA
                  </span>
                  <span className="b-pista">
                    <span style={sx("width: 29%")}></span>
                  </span>
                  <span className="b-val">
                    132
                  </span>
                </li>
                {" "}
                <li>
                  <span className="b-nom">
                    Guiones técnicos audiovisuales
                  </span>
                  <span className="b-pista">
                    <span style={sx("width: 17%")}></span>
                  </span>
                  <span className="b-val">
                    79
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
            </section>
            {" "}
            <section className="caja" aria-labelledby="t-evo">
              {" "}
              <div className="caja-cab">
                <h2 id="t-evo">
                  Evolución de las trayectorias
                </h2>
                <span className="sub">
                  Acumulado mensual
                </span>
              </div>
              {" "}
              <figure style={sx("margin: 0")}>
                {" "}
                <svg role="img" aria-labelledby="t-evo d-evo" viewBox="0 0 440 220" width="100%" style={sx("display: block; max-height: 240px; overflow: visible")}>
                  <desc id="d-evo">
                    De agosto a noviembre, las trayectorias iniciadas pasaron de 22 a 128; las finalizadas, de 4 a 76, y las exportadas, de 1 a 52.
                  </desc>
                  <g stroke="#F1E4D3" strokeWidth="1">
                    <line x1="34" y1="20" x2="360" y2="20"></line>
                    <line x1="34" y1="65" x2="360" y2="65"></line>
                    <line x1="34" y1="110" x2="360" y2="110"></line>
                    <line x1="34" y1="155" x2="360" y2="155"></line>
                    <line x1="34" y1="200" x2="360" y2="200" stroke="#E3CFC2"></line>
                  </g>
                  <g fontFamily="DM Sans, sans-serif" fontSize="12" fill="#A1434F" textAnchor="end">
                    <text x="26" y="24">
                      160
                    </text>
                    <text x="26" y="69">
                      120
                    </text>
                    <text x="26" y="114">
                      80
                    </text>
                    <text x="26" y="159">
                      40
                    </text>
                    <text x="26" y="204">
                      0
                    </text>
                  </g>
                  <g fontFamily="DM Sans, sans-serif" fontSize="12" fill="#A1434F" textAnchor="middle">
                    <text x="50" y="218">
                      Ago
                    </text>
                    <text x="150" y="218">
                      Sep
                    </text>
                    <text x="250" y="218">
                      Oct
                    </text>
                    <text x="350" y="218">
                      Nov
                    </text>
                  </g>
                  <polyline fill="none" stroke="#FF051E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="50,175.3 150,131.4 250,83 350,56"></polyline>
                  <polyline fill="none" stroke="#8A1428" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="50,195.5 150,176.4 250,141.5 350,114.5"></polyline>
                  <polyline fill="none" stroke="#FF836C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 5" points="50,198.9 150,186.5 250,161.8 350,141.5"></polyline>
                  <g fill="#FFFFFF" strokeWidth="2.5">
                    <circle cx="350" cy="56" r="5" stroke="#FF051E"></circle>
                    <circle cx="350" cy="114.5" r="5" stroke="#8A1428"></circle>
                    <circle cx="350" cy="141.5" r="5" stroke="#FF836C"></circle>
                  </g>
                  <g fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700">
                    <text x="362" y="52" fill="#FF051E">
                      128
                    </text>
                    <text x="362" y="66" fill="#8A1428" fontWeight="500" fontSize="12">
                      Iniciadas
                    </text>
                    <text x="362" y="111" fill="#8A1428">
                      76
                    </text>
                    <text x="362" y="125" fill="#8A1428" fontWeight="500" fontSize="12">
                      Finalizadas
                    </text>
                    <text x="362" y="146" fill="#8A1428">
                      52
                    </text>
                    <text x="362" y="160" fill="#8A1428" fontWeight="500" fontSize="12">
                      Exportadas
                    </text>
                  </g>
                </svg>
                {" "}
              </figure>
              {" "}
            </section>
            {" "}
          </div>
          {" "}
          <section aria-labelledby="t-cal" style={sx("display: flex; flex-direction: column; gap: 14px")}>
            {" "}
            <h2 id="t-cal" style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
              Cómo se usa la IA
            </h2>
            {" "}
            <div className="dos">
              {" "}
              <div className="caja" style={sx("flex: 3 1 640px")}>
                {" "}
                <div className="caja-cab">
                  <h3>
                    Qué pasó con las sugerencias
                  </h3>
                  <span className="sub">
                    1180 sugerencias generadas de 1246 solicitudes válidas
                  </span>
                </div>
                {" "}
                <div role="img" aria-label="De 1180 sugerencias: 708 aceptadas, 283 editadas y 189 rechazadas" className="apilada">
                  {" "}
                  <span style={sx("width: 60%; background: #8A1428")}></span>
                  <span style={sx("width: 24%; background: #FF836C")}></span>
                  <span style={sx("width: 16%; background: #E3CFC2")}></span>
                  {" "}
                </div>
                {" "}
                <ul className="leyenda en-fila">
                  {" "}
                  <li>
                    <span className="punto" style={sx("background: #8A1428")}></span>
                    <span>
                      Aceptadas
                    </span>
                    <strong>
                      708{" "}
                      <small>
                        (60 %)
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
                      283{" "}
                      <small>
                        (24 %)
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
                      189{" "}
                      <small>
                        (16 %)
                      </small>
                    </strong>
                  </li>
                  {" "}
                </ul>
                {" "}
              </div>
              {" "}
              <div className="caja" style={sx("flex: 2 1 460px")}>
                {" "}
                <div className="caja-cab">
                  <h3>
                    Comportamiento de los docentes
                  </h3>
                </div>
                {" "}
                <dl className="mini dos-col">
                  {" "}
                  <div>
                    <dt>
                      Intervención humana observable
                    </dt>
                    <dd>
                      94 %{" "}
                      <small>
                        de las trayectorias
                      </small>
                    </dd>
                  </div>
                  {" "}
                  <div>
                    <dt>
                      Iteraciones por tarea
                    </dt>
                    <dd>
                      2,1{" "}
                      <small>
                        en promedio
                      </small>
                    </dd>
                  </div>
                  {" "}
                  <div>
                    <dt>
                      Asistentes por trayectoria
                    </dt>
                    <dd>
                      3,2{" "}
                      <small>
                        de 5
                      </small>
                    </dd>
                  </div>
                  {" "}
                  <div>
                    <dt>
                      Generaciones fallidas
                    </dt>
                    <dd>
                      66{" "}
                      <small>
                        (5 %)
                      </small>
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
          <section className="caja" aria-labelledby="t-prog">
            {" "}
            <div className="caja-cab">
              <h2 id="t-prog">
                Uso por programa académico
              </h2>
              <span className="sub">
                Ordenado por interacciones con la IA
              </span>
            </div>
            {" "}
            <div style={sx("overflow-x: auto")}>
              {" "}
              <table className="tabla">
                <caption className="vh">
                  Uso de AI Class Builder por programa académico
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      Programa
                    </th>
                    <th scope="col">
                      Docentes activos
                    </th>
                    <th scope="col">
                      Trayectorias
                    </th>
                    <th scope="col">
                      Completitud promedio
                    </th>
                    <th scope="col">
                      Interacciones con la IA
                    </th>
                    <th scope="col">
                      Sugerencias aceptadas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Ingeniería Multimedia
                    </th>
                    <td>
                      12
                    </td>
                    <td>
                      38
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 68%")}></span>
                        </span>
                        68 %
                      </span>
                    </td>
                    <td>
                      402
                    </td>
                    <td>
                      63 %
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Ingeniería Industrial
                    </th>
                    <td>
                      9
                    </td>
                    <td>
                      29
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 61%")}></span>
                        </span>
                        61 %
                      </span>
                    </td>
                    <td>
                      298
                    </td>
                    <td>
                      58 %
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Diseño
                    </th>
                    <td>
                      8
                    </td>
                    <td>
                      24
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 57%")}></span>
                        </span>
                        57 %
                      </span>
                    </td>
                    <td>
                      243
                    </td>
                    <td>
                      62 %
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Administración
                    </th>
                    <td>
                      7
                    </td>
                    <td>
                      21
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 52%")}></span>
                        </span>
                        52 %
                      </span>
                    </td>
                    <td>
                      176
                    </td>
                    <td>
                      59 %
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Psicología
                    </th>
                    <td>
                      6
                    </td>
                    <td>
                      16
                    </td>
                    <td>
                      <span className="prog-txt">
                        <span className="b-pista corta">
                          <span style={sx("width: 44%")}></span>
                        </span>
                        44 %
                      </span>
                    </td>
                    <td>
                      127
                    </td>
                    <td>
                      55 %
                    </td>
                  </tr>
                </tbody>
              </table>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <div className="dos">
            {" "}
            <section className="caja" aria-labelledby="t-alerta" style={sx("flex: 3 1 640px")}>
              {" "}
              <div className="caja-cab">
                <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                  <h2 id="t-alerta">
                    Trayectorias que necesitan acompañamiento
                  </h2>
                  <span className="sub">
                    Más de 7 días sin interacción
                  </span>
                </div>
                <span className="pill prog">
                  9 trayectorias
                </span>
              </div>
              {" "}
              <div style={sx("overflow-x: auto")}>
                {" "}
                <table className="tabla">
                  <caption className="vh">
                    Trayectorias con más de 7 días sin interacción
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">
                        Docente
                      </th>
                      <th scope="col">
                        Trayectoria
                      </th>
                      <th scope="col">
                        Etapa actual
                      </th>
                      <th scope="col">
                        Días sin interacción
                      </th>
                      <th scope="col">
                        <span className="vh">
                          Acción
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        Ana María Torres
                        <small>
                          Psicología
                        </small>
                      </th>
                      <td>
                        Procesos Cognitivos
                      </td>
                      <td>
                        Contextualización
                      </td>
                      <td>
                        <strong>
                          21 días
                        </strong>
                      </td>
                      <td>
                        <a href="#/analitica-trayectoria" className="enlace">
                          Ver analítica
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Laura Gómez
                        <small>
                          Ingeniería Industrial
                        </small>
                      </th>
                      <td>
                        Gestión de Proyectos
                      </td>
                      <td>
                        Diseña UAO
                      </td>
                      <td>
                        <strong>
                          14 días
                        </strong>
                      </td>
                      <td>
                        <a href="#/analitica-trayectoria" className="enlace">
                          Ver analítica
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Carlos Rengifo
                        <small>
                          Administración
                        </small>
                      </th>
                      <td>
                        Economía
                      </td>
                      <td>
                        AUREA
                      </td>
                      <td>
                        <strong>
                          9 días
                        </strong>
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
              <a href="#" className="enlace">
                Ver las 9 trayectorias
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </a>
              {" "}
            </section>
            {" "}
            <section className="caja" aria-labelledby="t-rec" style={sx("flex: 2 1 420px")}>
              {" "}
              <div className="caja-cab">
                <h2 id="t-rec">
                  Recomendaciones del CEEDi
                </h2>
                <span className="sub">
                  29 en el periodo
                </span>
              </div>
              {" "}
              <dl className="lista-dl">
                {" "}
                <div>
                  <dt>
                    <span className="pill pe">
                      Pendientes
                    </span>
                  </dt>
                  <dd>
                    6
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    <span className="pill prog">
                      Programadas
                    </span>
                  </dt>
                  <dd>
                    4
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    <span className="pill dev">
                      Realizadas
                    </span>
                  </dt>
                  <dd>
                    11
                  </dd>
                </div>
                {" "}
                <div>
                  <dt>
                    <span className="pill ok">
                      Cerradas
                    </span>
                  </dt>
                  <dd>
                    8
                  </dd>
                </div>
                {" "}
              </dl>
              {" "}
              <div className="nota">
                {" "}
                <span className="nota-et">
                  Más frecuente
                </span>
                {" "}
                <p>
                  Revisar la alineación entre la rúbrica y los resultados de aprendizaje (12 de 29).
                </p>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
          </div>
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
                Esta analítica suma acciones, fechas y conteos de toda la plataforma. No guarda lo que escriben ni lo que editan los docentes. Solo la consultan colaboradores autorizados del CEEDi.
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
