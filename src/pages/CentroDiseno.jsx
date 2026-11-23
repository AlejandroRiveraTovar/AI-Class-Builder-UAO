import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './CentroDiseno.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
renderValsPagina() {
var datos = [
{ nombre: 'Diseño microcurricular UAO', texto: 'Construye la matriz de alineación de actividades con metas, medios de evaluación y semanas.', fondo: '#8A1428', tinta: '#FBF5EC', icono: ['M12.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0', 'M3 20c0-3.3 2.7-6 6-6', 'M14 20l1-3 4.5-4.5 2 2L17 19z'], enCurso: true, etapa: 5, etapas: 6, href: '#/asistentes/diseno-microcurricular' },
{ nombre: 'Diseña UAO', texto: 'Profundiza cada actividad de aprendizaje con el modelo Canvas.', fondo: '#FF836C', tinta: '#8A1428', icono: ['M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M4 10h16', 'M10 10v10'], href: '#/asistentes/disena' },
{ nombre: 'Instrumentos de evaluación UAO', texto: 'Diseña rúbricas analíticas (escala de 0 a 5) y cuestionarios.', fondo: '#AC0B32', tinta: '#FFFFFF', icono: ['M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0', 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0', 'M12 12h.01'], href: '#/asistentes/evaluacion' },
{ nombre: 'AUREA', texto: 'Selecciona o genera portadas, banners e infografías con la identidad UAO.', fondo: '#FF051E', tinta: '#FFFFFF', icono: ['M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'M10.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0', 'M20 16l-5-5-8 8'], href: '#/asistentes/aurea' },
{ nombre: 'Guiones técnicos audiovisuales', texto: 'Convierte guiones literarios en guiones técnicos por escenas y planos.', fondo: '#8A1428', tinta: '#FBF5EC', icono: ['M5 6h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z', 'M3 10h18', 'M7 6l2 4', 'M12 6l2 4', 'M17 6l2 4'], href: '#/asistentes/guiones' }
];
var ruta = datos.map(function (d, i) { return { n: i + 1, nombre: d.nombre, href: d.href }; });
var btnBase = 'display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; ';
return {
ruta: ruta,
asistentes: datos.map(function (d, i) {
var activo = !!d.enCurso;
var pct = activo ? Math.round(d.etapa / d.etapas * 100) : 0;
return {
etapa: activo ? 'Etapa ' + d.etapa + ' de ' + d.etapas : '',
avance: pct,
avanceLabel: 'Avance en ' + d.nombre,
barra: 'width: ' + pct + '%; height: 100%; background: #FF051E',
n: i + 1,
nombre: d.nombre,
texto: d.texto,
icono: d.icono,
enCurso: activo,
href: d.href || '#',
accion: activo ? 'Continuar' : 'Iniciar asistente',
tile: 'flex: none; width: 54px; height: 54px; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; background: ' + d.fondo + '; color: ' + d.tinta,
tarjeta: 'display: flex; flex-direction: column; gap: 18px; padding: 26px; border-radius: 18px; background: #FFFFFF; border: ' + (activo ? '2px solid #FF051E' : '2px solid transparent'),
boton: btnBase + (activo ? 'background: #FF051E; color: #FFFFFF' : 'background: #FBF5EC; color: #8A1428; border: 1.5px solid #8A1428')
};
})
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

export default function CentroDiseno(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Centro de diseño microcurricular · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-centro-diseno">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 36px clamp(16px, 4vw, 48px) 48px; display: flex; flex-direction: column; gap: 32px")}>
          {" "}
          <div style={sx("display: flex; flex-direction: column; gap: 20px")}>
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
                  Centro de diseño microcurricular
                </li>
                {" "}
              </ol>
            </nav>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px")}>
              {" "}
              <div style={sx("flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 8px")}>
                {" "}
                <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                  Diseño Web · Ingeniería Multimedia
                </span>
                {" "}
                <h1 style={sx("margin: 0; font-size: 40px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                  Centro de diseño microcurricular
                </h1>
                {" "}
                <p style={sx("margin: 0; font-size: 17px; line-height: 1.55; max-width: 720px; width: 820px")}>
                  Elige el asistente que necesitas. Puedes usarlos en el orden que prefieras; la ruta sugerida te orienta.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <ol data-guia="asistentes" className="rejilla">
            {" "}
            {(v.asistentes || []).map((a, a_i) => (
              <Fragment key={a_i}>
                {" "}
                <li style={sx(a?.tarjeta)}>
                  {" "}
                  <div style={sx("display: flex; align-items: flex-start; justify-content: space-between; gap: 12px")}>
                    {" "}
                    <span style={sx(a?.tile)}>
                      {" "}
                      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {(a?.icono || []).map((p, p_i) => (
                          <Fragment key={p_i}>
                            <path d={p}></path>
                          </Fragment>
                        ))}
                      </svg>
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div style={sx("display: flex; flex-direction: column; gap: 6px; flex-grow: 1")}>
                    {" "}
                    <h2 style={sx("margin: 0; font-size: 21px; line-height: 1.25; font-weight: 800")}>
                      {a?.nombre}
                    </h2>
                    {" "}
                    <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                      {a?.texto}
                    </p>
                    {" "}
                  </div>
                  {" "}
                  {a?.enCurso ? (
                    <>
                      {" "}
                      <div style={sx("display: flex; flex-direction: column; gap: 8px")}>
                        {" "}
                        <div style={sx("display: flex; justify-content: space-between; font-size: 13px; font-weight: 700")}>
                          <span style={sx("color: #FF051E")}>
                            En curso
                          </span>
                          <span>
                            {a?.etapa}
                          </span>
                        </div>
                        {" "}
                        <div role="progressbar" aria-label={a?.avanceLabel} aria-valuenow={a?.avance} aria-valuemin="0" aria-valuemax="100" style={sx("height: 8px; border-radius: 999px; background: #F1E4D3; overflow: hidden")}>
                          <div style={sx(a?.barra)}></div>
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </>
                  ) : null}
                  {" "}
                  <div style={sx("padding-top: 16px; border-top: 1px solid #F1E4D3")}>
                    {" "}
                    <a href={a?.href} style={sx(a?.boton)}>
                      {a?.accion}{" "}
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M13 6l6 6-6 6"></path>
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </li>
                {" "}
              </Fragment>
            ))}
            {" "}
            <li data-guia="recomendacion" style={sx("position: relative; overflow: hidden; border-radius: 18px; background: #FF051E; color: #FFFFFF; padding: 26px; display: flex; flex-direction: column; gap: 14px")}>
              {" "}
              <div aria-hidden="true" style={sx("position: absolute; right: -110px; bottom: -220px; width: 340px; height: 300px; border-radius: 50%; background: #FBF5EC")}></div>
              {" "}
              <div style={sx("position: relative; display: flex; flex-direction: column; gap: 8px")}>
                {" "}
                <h2 style={sx("margin: 0; font-size: 21px; line-height: 1.25; font-weight: 800")}>
                  ¿No sabes por dónde empezar?
                </h2>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.5")}>
                  Las competencias y los resultados de aprendizaje ya vienen de la contextualización. Te sugerimos este orden:
                </p>
                {" "}
              </div>
              {" "}
              <ol aria-label="Ruta sugerida" style={sx("position: relative; list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px")}>
                {" "}
                {(v.ruta || []).map((r, r_i) => (
                  <Fragment key={r_i}>
                    {" "}
                    <li>
                      <a href={r?.href} style={sx("display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 6px 12px 6px 6px; box-sizing: border-box; border-radius: 12px; background: #FFFFFF; color: #8A1428; font-size: 14px; font-weight: 700; line-height: 1.25; text-decoration: none")}>
                        <span aria-hidden="true" style={sx("flex: none; width: 28px; height: 28px; border-radius: 50%; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800")}>
                          {r?.n}
                        </span>
                        {r?.nombre}
                      </a>
                    </li>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </ol>
              {" "}
            </li>
            {" "}
          </ol>
          {" "}
        </main>
        {" "}
      </div>
      {" "}
    </div>
  );
}
