import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Contextualizacion.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
var p = parseInt(props.pasoInicial, 10);
this.state = {
paso: p >= 1 && p <= 5 ? p : 1,
programas: [],
nombre: '',
nivel: '', creditos: '', semestre: '', semanas: '', horas: '', modalidad: '',
comp: [''], ra: [''], ce: [''],
prop: [''], func: [''], axio: [''],
presentacion: '',
aporte: '',
consiento: false, guardado: false
};
}
renderValsPagina() {
var self = this;
var s = this.state;
var set = function (k) { return function (e) { var o = {}; o[k] = e.target.value; o.guardado = false; self.setState(o); }; };
var titulos = ['Información general', 'Marco curricular', 'Tipos de conocimiento', 'Intención pedagógica', 'Consentimiento y guardado'];
var c = 'flex: none; width: 34px; height: 34px; border-radius: 50%; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; ';
var pasos = titulos.map(function (t, i) {
var n = i + 1, hecho = n < s.paso, actual = n === s.paso;
return {
n: n, titulo: t, marca: hecho ? '✓' : String(n), actual: actual ? 'step' : 'false',
fondo: actual ? '#FBF5EC' : 'transparent',
circulo: c + (hecho ? 'background: #8A1428; color: #FBF5EC' : (actual ? 'background: #FF051E; color: #FFFFFF' : 'background: #FFFFFF; color: #A1434F; border: 1.5px solid #E3CFC2')),
tituloEstilo: 'font-size: 15px; line-height: 1.25; font-weight: ' + (actual || hecho ? '700; color: #8A1428' : '500; color: #A1434F'),
ir: function () { self.setState({ paso: n }); }
};
});
var pct = s.paso * 20;
var todos = ['Ingeniería Multimedia', 'Diseño de la Comunicación Gráfica', 'Comunicación Social y Periodismo', 'Cine y Comunicación Digital', 'Ingeniería Informática'];
var opcion = function (on) { return 'display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 10px 16px; box-sizing: border-box; border-radius: 12px; cursor: pointer; font-size: 15px; font-weight: 700; ' + (on ? 'background: #FBF5EC; border: 1.5px solid #FF051E' : 'background: #FFFFFF; border: 1.5px solid #E3CFC2'); };
var niveles = ['Pregrado', 'Posgrado'].map(function (n) { return { nombre: n, on: s.nivel === n, caja: opcion(s.nivel === n), elegir: function () { self.setState({ nivel: n }); } }; });
var modalidades = [['Presencial', 'En el campus'], ['Híbrida', 'Presencial y virtual'], ['Virtual', 'Sincrónica o asincrónica']].map(function (m) { return { nombre: m[0], detalle: m[1], on: s.modalidad === m[0], caja: opcion(s.modalidad === m[0]), elegir: function () { self.setState({ modalidad: m[0] }); } }; });
var lista = function (clave, pref, titulo, boton, ayuda, ejemplo, nombreItem) {
return {
titulo: titulo, boton: boton, ayuda: ayuda, ejemplo: ejemplo,
items: s[clave].map(function (t, i) {
return {
cod: pref + (i + 1), texto: t, etiqueta: nombreItem + ' ' + pref + (i + 1),
cambiar: function (e) { var a = self.state[clave].slice(); a[i] = e.target.value; var o = {}; o[clave] = a; self.setState(o); },
quitar: function () { var a = self.state[clave].slice(); a.splice(i, 1); var o = {}; o[clave] = a; self.setState(o); }
};
}),
agregar: function () { var o = {}; o[clave] = self.state[clave].concat(['']); self.setState(o); }
};
};
var tile = function (bg, ink) { return 'flex: none; width: 36px; height: 36px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: ' + bg + '; color: ' + ink; };
var listaSaber = function (clave, pref, titulo, detalle, boton, ayuda, ejemplo, nombreItem, tl, icono) {
return Object.assign(lista(clave, pref, titulo, boton, ayuda, ejemplo, nombreItem), { detalle: detalle, tile: tl, icono: icono });
};
var listasSaberes = [
listaSaber('prop', 'P', 'Conocimientos proposicionales', 'Teóricos y conceptuales: lo que el estudiantado debe saber.', 'Agregar conocimiento proposicional', 'Conceptos, teorías y principios de la trayectoria.', 'Escribe el conocimiento proposicional', 'Conocimiento proposicional', tile('#009AE6', '#FFFFFF'), ['M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z', 'M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z']),
listaSaber('func', 'F', 'Conocimientos funcionales', 'Prácticos y procedimentales: lo que el estudiantado debe saber hacer.', 'Agregar conocimiento funcional', 'Procedimientos, técnicas y herramientas que se aplican.', 'Escribe el conocimiento funcional', 'Conocimiento funcional', tile('#FE9800', '#8A1428'), ['M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z']),
listaSaber('axio', 'A', 'Conocimientos axiológicos', 'Valores y actitudes: cómo el estudiantado debe ser y convivir.', 'Agregar conocimiento axiológico', 'Valores, actitudes y principios éticos que se promueven.', 'Escribe el conocimiento axiológico', 'Conocimiento axiológico', tile('#9B4CD7', '#FFFFFF'), ['M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'])
];
var colores = [['#FF051E', '#FFFFFF'], ['#8A1428', '#FBF5EC'], ['#FF836C', '#8A1428'], ['#AC0B32', '#FFFFFF'], ['#FF051E', '#FFFFFF'], ['#8A1428', '#FBF5EC']];
var vinculados = ['Diseño curricular', 'Diseño microcurricular', 'Diseña UAO', 'Instrumentos de evaluación', 'AUREA', 'Guiones técnicos'].map(function (n, i) {
return { n: i + 1, nombre: n, punto: 'width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; background: ' + colores[i][0] + '; color: ' + colores[i][1] };
});
var ultimo = s.paso === 5;
var bloqueado = ultimo && !s.consiento;
return {
pasos: pasos, paso: s.paso, pct: pct,
barra: 'width: ' + pct + '%; height: 100%; border-radius: 999px; background: #FF051E',
v1: s.paso === 1, v2: s.paso === 2, v3: s.paso === 3, v4: s.paso === 4, v5: s.paso === 5, noV1: s.paso !== 1,
programasSel: s.programas.map(function (g) { return { nombre: g, quitar: function () { self.setState({ programas: self.state.programas.filter(function (x) { return x !== g; }) }); } }; }),
programasDisp: todos.filter(function (g) { return s.programas.indexOf(g) < 0; }),
agregarPrograma: function (e) { var v = e.target.value; if (v) self.setState({ programas: self.state.programas.concat([v]) }); },
nombre: s.nombre, setNombre: set('nombre'),
niveles: niveles, modalidades: modalidades,
creditos: s.creditos, setCreditos: set('creditos'),
semestre: s.semestre, setSemestre: set('semestre'),
semanas: s.semanas, setSemanas: set('semanas'),
horas: s.horas, setHoras: set('horas'),
listas: [
lista('comp', 'C', 'Competencias asociadas', 'Agregar competencia', 'Estructura institucional: verbo + objeto de conocimiento + contexto o condición de calidad.', 'Escribe la competencia', 'Competencia'),
lista('ra', 'RA', 'Resultados de aprendizaje (RA)', 'Agregar resultado de aprendizaje', 'Resultados observables y medibles.', 'Escribe el resultado de aprendizaje', 'Resultado de aprendizaje'),
lista('ce', 'CE', 'Criterios de evaluación (CE)', 'Agregar criterio de evaluación', 'Criterios generales para valorar el logro de los RA.', 'Escribe el criterio de evaluación', 'Criterio de evaluación')
],
listasSaberes: listasSaberes,
presentacion: s.presentacion, setPresentacion: set('presentacion'), lenPres: s.presentacion.length,
aporte: s.aporte, setAporte: set('aporte'), lenAporte: s.aporte.length,
consiento: s.consiento,
alternarConsentimiento: function () { self.setState({ consiento: !self.state.consiento, guardado: false }); },
consentCaja: 'display: flex; align-items: flex-start; gap: 14px; padding: 18px 20px; border-radius: 14px; cursor: pointer; ' + (s.consiento ? 'background: #FFFFFF; border: 2px solid #FF051E' : 'background: #FFFFFF; border: 2px solid #E3CFC2'),
vinculados: vinculados,
guardado: s.guardado,
atras: function () { self.setState({ paso: Math.max(1, self.state.paso - 1) }); },
puedeOmitir: s.paso >= 2 && s.paso <= 4,
omitir: function () { self.setState({ paso: Math.min(5, self.state.paso + 1) }); },
siguiente: function (e) {
e.preventDefault();
if (self.state.paso < 5) self.setState({ paso: self.state.paso + 1 });
else if (self.state.consiento) { window.location.href = '#/centro-diseno'; }
},
bloqueado: bloqueado,
botonTexto: ultimo ? 'Guardar y continuar' : 'Continuar',
botonIcono: ultimo ? 'M5 12l5 5 9-10' : 'M5 12h14M13 6l6 6-6 6',
botonEstilo: 'display: inline-flex; align-items: center; gap: 8px; min-height: 50px; padding: 0 24px; border-radius: 12px; border: 0; font-family: inherit; font-size: 16px; font-weight: 700; ' + (bloqueado ? 'background: #F1E4D3; color: #A1434F; cursor: not-allowed' : 'background: #FF051E; color: #FFFFFF; cursor: pointer')
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

export default function Contextualizacion(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Contextualización de la trayectoria · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-contextualizacion">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="trayectorias" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 28px clamp(16px, 4vw, 48px) 36px; display: flex; flex-direction: column; gap: 22px")}>
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
                Contextualización de la trayectoria
              </li>
              {" "}
            </ol>
          </nav>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px")}>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
              {" "}
              <span style={sx("font-size: 14px; font-weight: 700; color: #FF051E")}>
                Nueva trayectoria
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 34px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Contextualización de la trayectoria
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.5")}>
                Cuéntanos sobre tu curso una sola vez: los 6 asistentes usarán esta información.
              </p>
              {" "}
            </div>
            {" "}
            <span data-guia="borrador" role="status" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 36px; padding: 0 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #F1E4D3; font-size: 14px; font-weight: 600")}>
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF051E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z"></path>
                <path d="M9.5 13l2 2 3.5-4"></path>
              </svg>
              {" "}Borrador guardado automáticamente
            </span>
            {" "}
          </div>
          {" "}
          <nav data-guia="partes" aria-label="Partes de la contextualización" style={sx("background: #FFFFFF; border-radius: 18px; padding: 16px 20px 18px; display: flex; flex-direction: column; gap: 14px")}>
            {" "}
            <ol style={sx("list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px")}>
              {" "}
              {(v.pasos || []).map((p, p_i) => (
                <Fragment key={p_i}>
                  {" "}
                  <li style={sx("display: flex")}>
                    {" "}
                    <button type="button" onClick={p?.ir} aria-current={p?.actual} style={sx(`display: flex; align-items: center; gap: 12px; width: 100%; min-height: 52px; padding: 6px 10px; border: 0; border-radius: 12px; background: ${p?.fondo ?? ''}; color: #8A1428; font-family: inherit; text-align: left; cursor: pointer`)}>
                      {" "}
                      <span aria-hidden="true" style={sx(p?.circulo)}>
                        {p?.marca}
                      </span>
                      {" "}
                      <span style={sx("display: flex; flex-direction: column; gap: 1px")}>
                        <span style={sx("font-size: 12px; font-weight: 700; color: #AC0B32")}>
                          Parte{" "}{p?.n}
                        </span>
                        <span style={sx(p?.tituloEstilo)}>
                          {p?.titulo}
                        </span>
                      </span>
                      {" "}
                    </button>
                    {" "}
                  </li>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </ol>
            {" "}
            <div style={sx("display: flex; align-items: center; gap: 14px")}>
              {" "}
              <div role="progressbar" aria-label="Avance de la contextualización" aria-valuenow={v.pct} aria-valuemin="0" aria-valuemax="100" style={sx("flex: 1 1 auto; height: 8px; border-radius: 999px; background: #F1E4D3; overflow: hidden")}>
                <div style={sx(v.barra)}></div>
              </div>
              {" "}
              <span style={sx("flex: none; font-size: 14px; font-weight: 700")}>
                Parte{" "}{v.paso}{" "}de 5 ·{" "}{v.pct}{" "}%
              </span>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
          <form data-guia="formulario" onSubmit={v.siguiente} style={sx("background: #FFFFFF; border-radius: 18px; padding: 28px clamp(18px, 3vw, 36px); display: flex; flex-direction: column; gap: 22px")}>
            {" "}
            {v.v1 ? (
              <>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 22px")}>
                  {" "}
                  <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    {" "}
                    <h2 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                      Parte 1. Información general y administrativa
                    </h2>
                    {" "}
                    <p style={sx("margin: 0; font-size: 15px")}>
                      La ficha técnica de tu curso.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="campo">
                    {" "}
                    <span className="etq" id="l-prog">
                      Programas académicos{" "}
                      <b aria-hidden="true">
                        *
                      </b>
                    </span>
                    {" "}
                    <div role="group" aria-labelledby="l-prog" style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 8px; min-height: 48px; padding: 6px 8px; box-sizing: border-box; border-radius: 12px; border: 1.5px solid #E3CFC2")}>
                      {" "}
                      {(v.programasSel || []).map((g, g_i) => (
                        <Fragment key={g_i}>
                          {" "}
                          <span style={sx("display: inline-flex; align-items: center; gap: 2px; padding-left: 12px; border-radius: 999px; background: #FBF5EC; border: 1px solid #FF836C; font-size: 14px; font-weight: 700")}>
                            {g?.nombre}
                            <button type="button" onClick={g?.quitar} aria-label={`Quitar ${g?.nombre ?? ''}`} style={sx("width: 36px; height: 36px; border: 0; background: transparent; color: #AC0B32; font-size: 18px; cursor: pointer")}>
                              ×
                            </button>
                          </span>
                          {" "}
                        </Fragment>
                      ))}
                      {" "}
                      <select value="" onChange={v.agregarPrograma} aria-label="Agregar programa académico" style={sx("flex: 1 1 200px; min-width: 0; min-height: 36px; border: 0; background: transparent; color: #8A1428; font-family: inherit; font-size: 15px; cursor: pointer")}>
                        <option value="">
                          + Agregar programa
                        </option>
                        {(v.programasDisp || []).map((o, o_i) => (
                          <Fragment key={o_i}>
                            <option value={o ?? ''}>
                              {o}
                            </option>
                          </Fragment>
                        ))}
                      </select>
                      {" "}
                    </div>
                    {" "}
                    <span className="ayuda">
                      Puedes elegir uno o varios programas.
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <label className="campo">
                    {" "}
                    <span className="etq">
                      Nombre de la trayectoria{" "}
                      <b aria-hidden="true">
                        *
                      </b>
                    </span>
                    {" "}
                    <input className="ctrl" type="text" required value={v.nombre ?? ''} onChange={v.setNombre} placeholder="Por ejemplo, Diseño de Interacción" />
                    {" "}
                  </label>
                  {" "}
                  <div className="fila">
                    {" "}
                    <fieldset className="campo" style={sx("margin: 0; padding: 0; border: 0")}>
                      {" "}
                      <legend className="etq" style={sx("padding: 0; margin-bottom: 8px")}>
                        Nivel de formación{" "}
                        <b aria-hidden="true">
                          *
                        </b>
                      </legend>
                      {" "}
                      <div style={sx("display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px")}>
                        {" "}
                        {(v.niveles || []).map((o, o_i) => (
                          <Fragment key={o_i}>
                            {" "}
                            <label style={sx(o?.caja)}>
                              <input type="radio" name="nivel" checked={!!o?.on} onChange={o?.elegir} />
                              {o?.nombre}
                            </label>
                            {" "}
                          </Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </fieldset>
                    {" "}
                    <label className="campo">
                      {" "}
                      <span className="etq">
                        Créditos académicos{" "}
                        <b aria-hidden="true">
                          *
                        </b>
                      </span>
                      {" "}
                      <select className="ctrl" value={v.creditos ?? ''} onChange={v.setCreditos}>
                        <option value="" disabled>
                          Selecciona los créditos
                        </option>
                        <option value="1">
                          1 crédito
                        </option>
                        <option value="2">
                          2 créditos
                        </option>
                        <option value="3">
                          3 créditos
                        </option>
                        <option value="4">
                          4 créditos
                        </option>
                        <option value="5">
                          5 créditos
                        </option>
                        <option value="6">
                          6 créditos
                        </option>
                      </select>
                      {" "}
                    </label>
                    {" "}
                  </div>
                  {" "}
                  <div className="fila">
                    {" "}
                    <label className="campo">
                      {" "}
                      <span className="etq">
                        Semestre{" "}
                        <b aria-hidden="true">
                          *
                        </b>
                      </span>
                      {" "}
                      <select className="ctrl" value={v.semestre ?? ''} onChange={v.setSemestre}>
                        <option value="" disabled>
                          Selecciona el semestre
                        </option>
                        <option value="1">
                          Semestre 1
                        </option>
                        <option value="2">
                          Semestre 2
                        </option>
                        <option value="3">
                          Semestre 3
                        </option>
                        <option value="4">
                          Semestre 4
                        </option>
                        <option value="5">
                          Semestre 5
                        </option>
                        <option value="6">
                          Semestre 6
                        </option>
                        <option value="7">
                          Semestre 7
                        </option>
                        <option value="8">
                          Semestre 8
                        </option>
                        <option value="9">
                          Semestre 9
                        </option>
                        <option value="10">
                          Semestre 10
                        </option>
                      </select>
                      {" "}
                      <span className="ayuda">
                        Ubicación de la trayectoria en la malla curricular.
                      </span>
                      {" "}
                    </label>
                    {" "}
                    <div className="campo">
                      {" "}
                      <span className="etq" id="l-dur">
                        Duración{" "}
                        <b aria-hidden="true">
                          *
                        </b>
                      </span>
                      {" "}
                      <div role="group" aria-labelledby="l-dur" style={sx("display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px")}>
                        {" "}
                        <select className="ctrl" aria-label="Semanas" value={v.semanas ?? ''} onChange={v.setSemanas}>
                          <option value="" disabled>
                            Semanas
                          </option>
                          <option value="8">
                            8 semanas
                          </option>
                          <option value="16">
                            16 semanas
                          </option>
                          <option value="18">
                            18 semanas
                          </option>
                        </select>
                        {" "}
                        <select className="ctrl" aria-label="Horas totales" value={v.horas ?? ''} onChange={v.setHoras}>
                          <option value="" disabled>
                            Horas totales
                          </option>
                          <option value="48">
                            48 horas
                          </option>
                          <option value="96">
                            96 horas
                          </option>
                          <option value="144">
                            144 horas
                          </option>
                          <option value="192">
                            192 horas
                          </option>
                        </select>
                        {" "}
                      </div>
                      {" "}
                      <span className="ayuda">
                        Semanas y horas totales del curso.
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <fieldset className="campo" style={sx("margin: 0; padding: 0; border: 0")}>
                    {" "}
                    <legend className="etq" style={sx("padding: 0; margin-bottom: 8px")}>
                      Modalidad{" "}
                      <b aria-hidden="true">
                        *
                      </b>
                    </legend>
                    {" "}
                    <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px")}>
                      {" "}
                      {(v.modalidades || []).map((o, o_i) => (
                        <Fragment key={o_i}>
                          {" "}
                          <label style={sx(o?.caja)}>
                            <input type="radio" name="modalidad" checked={!!o?.on} onChange={o?.elegir} />
                            <span style={sx("display: flex; flex-direction: column")}>
                              <span>
                                {o?.nombre}
                              </span>
                              <span style={sx("font-size: 13px; font-weight: 500; color: #A1434F")}>
                                {o?.detalle}
                              </span>
                            </span>
                          </label>
                          {" "}
                        </Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </fieldset>
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            {v.v2 ? (
              <>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 22px")}>
                  {" "}
                  <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    {" "}
                    <h2 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                      Parte 2. Marco curricular de partida
                    </h2>
                    {" "}
                    <p style={sx("margin: 0; font-size: 15px")}>
                      Alinea tu trayectoria con la Política Curricular, el PEI y el SIEA de la UAO.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  {(v.listas || []).map((L, L_i) => (
                    <Fragment key={L_i}>
                      {" "}
                      <div className="campo">
                        {" "}
                        <div className="lista-cab">
                          {" "}
                          <span style={sx("display: flex; flex-direction: column; gap: 2px")}>
                            <span className="etq">
                              {L?.titulo}{" "}
                              <b aria-hidden="true">
                                *
                              </b>
                            </span>
                            <span className="ayuda">
                              {L?.ayuda}
                            </span>
                          </span>
                          {" "}
                          <button type="button" className="mas" onClick={L?.agregar} aria-label={L?.boton}>
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 5v14"></path>
                              <path d="M5 12h14"></path>
                            </svg>
                            Agregar
                          </button>
                          {" "}
                        </div>
                        {" "}
                        <div className="lista">
                          {" "}
                          {(L?.items || []).map((it, it_i) => (
                            <Fragment key={it_i}>
                              {" "}
                              <div className="lista-fila">
                                {" "}
                                <span className="cod" aria-hidden="true">
                                  {it?.cod}
                                </span>
                                {" "}
                                <input type="text" value={it?.texto ?? ''} onChange={it?.cambiar} aria-label={it?.etiqueta} placeholder={L?.ejemplo} />
                                {" "}
                                <button type="button" className="quitar" onClick={it?.quitar} aria-label={`Quitar ${it?.etiqueta ?? ''}`}>
                                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 7h14"></path>
                                    <path d="M10 11v6"></path>
                                    <path d="M14 11v6"></path>
                                    <path d="M6 7l1 13h10l1-13"></path>
                                    <path d="M9 7V4h6v3"></path>
                                  </svg>
                                </button>
                                {" "}
                              </div>
                              {" "}
                            </Fragment>
                          ))}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            {v.v3 ? (
              <>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 22px")}>
                  {" "}
                  <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    {" "}
                    <h2 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                      Parte 3. Tipos de conocimiento
                    </h2>
                    {" "}
                    <p style={sx("margin: 0; font-size: 15px")}>
                      Define los saberes que tu estudiantado desarrollará en la trayectoria.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  {(v.listasSaberes || []).map((L, L_i) => (
                    <Fragment key={L_i}>
                      {" "}
                      <div className="campo">
                        {" "}
                        <div className="lista-cab">
                          {" "}
                          <span style={sx("display: flex; align-items: center; gap: 12px")}>
                            {" "}
                            <span aria-hidden="true" style={sx(L?.tile)}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {(L?.icono || []).map((d, d_i) => (
                                  <Fragment key={d_i}>
                                    <path d={d}></path>
                                  </Fragment>
                                ))}
                              </svg>
                            </span>
                            {" "}
                            <span style={sx("display: flex; flex-direction: column")}>
                              <span className="etq">
                                {L?.titulo}{" "}
                                <b aria-hidden="true">
                                  *
                                </b>
                              </span>
                              <span className="ayuda">
                                {L?.detalle}
                              </span>
                            </span>
                            {" "}
                          </span>
                          {" "}
                          <button type="button" className="mas" onClick={L?.agregar} aria-label={L?.boton}>
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 5v14"></path>
                              <path d="M5 12h14"></path>
                            </svg>
                            Agregar
                          </button>
                          {" "}
                        </div>
                        {" "}
                        <div className="lista">
                          {" "}
                          {(L?.items || []).map((it, it_i) => (
                            <Fragment key={it_i}>
                              {" "}
                              <div className="lista-fila">
                                {" "}
                                <span className="cod" aria-hidden="true">
                                  {it?.cod}
                                </span>
                                {" "}
                                <input type="text" value={it?.texto ?? ''} onChange={it?.cambiar} aria-label={it?.etiqueta} placeholder={L?.ejemplo} />
                                {" "}
                                <button type="button" className="quitar" onClick={it?.quitar} aria-label={`Quitar ${it?.etiqueta ?? ''}`}>
                                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 7h14"></path>
                                    <path d="M10 11v6"></path>
                                    <path d="M14 11v6"></path>
                                    <path d="M6 7l1 13h10l1-13"></path>
                                    <path d="M9 7V4h6v3"></path>
                                  </svg>
                                </button>
                                {" "}
                              </div>
                              {" "}
                            </Fragment>
                          ))}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            {v.v4 ? (
              <>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 22px")}>
                  {" "}
                  <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    {" "}
                    <h2 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                      Parte 4. Intención pedagógica
                    </h2>
                    {" "}
                    <p style={sx("margin: 0; font-size: 15px")}>
                      El alcance y la meta formativa de tu trayectoria en el plan de estudios.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <label className="campo">
                    {" "}
                    <span className="etq">
                      Presentación de la trayectoria{" "}
                      <b aria-hidden="true">
                        *
                      </b>
                    </span>
                    {" "}
                    <textarea className="ctrl" rows="5" maxLength="1000" value={v.presentacion ?? ''} onChange={v.setPresentacion} placeholder="Por ejemplo, el curso introduce al estudiantado en el diseño de experiencias interactivas centradas en las personas…" />
                    {" "}
                    <span style={sx("display: flex; justify-content: space-between; gap: 12px")}>
                      <span className="ayuda">
                        Resume la finalidad formativa del curso y lo que esperas lograr.
                      </span>
                      <span className="ayuda" style={sx("flex: none")}>
                        {v.lenPres}{" "}/ 1000 caracteres
                      </span>
                    </span>
                    {" "}
                  </label>
                  {" "}
                  <label className="campo">
                    {" "}
                    <span className="etq">
                      Aporte al programa{" "}
                      <b aria-hidden="true">
                        *
                      </b>
                    </span>
                    {" "}
                    <textarea className="ctrl" rows="4" maxLength="600" value={v.aporte ?? ''} onChange={v.setAporte} placeholder="Por ejemplo, aporta a la competencia de diseño de soluciones interactivas del programa…" />
                    {" "}
                    <span style={sx("display: flex; justify-content: space-between; gap: 12px")}>
                      <span className="ayuda">
                        Cómo contribuye la trayectoria a la formación del estudiantado.
                      </span>
                      <span className="ayuda" style={sx("flex: none")}>
                        {v.lenAporte}{" "}/ 600 caracteres
                      </span>
                    </span>
                    {" "}
                  </label>
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            {v.v5 ? (
              <>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 20px")}>
                  {" "}
                  <div style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    {" "}
                    <h2 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                      Parte 5. Consentimiento y guardado
                    </h2>
                    {" "}
                    <p style={sx("margin: 0; font-size: 15px")}>
                      Diseño responsable, conforme a la Ley 1581 de 2012 y a los lineamientos de ética y privacidad de la UAO.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div style={sx("display: flex; gap: 16px; padding: 20px; border-radius: 14px; background: #FBF5EC")}>
                    {" "}
                    <span aria-hidden="true" style={sx("flex: none; width: 44px; height: 44px; border-radius: 12px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"></path>
                        <path d="M9 12l2 2 4-4"></path>
                      </svg>
                    </span>
                    {" "}
                    <div style={sx("display: flex; flex-direction: column; gap: 6px")}>
                      {" "}
                      <h3 style={sx("margin: 0; font-size: 17px; font-weight: 800")}>
                        Cuidamos tus datos
                      </h3>
                      {" "}
                      <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                        Procesamos esta información con confidencialidad académica y solo pedimos los datos necesarios para diseñar tu trayectoria, conforme a la Ley 1581 de 2012 y a los lineamientos de ética y privacidad de la UAO.
                      </p>
                      {" "}
                      <a href="#/politica-privacidad" target="_blank" rel="noopener noreferrer" title="Se abre en una pestaña nueva" style={sx("align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 15px; font-weight: 700")}>
                        Leer el aviso de privacidad completo
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M13 6l6 6-6 6"></path>
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <label style={sx(v.consentCaja)}>
                    {" "}
                    <input type="checkbox" checked={!!v.consiento} onChange={v.alternarConsentimiento} style={sx("margin-top: 2px")} />
                    {" "}
                    <span style={sx("display: flex; flex-direction: column; gap: 4px")}>
                      <span style={sx("font-size: 16px; font-weight: 700")}>
                        Autorizo el uso de esta información para mejorar la experiencia de la plataforma y alimentar los asistentes de IA.
                      </span>
                      <span style={sx("font-size: 13px; color: #A1434F")}>
                        Consentimiento informado. Es obligatorio para guardar.
                      </span>
                    </span>
                    {" "}
                  </label>
                  {" "}
                  <div style={sx("position: relative; overflow: hidden; border-radius: 16px; background: #FF051E; color: #FFFFFF; padding: 22px 24px 64px; display: flex; flex-direction: column; gap: 12px")}>
                    {" "}
                    <div aria-hidden="true" style={sx("position: absolute; right: -60px; bottom: -190px; width: 320px; height: 260px; border-radius: 50%; background: #FBF5EC")}></div>
                    {" "}
                    <h3 style={sx("position: relative; margin: 0; font-size: 17px; font-weight: 800")}>
                      Al guardar, tu trayectoria queda vinculada a su expediente
                    </h3>
                    {" "}
                    <p style={sx("position: relative; margin: 0; font-size: 15px; line-height: 1.5")}>
                      Los 6 asistentes conocerán tu trayectoria, sin que tengas que repetir la información.
                    </p>
                    {" "}
                    <ul style={sx("position: relative; list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px")}>
                      {" "}
                      {(v.vinculados || []).map((a, a_i) => (
                        <Fragment key={a_i}>
                          {" "}
                          <li style={sx("display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px 6px 6px; border-radius: 999px; background: #FFFFFF; color: #8A1428; font-size: 14px; font-weight: 700")}>
                            <span aria-hidden="true" style={sx(a?.punto)}>
                              {a?.n}
                            </span>
                            {a?.nombre}
                          </li>
                          {" "}
                        </Fragment>
                      ))}
                      {" "}
                    </ul>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            <div data-guia="pie" style={sx("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding-top: 20px; border-top: 1px solid #F1E4D3")}>
              {" "}
              <span className="ayuda">
                <b style={sx("color: #FF051E")}>
                  *
                </b>
                {" "}Campo obligatorio
              </span>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; gap: 10px")}>
                {" "}
                {v.v1 ? (
                  <>
                    {" "}
                    <a href={v.usrTrayHref} className="btn-sec">
                      Cancelar
                    </a>
                    {" "}
                  </>
                ) : null}
                {" "}
                {v.noV1 ? (
                  <>
                    {" "}
                    <button type="button" className="btn-sec" onClick={v.atras}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"></path>
                        <path d="M11 6l-6 6 6 6"></path>
                      </svg>
                      Atrás
                    </button>
                    {" "}
                  </>
                ) : null}
                {" "}
                {v.puedeOmitir ? (
                  <>
                    {" "}
                    <button type="button" onClick={v.omitir} aria-label="Omitir esta parte y continuar" title="Puedes completarla después" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 50px; padding: 0 18px; border-radius: 12px; border: 0; background: transparent; color: #8A1428; font-family: inherit; font-size: 16px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; cursor: pointer")}>
                      Omitir
                    </button>
                    {" "}
                  </>
                ) : null}
                {" "}
                <button type="submit" disabled={!!v.bloqueado} style={sx(v.botonEstilo)}>
                  {v.botonTexto}
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.botonIcono}></path>
                  </svg>
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </form>
          {" "}
        </main>
        {" "}
      </div>
      {" "}
    </div>
  );
}
