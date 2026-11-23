import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Recursos.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { q: '' };
}
renderValsPagina() {
var self = this;
var tile = function (bg, ink) { return 'flex: none; width: 46px; height: 46px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: ' + bg + '; color: ' + ink; };
var libro = ['M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z', 'M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z'];
var medalla = ['M12 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z', 'M9 12.5L8 21l4-2 4 2-1-8.5'];
var ceedi = [
{ nombre: 'Plantillas institucionales', total: 12, texto: 'Matrices, Canvas, tablas de especificaciones y rúbricas listas para descargar.', accion: 'Ver plantillas', href: '#/recursos/plantillas', tile: tile('#FF051E', '#FFFFFF'), icono: ['M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z', 'M4 9h16M9 9v11'] },
{ nombre: 'Prompts recomendados', total: 18, texto: 'Instrucciones listas para copiar y usar con los asistentes de IA.', accion: 'Ver prompts', href: '#', tile: tile('#8A1428', '#FBF5EC'), icono: ['M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z', 'M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z'] },
{ nombre: 'Guías y artículos', total: 10, texto: 'Orientaciones pedagógicas del CEEDi para formular competencias y metas.', accion: 'Ver guías', href: '#', tile: tile('#FF836C', '#8A1428'), icono: libro },
{ nombre: 'Casos de éxito', total: 8, texto: 'Trayectorias y actividades validadas por el CEEDi como referente de buenas prácticas.', accion: 'Ver casos', href: '#', tile: tile('#AC0B32', '#FFFFFF'), icono: medalla }
];
var crai = [
{ nombre: 'Renovación y catálogo', texto: 'Busca en el catálogo y renueva tus préstamos en línea.', href: 'https://catalogo.uao.edu.co/', icono: ['M4 6h9', 'M4 11h6', 'M4 16h5', 'M16.5 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M19 20l2 2'] },
{ nombre: 'Reservar espacios y equipos', texto: 'Aparta cubículos, computadores y equipos audiovisuales.', href: 'https://uao.libcal.com/spaces', icono: ['M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'M4 10h16', 'M9 3v4', 'M15 3v4', 'M9 15l2 2 4-4'] },
{ nombre: 'Recursos digitales', texto: 'Bases de datos, libros electrónicos y revistas con acceso institucional.', href: 'https://www.uao.edu.co/recursos-digitales/', icono: ['M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'M9 21h6', 'M12 17v4'] },
{ nombre: 'Trabajo de grado', texto: 'Normas, plantillas y entrega al repositorio institucional.', href: 'https://uao.libguides.com/PazySalvoBibliotecaUAO/inicio', icono: ['M2 9l10-5 10 5-10 5z', 'M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5', 'M22 9v6'] },
{ nombre: 'Tutoriales y guías', texto: 'Aprende a buscar, citar y usar los recursos del CRAI.', href: 'https://uao.libguides.com/inicio', icono: ['M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z', 'M10 8.5v7l6-3.5z'] },
{ nombre: 'Reserva de salas Digicampus', texto: 'Salas para clases y trabajo colaborativo con tecnología.', href: 'https://uao.libcal.com/spaces?lid=17040&gid=44445', icono: ['M3 20h18', 'M5 20V9h14v11', 'M9 13h6', 'M9 16h6', 'M12 4v5'] },
{ nombre: 'CRAI en cifras', texto: 'Indicadores de uso de colecciones, espacios y servicios.', href: 'https://uao.libguides.com/cifras', icono: ['M4 20h16', 'M7 16v-5', 'M12 16V7', 'M17 16V9'] }
];
return { ceedi: ceedi, crai: crai };
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

export default function Recursos(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Recursos · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-recursos">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="recursos" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 32px clamp(16px, 4vw, 48px) 40px; display: flex; flex-direction: column; gap: 24px")}>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px")}>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 6px")}>
              {" "}
              <h1 style={sx("margin: 0; font-size: 38px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Recursos
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 17px; line-height: 1.5")}>
                Encuentra los recursos formativos del CEEDi y los servicios del CRAI para diseñar tu trayectoria.
              </p>
              {" "}
            </div>
            {" "}
            <span role="status" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 36px; padding: 0 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #F1E4D3; font-size: 14px; font-weight: 600")}>
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF051E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
              {" "}Sesión institucional UAO activa
            </span>
            {" "}
          </div>
          {" "}
          <section data-guia="ceedi" className="bloque" aria-labelledby="t-ceedi">
            {" "}
            <div className="bloque-cab">
              {" "}
              <div style={sx("display: flex; align-items: center; gap: 14px")}>
                {" "}
                <span aria-hidden="true" style={sx("flex: none; min-width: 64px; height: 52px; padding: 0 10px; box-sizing: border-box; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800")}>
                  CEEDi
                </span>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                  {" "}
                  <h2 id="t-ceedi" style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                    Recursos formativos internos
                  </h2>
                  {" "}
                  <span style={sx("font-size: 14px")}>
                    Creados y validados por el equipo del CEEDi.
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <span style={sx("display: flex; flex-direction: column; align-items: flex-end")}>
                <span style={sx("font-size: 30px; line-height: 1; font-weight: 800")}>
                  48
                </span>
                <span style={sx("font-size: 13px; font-weight: 600; color: #A1434F")}>
                  recursos
                </span>
              </span>
              {" "}
            </div>
            {" "}
            <div className="rejilla4">
              {" "}
              {(v.ceedi || []).map((c, c_i) => (
                <Fragment key={c_i}>
                  {" "}
                  <a href={c?.href} className="tarjeta">
                    {" "}
                    <div style={sx("display: flex; align-items: center; justify-content: space-between; gap: 12px")}>
                      {" "}
                      <span aria-hidden="true" style={sx(c?.tile)}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {(c?.icono || []).map((d, d_i) => (
                            <Fragment key={d_i}>
                              <path d={d}></path>
                            </Fragment>
                          ))}
                        </svg>
                      </span>
                      {" "}
                      <span style={sx("font-size: 30px; line-height: 1; font-weight: 800; letter-spacing: -1px")}>
                        {c?.total}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={sx("display: flex; flex-direction: column; gap: 4px; flex-grow: 1")}>
                      {" "}
                      <h3 style={sx("margin: 0; font-size: 18px; font-weight: 800")}>
                        {c?.nombre}
                      </h3>
                      {" "}
                      <p style={sx("margin: 0; font-size: 15px; line-height: 1.5")}>
                        {c?.texto}
                      </p>
                      {" "}
                    </div>
                    {" "}
                    <span style={sx("display: inline-flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 700; color: #FF051E")}>
                      {c?.accion}
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                    {" "}
                  </a>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-guia="crai" className="bloque" aria-labelledby="t-crai">
            {" "}
            <div className="bloque-cab">
              {" "}
              <div style={sx("display: flex; align-items: center; gap: 14px")}>
                {" "}
                <span aria-hidden="true" style={sx("flex: none; min-width: 64px; height: 52px; padding: 0 10px; box-sizing: border-box; border-radius: 14px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800")}>
                  CRAI
                </span>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                  {" "}
                  <h2 id="t-crai" style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                    Servicios del CRAI
                  </h2>
                  {" "}
                  <span style={sx("font-size: 14px")}>
                    Centro de Recursos para el Aprendizaje y la Investigación, con tu acceso institucional.
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <span style={sx("display: flex; flex-direction: column; align-items: flex-end")}>
                <span style={sx("font-size: 30px; line-height: 1; font-weight: 800")}>
                  7
                </span>
                <span style={sx("font-size: 13px; font-weight: 600; color: #A1434F")}>
                  servicios
                </span>
              </span>
              {" "}
            </div>
            {" "}
            <ul className="rejilla4" style={sx("list-style: none; margin: 0; padding: 0")}>
              {" "}
              {(v.crai || []).map((v, v_i) => (
                <Fragment key={v_i}>
                  {" "}
                  <li style={sx("display: flex")}>
                    <a href={v?.href} target="_blank" rel="noopener noreferrer" className="servicio" style={sx("flex: 1 1 auto")}>
                      {" "}
                      <span className="serv-vis" aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          {(v?.icono || []).map((d, d_i) => (
                            <Fragment key={d_i}>
                              <path d={d}></path>
                            </Fragment>
                          ))}
                        </svg>
                      </span>
                      {" "}
                      <span className="serv-txt">
                        {" "}
                        <span className="serv-nom">
                          {v?.nombre}
                          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 6l6 6-6 6"></path>
                          </svg>
                        </span>
                        {" "}
                        <p>
                          {v?.texto}
                          <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                            {" "}(se abre en una pestaña nueva)
                          </span>
                        </p>
                        {" "}
                      </span>
                      {" "}
                    </a>
                  </li>
                  {" "}
                </Fragment>
              ))}
              {" "}
              <li style={sx("position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 20px; border-radius: 16px; background: #FF051E; color: #FFFFFF")}>
                {" "}
                <span aria-hidden="true" style={sx("position: absolute; right: -70px; bottom: -150px; width: 260px; height: 220px; border-radius: 50%; background: #FBF5EC")}></span>
                {" "}
                <span style={sx("position: relative; display: flex; flex-direction: column; gap: 6px")}>
                  <strong style={sx("font-size: 18px; line-height: 1.25")}>
                    ¿Necesitas otro servicio?
                  </strong>
                  <span style={sx("font-size: 14px; line-height: 1.45")}>
                    Consulta todo lo que ofrece el CRAI en su sitio.
                  </span>
                </span>
                {" "}
                <a href="https://www.uao.edu.co/servicios-crai/" target="_blank" rel="noopener noreferrer" style={sx("position: relative; align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; background: #FFFFFF; color: #8A1428; font-size: 15px; font-weight: 700; text-decoration: none")}>
                  Ir al sitio del CRAI
                  <span style={sx("position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)")}>
                    {" "}(se abre en una pestaña nueva)
                  </span>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M13 6l6 6-6 6"></path>
                  </svg>
                </a>
                {" "}
              </li>
              {" "}
            </ul>
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
