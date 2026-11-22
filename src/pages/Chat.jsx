import { Fragment, useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Chat.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { sel: 'lg', q: '', filtro: 'todas', borrador: '', estado: 'revision', extra: {}, leidos: {}, nuevos: [], crear: false, nNombre: '', nCorreo: '', nRol: 'Colaboradora CEEDi', errC: '', plegado: false, forzados: {}, eliminadas: [], eliminar: null, avisoConv: '', deshacerAccion: null };
}
renderVals() {
var self = this;
var estilos = {
ceedi: 'background: #FF051E; color: #FFFFFF',
prof: 'background: #FFFFFF; color: #8A1428; border: 1.5px solid #FF836C'
};
var chats = [
{ id: 'lg', nombre: 'Laura Gómez', rol: 'Colaboradora CEEDi', tipo: 'ceedi', hora: '10:40 a. m.', grupo: 'Hoy', fecha: 'Hoy', nuevos: 0, tema: 'Matriz de alineación', href: '#/asistentes/diseno-microcurricular',
mensajes: [
{ yo: true, hora: '10:24 a. m.', texto: 'Actualicé la matriz de alineación. Quedo atento a tus observaciones.' },
{ yo: false, hora: '10:32 a. m.', texto: 'La revisé y ajusté los criterios de evaluación. Te adjunto el documento con mis comentarios.', adjunto: 'Matriz_Alineacion_v1.1.xlsx', peso: '2,4 MB' },
{ yo: true, hora: '10:40 a. m.', texto: 'Perfecto, gracias. Voy a aplicar los cambios.' }
] },
{ id: 'ar', nombre: 'Andrés Rodríguez', rol: 'Colaborador CEEDi', tipo: 'ceedi', hora: '9:15 a. m.', grupo: 'Hoy', fecha: 'Hoy', nuevos: 2, tema: 'Rúbricas de evaluación', href: '#/asistentes/evaluacion',
mensajes: [
{ yo: false, hora: '9:12 a. m.', texto: 'Revisé las rúbricas de la unidad 2. Hay dos criterios que conviene precisar.' },
{ yo: false, hora: '9:15 a. m.', texto: '¿Te parece si los ajustamos juntos esta semana?' }
] },
{ id: 'ch', nombre: 'Carolina Herrera', rol: 'Docente UAO', tipo: 'prof', hora: '26/09', grupo: 'Anteriores', fecha: '26/09/2026', nuevos: 0, tema: 'Actividades de la unidad 3', href: '#/asistentes/disena',
mensajes: [ { yo: false, hora: '3:20 p. m.', texto: 'Actualicé las actividades de la unidad 3 según lo que acordamos.' } ] },
{ id: 'sm', nombre: 'Santiago Muñoz', rol: 'Colaborador CEEDi', tipo: 'ceedi', hora: '25/09', grupo: 'Anteriores', fecha: '25/09/2026', nuevos: 0, tema: 'Infografía del curso', href: '#/asistentes/aurea',
mensajes: [ { yo: false, hora: '11:05 a. m.', texto: '¿Puedes validar la infografía antes de publicarla?' } ] },
{ id: 'mf', nombre: 'María Fernanda López', rol: 'Docente UAO', tipo: 'prof', hora: '24/09', grupo: 'Anteriores', fecha: '24/09/2026', nuevos: 0, tema: 'Formato del documento', href: '#/exportacion',
mensajes: [ { yo: false, hora: '4:45 p. m.', texto: 'Corregí el formato del documento final.' } ] }
];
chats = chats.concat(this.state.nuevos.map(function (n) {
return { id: n.id, nombre: n.nombre, rol: n.rol, tipo: n.tipo, hora: 'Ahora', grupo: 'Hoy', fecha: 'Hoy', nuevos: 0, tema: 'Conversación nueva', href: '#/mis-trayectorias', mensajes: [] };
}));
var ini = function (n) { var p = n.split(' '); return (p[0].charAt(0) + p[p.length - 1].charAt(0)).toUpperCase(); };
var av = function (tipo, size) { return 'flex: none; width: ' + size + 'px; height: ' + size + 'px; box-sizing: border-box; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; ' + estilos[tipo]; };
var q = (this.state.q || '').toLowerCase();
var leidos = this.state.leidos;
var todos = chats.map(function (c) {
var ms = c.mensajes.concat(self.state.extra[c.id] || []);
var nuevos = (self.state.forzados[c.id]) ? Math.max(1, c.nuevos) : (leidos[c.id] ? 0 : c.nuevos);
return Object.assign({}, c, { ms: ms, nuevos: nuevos });
});
var visibles = todos.filter(function (c) {
if (self.state.eliminadas.indexOf(c.id) >= 0) return false;
if (!c.ms.length && c.id !== self.state.sel) return false;
if (self.state.filtro === 'sinleer' && !(c.nuevos > 0)) return false;
if (!q) return true;
var t = c.nombre + ' ' + c.tema + ' ' + c.ms.map(function (m) { return m.texto; }).join(' ');
return t.toLowerCase().indexOf(q) >= 0;
});
var item = function (c) {
var on = c.id === self.state.sel;
var ultimo = c.ms[c.ms.length - 1];
var hay = c.nuevos > 0 && (!on || !!self.state.forzados[c.id]);
return {
nombre: c.nombre, rol: c.rol, tema: c.tema, hora: c.hora, ini: ini(c.nombre),
resumen: ultimo ? (ultimo.yo ? 'Tú: ' : '') + ultimo.texto : 'Aún no hay mensajes',
resumenEstilo: 'flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; ' + (hay ? 'font-weight: 700' : ''),
nuevos: c.nuevos, hayNuevos: hay, nuevosTexto: c.nuevos + ' mensajes sin leer',
actual: on ? 'true' : 'false',
avatar: av(c.tipo, 40),
fila: 'display: flex; align-items: flex-start; gap: 12px; width: 100%; padding: 12px; border-radius: 12px; font-family: inherit; text-align: left; color: #8A1428; cursor: pointer; ' + (on ? 'background: #FBF5EC; border: 1.5px solid #FF051E' : 'background: #FFFFFF; border: 1.5px solid transparent'),
abrir: function () { var l = Object.assign({}, self.state.leidos); l[c.id] = true; var fz = Object.assign({}, self.state.forzados); fz[c.id] = false; self.setState({ sel: c.id, borrador: '', leidos: l, forzados: fz }); },
sinNuevos: !hay,
leidoLabel: (hay ? 'Marcar como leída' : 'Marcar como no leída') + ' la conversación con ' + c.nombre,
leidoTitulo: hay ? 'Marcar como leída' : 'Marcar como no leída',
alternarLeido: function () {
var l0 = Object.assign({}, self.state.leidos), f0 = Object.assign({}, self.state.forzados);
var l = Object.assign({}, l0), fz = Object.assign({}, f0);
if (hay) { l[c.id] = true; fz[c.id] = false; } else { l[c.id] = false; fz[c.id] = true; }
self.setState({ leidos: l, forzados: fz, avisoConv: hay ? 'Marcaste la conversación como leída.' : 'Marcaste la conversación como no leída.', deshacerAccion: { tipo: 'leido', leidos: l0, forzados: f0 } });
},
pedirEliminar: function () { self.setState({ eliminar: c.id }); }
};
};
var grupos = ['Hoy', 'Anteriores'].map(function (g) {
return { titulo: g, items: visibles.filter(function (c) { return c.grupo === g; }).map(item) };
}).filter(function (g) { return g.items.length; });
var sinLeer = todos.filter(function (c) { return c.nuevos > 0; }).length;
var filtros = [{ id: 'todas', texto: 'Todas' }, { id: 'sinleer', texto: 'Sin leer (' + sinLeer + ')' }].map(function (f) {
var on = self.state.filtro === f.id;
return {
texto: f.texto, on: on ? 'true' : 'false',
estilo: 'min-height: 36px; padding: 0 14px; border-radius: 999px; font-family: inherit; font-size: 14px; cursor: pointer; ' + (on ? 'background: #8A1428; color: #FBF5EC; border: 1.5px solid #8A1428; font-weight: 700' : 'background: #FFFFFF; color: #8A1428; border: 1.5px solid #F1E4D3; font-weight: 600'),
elegir: function () { self.setState({ filtro: f.id }); }
};
});
var actual = todos.filter(function (c) { return c.id === self.state.sel; })[0] || todos[0];
var porEliminar = todos.filter(function (c) { return c.id === self.state.eliminar; })[0];
var prev = null;
var mensajes = actual.ms.map(function (m) {
var yo = !!m.yo;
var muestra = !yo && prev !== 'otro';
prev = yo ? 'yo' : 'otro';
return {
autor: yo ? 'Tú' : actual.nombre,
hora: m.hora, texto: m.texto,
ini: ini(actual.nombre),
muestraAvatar: muestra,
hayAdjunto: !!m.adjunto, adjunto: m.adjunto || '', peso: m.peso || '',
avatar: av(actual.tipo, 36),
fila: 'display: flex; align-items: flex-start; gap: 10px; ' + (yo ? 'justify-content: flex-end' : (muestra ? '' : 'padding-left: 46px')),
columna: 'max-width: 560px; display: flex; flex-direction: column; gap: 4px; ' + (yo ? 'align-items: flex-end' : 'align-items: flex-start'),
burbuja: 'padding: 12px 16px; ' + (yo ? 'background: #8A1428; color: #FBF5EC; border-radius: 16px 4px 16px 16px' : 'background: #FFFFFF; color: #8A1428; border: 1px solid #F1E4D3; border-radius: 4px 16px 16px 16px')
};
});
var estados = {
revision: ['En revisión', 'El CEEDi está revisando tus insumos.', 'background: #FBF5EC; color: #8A1428; border: 1.5px solid #FF836C', '#FF836C'],
cambios: ['Cambios solicitados', 'Ajusta los puntos señalados en la conversación.', 'background: #FFFFFF; color: #AC0B32; border: 1.5px solid #AC0B32', '#AC0B32'],
aprobacion: ['Enviada para aprobación', 'Te avisaremos cuando quede aprobada.', 'background: #FF051E; color: #FFFFFF', '#FFFFFF'],
resuelta: ['Resuelta', 'Esta revisión quedó cerrada.', 'background: #8A1428; color: #FBF5EC', '#FBF5EC']
};
var e = estados[this.state.estado];
return {
hayEliminar: !!porEliminar,
nombreEliminar: porEliminar ? porEliminar.nombre : '',
cancelarEliminar: function () { self.setState({ eliminar: null }); },
confirmarEliminar: function () {
var id = self.state.eliminar, prevSel = self.state.sel;
var elim = self.state.eliminadas.concat([id]);
var nuevoSel = prevSel;
if (prevSel === id) { var resto = visibles.filter(function (c) { return c.id !== id; }); nuevoSel = resto.length ? resto[0].id : prevSel; }
self.setState({ eliminadas: elim, eliminar: null, sel: nuevoSel, avisoConv: 'Eliminaste la conversación con ' + porEliminar.nombre + '.', deshacerAccion: { tipo: 'eliminar', id: id, sel: prevSel } });
},
hayAvisoConv: !!this.state.avisoConv,
avisoConv: this.state.avisoConv,
cerrarAvisoConv: function () { self.setState({ avisoConv: '', deshacerAccion: null }); },
deshacerConv: function () {
var d = self.state.deshacerAccion; if (!d) return;
if (d.tipo === 'eliminar') self.setState({ eliminadas: self.state.eliminadas.filter(function (x) { return x !== d.id; }), sel: d.sel, avisoConv: '', deshacerAccion: null });
else self.setState({ leidos: d.leidos, forzados: d.forzados, avisoConv: '', deshacerAccion: null });
},
q: this.state.q,
buscar: function (ev) { self.setState({ q: ev.target.value }); },
filtros: filtros,
total: todos.length,
grupos: grupos,
sinResultados: grupos.length === 0,
tema: actual.tema, temaHref: actual.href, fechaConv: actual.fecha,
conNombre: actual.nombre, conRol: actual.rol, conIni: ini(actual.nombre), conAvatar: av(actual.tipo, 44),
yoAvatar: 'flex: none; width: 44px; height: 44px; border-radius: 50%; background: #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800',
mensajes: mensajes,
borrador: this.state.borrador,
escribir: function (ev) { self.setState({ borrador: ev.target.value }); },
enviar: function (ev) {
ev.preventDefault();
var t = (self.state.borrador || '').trim();
if (!t) return;
var ex = Object.assign({}, self.state.extra);
ex[self.state.sel] = (ex[self.state.sel] || []).concat([{ yo: true, hora: 'Ahora', texto: t }]);
self.setState({ extra: ex, borrador: '' });
},
totalContactos: todos.length,
contactosPlegados: !!this.state.plegado,
contactosAbiertos: !this.state.plegado,
clasePaneles: 'paneles' + (this.state.plegado ? ' plegado' : ''),
alternarContactos: function () { self.setState({ plegado: !self.state.plegado }); },
crearDesdeRiel: function () { self.setState({ plegado: false, crear: true, errC: '' }); },
contactos: todos.map(function (c) {
var on = c.id === self.state.sel;
return { nombre: c.nombre, rol: c.rol, ini: ini(c.nombre), avatar: av(c.tipo, 40),
estilo: on ? 'background: #FBF5EC; border: 1.5px solid #FF051E' : 'background: #FFFFFF; border: 1.5px solid transparent',
abrir: function () { var l = Object.assign({}, self.state.leidos); l[c.id] = true; self.setState({ sel: c.id, borrador: '', leidos: l }); } };
}),
crearVisible: this.state.crear,
crearAbierto: this.state.crear ? 'true' : 'false',
abrirCrear: function () { self.setState({ crear: !self.state.crear, errC: '' }); },
cerrarCrear: function () { self.setState({ crear: false, errC: '', nNombre: '', nCorreo: '' }); },
nNombre: this.state.nNombre, nCorreo: this.state.nCorreo,
cNombre: function (ev) { self.setState({ nNombre: ev.target.value }); },
cCorreo: function (ev) { self.setState({ nCorreo: ev.target.value }); },
cRol: function (ev) { self.setState({ nRol: ev.target.value }); },
hayErrorContacto: !!this.state.errC, errorContacto: this.state.errC,
guardarContacto: function (ev) {
ev.preventDefault();
var nom = (self.state.nNombre || '').trim();
var cor = (self.state.nCorreo || '').trim().toLowerCase();
if (!nom) { self.setState({ errC: 'Escribe el nombre completo.' }); return; }
if (!/^[^@\s]+@uao\.edu\.co$/.test(cor)) { self.setState({ errC: 'Usa un correo institucional que termine en @uao.edu.co.' }); return; }
var rol = self.state.nRol;
var tipo = rol.indexOf('CEEDi') >= 0 ? 'ceedi' : 'prof';
var id = 'n' + (self.state.nuevos.length + 1);
self.setState({ nuevos: self.state.nuevos.concat([{ id: id, nombre: nom, rol: rol, tipo: tipo }]), crear: false, nNombre: '', nCorreo: '', errC: '', sel: id });
},
estadoNombre: e[0], estadoTexto: e[1],
estadoCaja: 'display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 14px; box-sizing: border-box; ' + e[2],
estadoPunto: 'flex: none; width: 12px; height: 12px; border-radius: 50%; background: ' + e[3],
aprobar: function () { self.setState({ estado: 'aprobacion' }); },
cambios: function () { self.setState({ estado: 'cambios' }); },
resolver: function () { self.setState({ estado: 'resuelta' }); }
};
}
}

export default function Chat(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Comentarios y revisión · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-chat">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="chat" />
        {" "}
        <main className="chat-main">
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px")}>
            {" "}
            <div style={sx("flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
              {" "}
              <h1 style={sx("margin: 0; font-size: 36px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Comentarios y revisión
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.5")}>
                Un espacio para cocrear tu trayectoria con el equipo del CEEDi.
              </p>
              {" "}
            </div>
            {" "}
            <a href="#" className="btn-pri">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
              Nueva conversación
            </a>
            {" "}
          </div>
          {" "}
          <div className={v.clasePaneles}>
            {" "}
            <section className="panel lista" aria-labelledby="t-conv">
              {" "}
              <div className="lista-cab">
                {" "}
                <div style={sx("display: flex; align-items: center; justify-content: space-between; gap: 8px")}>
                  {" "}
                  <h2 id="t-conv" className="tit">
                    Conversaciones
                  </h2>
                  {" "}
                  <span className="cuenta">
                    {v.total}
                  </span>
                  {" "}
                </div>
                {" "}
                <label className="buscar">
                  {" "}
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AC0B32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="6.5"></circle>
                    <path d="M20 20l-4.2-4.2"></path>
                  </svg>
                  {" "}
                  <span className="vh">
                    Buscar conversaciones
                  </span>
                  {" "}
                  <input type="search" value={v.q ?? ''} onChange={v.buscar} placeholder="Buscar por persona o mensaje" />
                  {" "}
                </label>
                {" "}
                <div role="group" aria-label="Filtrar conversaciones" style={sx("display: flex; gap: 6px")}>
                  {" "}
                  {(v.filtros || []).map((f, f_i) => (
                    <Fragment key={f_i}>
                      {" "}
                      <button type="button" onClick={f?.elegir} aria-pressed={f?.on} style={sx(f?.estilo)}>
                        {f?.texto}
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="lista-cuerpo">
                {" "}
                {(v.grupos || []).map((g, g_i) => (
                  <Fragment key={g_i}>
                    {" "}
                    <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                      {" "}
                      <span className="grupo">
                        {g?.titulo}
                      </span>
                      {" "}
                      {(g?.items || []).map((c, c_i) => (
                        <Fragment key={c_i}>
                          {" "}
                          <div className="conv-item">
                            {" "}
                            <button type="button" onClick={c?.abrir} aria-current={c?.actual} style={sx(c?.fila)}>
                              {" "}
                              <span aria-hidden="true" style={sx(c?.avatar)}>
                                {c?.ini}
                              </span>
                              {" "}
                              <span style={sx("flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px")}>
                                {" "}
                                <span style={sx("display: flex; justify-content: space-between; gap: 8px")}>
                                  <span style={sx("font-size: 15px; font-weight: 700")}>
                                    {c?.nombre}
                                  </span>
                                  <span className="conv-hora" style={sx("flex: none; font-size: 12px; color: #A1434F")}>
                                    {c?.hora}
                                  </span>
                                </span>
                                {" "}
                                <span style={sx("font-size: 13px; color: #A1434F")}>
                                  {c?.rol}
                                </span>
                                {" "}
                                <span style={sx("display: flex; align-items: center; gap: 8px")}>
                                  <span style={sx(c?.resumenEstilo)}>
                                    {c?.resumen}
                                  </span>
                                  {" "}
                                  {c?.hayNuevos ? (
                                    <>
                                      <span className="nuevos" aria-label={c?.nuevosTexto}>
                                        {c?.nuevos}
                                      </span>
                                    </>
                                  ) : null}
                                </span>
                                {" "}
                              </span>
                              {" "}
                            </button>
                            {" "}
                            <div className="conv-acc">
                              {" "}
                              <button type="button" className="conv-btn" onClick={c?.alternarLeido} aria-label={c?.leidoLabel} title={c?.leidoTitulo}>
                                {" "}
                                {c?.hayNuevos ? (
                                  <>
                                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>
                                      <path d="M8.5 12l2.5 2.5 4.5-5"></path>
                                    </svg>
                                  </>
                                ) : null}
                                {" "}
                                {c?.sinNuevos ? (
                                  <>
                                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M13 4.2A8 8 0 1 0 21 12"></path>
                                      <path d="M9.4 19.1L4 20l1-4.6"></path>
                                      <circle cx="18.5" cy="5.5" r="2.5" fill="currentColor"></circle>
                                    </svg>
                                  </>
                                ) : null}
                                {" "}
                              </button>
                              {" "}
                              <button type="button" className="conv-btn borrar" onClick={c?.pedirEliminar} aria-haspopup="dialog" aria-label={`Eliminar la conversación con ${c?.nombre ?? ''}`} title="Eliminar conversación">
                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                          </div>
                          {" "}
                        </Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </Fragment>
                ))}
                {" "}
                {v.sinResultados ? (
                  <>
                    {" "}
                    <p style={sx("margin: 0; padding: 16px 8px; font-size: 14px")}>
                      No encontramos conversaciones con ese criterio.
                    </p>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section className="panel conv" aria-labelledby="t-tema">
              {" "}
              <header className="conv-cab">
                {" "}
                <span aria-hidden="true" style={sx(v.conAvatar)}>
                  {v.conIni}
                </span>
                {" "}
                <div style={sx("flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px")}>
                  {" "}
                  <h2 id="t-tema" className="tit">
                    {v.conNombre}
                  </h2>
                  {" "}
                  <span style={sx("font-size: 14px; color: #A1434F")}>
                    {v.conRol}
                  </span>
                  {" "}
                </div>
                {" "}
              </header>
              {" "}
              <div role="log" aria-label={`Mensajes con ${v.conNombre ?? ''}`} className="registro">
                {" "}
                <div className="separador">
                  <span>
                    {v.fechaConv}
                  </span>
                </div>
                {" "}
                {(v.mensajes || []).map((m, m_i) => (
                  <Fragment key={m_i}>
                    {" "}
                    <div style={sx(m?.fila)}>
                      {" "}
                      {m?.muestraAvatar ? (
                        <>
                          <span aria-hidden="true" style={sx(m?.avatar)}>
                            {m?.ini}
                          </span>
                        </>
                      ) : null}
                      {" "}
                      <div style={sx(m?.columna)}>
                        {" "}
                        <span className="meta">
                          <span className="vh">
                            {m?.autor},{" "}
                          </span>
                          {m?.hora}
                        </span>
                        {" "}
                        <div style={sx(m?.burbuja)}>
                          {" "}
                          <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                            {m?.texto}
                          </p>
                          {" "}
                          {m?.hayAdjunto ? (
                            <>
                              {" "}
                              <div className="adjunto">
                                {" "}
                                <span aria-hidden="true" className="sello">
                                  XLSX
                                </span>
                                {" "}
                                <span style={sx("flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column")}>
                                  <span style={sx("font-size: 14px; font-weight: 700; overflow-wrap: anywhere")}>
                                    {m?.adjunto}
                                  </span>
                                  <span style={sx("font-size: 13px; color: #A1434F")}>
                                    {m?.peso}
                                  </span>
                                </span>
                                {" "}
                                <button type="button" className="icono" aria-label={`Descargar ${m?.adjunto ?? ''}`} title="Descargar">
                                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 4v11"></path>
                                    <path d="M7 10l5 5 5-5"></path>
                                    <path d="M5 20h14"></path>
                                  </svg>
                                </button>
                                {" "}
                              </div>
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
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
              <form onSubmit={v.enviar} className="redactar">
                {" "}
                <button type="button" className="icono" aria-label="Adjuntar archivo" title="Adjuntar archivo" style={sx("border: 0; background: transparent")}>
                  {" "}
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6"></path>
                  </svg>
                </button>
                {" "}
                <label style={sx("flex: 1 1 auto; min-width: 0; display: flex")}>
                  {" "}
                  <span className="vh">
                    Mensaje para{" "}{v.conNombre}
                  </span>
                  {" "}
                  <input type="text" value={v.borrador ?? ''} onChange={v.escribir} placeholder={`Escribe un mensaje para ${v.conNombre ?? ''}`} style={sx("flex: 1 1 auto; min-width: 0; min-height: 44px; border: 0; outline: none; background: transparent; font-family: inherit; font-size: 15px; color: #8A1428")} />
                  {" "}
                </label>
                {" "}
                <button type="submit" className="btn-pri" style={sx("min-height: 44px; padding: 0 18px")}>
                  Enviar
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M13 6l6 6-6 6"></path>
                  </svg>
                </button>
                {" "}
              </form>
              {" "}
            </section>
            {" "}
            {v.contactosPlegados ? (
              <>
                {" "}
                <aside className="panel riel" aria-label="Contactos">
                  {" "}
                  <button type="button" className="plegar" onClick={v.alternarContactos} aria-expanded="false" aria-controls="panel-contactos" aria-label="Mostrar contactos" title="Mostrar contactos">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 6l-6 6 6 6"></path>
                    </svg>
                  </button>
                  {" "}
                  <span className="cuenta" aria-label={`${v.totalContactos ?? ''} contactos`}>
                    {v.totalContactos}
                  </span>
                  {" "}
                  {(v.contactos || []).map((p, p_i) => (
                    <Fragment key={p_i}>
                      {" "}
                      <button type="button" className="riel-av" onClick={p?.abrir} aria-label={`Escribir a ${p?.nombre ?? ''}, ${p?.rol ?? ''}`} title={p?.nombre}>
                        <span aria-hidden="true" style={sx(p?.avatar)}>
                          {p?.ini}
                        </span>
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                  <button type="button" className="plegar" onClick={v.crearDesdeRiel} aria-label="Crear contacto" title="Crear contacto">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="8" r="3.5"></circle>
                      <path d="M3.5 20c0-3.6 2.9-6.5 6.5-6.5 1.4 0 2.7.4 3.7 1.2"></path>
                      <path d="M18 14v6"></path>
                      <path d="M15 17h6"></path>
                    </svg>
                  </button>
                  {" "}
                </aside>
                {" "}
              </>
            ) : null}
            {" "}
            {v.contactosAbiertos ? (
              <>
                {" "}
                <aside id="panel-contactos" className="panel estado" aria-labelledby="t-contactos">
                  {" "}
                  <div style={sx("display: flex; align-items: center; gap: 8px")}>
                    {" "}
                    <h2 id="t-contactos" className="tit" style={sx("flex: 1 1 auto")}>
                      Contactos
                    </h2>
                    {" "}
                    <span className="cuenta">
                      {v.totalContactos}
                    </span>
                    {" "}
                    <button type="button" className="plegar" onClick={v.alternarContactos} aria-expanded="true" aria-controls="panel-contactos" aria-label="Ocultar contactos" title="Ocultar contactos">
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6l6 6-6 6"></path>
                      </svg>
                    </button>
                    {" "}
                  </div>
                  {" "}
                  <button type="button" className="btn-sec" onClick={v.abrirCrear} aria-expanded={v.crearAbierto} aria-controls="form-contacto" style={sx("justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="8" r="3.5"></circle>
                      <path d="M3.5 20c0-3.6 2.9-6.5 6.5-6.5 1.4 0 2.7.4 3.7 1.2"></path>
                      <path d="M18 14v6"></path>
                      <path d="M15 17h6"></path>
                    </svg>
                    Crear contacto
                  </button>
                  {" "}
                  {v.crearVisible ? (
                    <>
                      {" "}
                      <form id="form-contacto" className="formc" onSubmit={v.guardarContacto} aria-label="Crear contacto">
                        {" "}
                        <label>
                          Nombre completo
                          <input type="text" value={v.nNombre ?? ''} onChange={v.cNombre} placeholder="Nombre y apellidos" autoComplete="name" />
                        </label>
                        {" "}
                        <label>
                          Correo institucional
                          <input type="email" value={v.nCorreo ?? ''} onChange={v.cCorreo} placeholder="nombre@uao.edu.co" />
                        </label>
                        {" "}
                        <label>
                          Rol
                          <select onChange={v.cRol}>
                            <option>
                              Colaboradora CEEDi
                            </option>
                            <option>
                              Colaborador CEEDi
                            </option>
                            <option>
                              Docente UAO
                            </option>
                          </select>
                        </label>
                        {" "}
                        {v.hayErrorContacto ? (
                          <>
                            <span role="alert" style={sx("font-size: 14px; font-weight: 600; color: #AC0B32")}>
                              {v.errorContacto}
                            </span>
                          </>
                        ) : null}
                        {" "}
                        <div style={sx("display: flex; gap: 8px")}>
                          {" "}
                          <button type="submit" className="btn-pri" style={sx("flex: 1 1 auto; min-height: 44px")}>
                            Guardar
                          </button>
                          {" "}
                          <button type="button" className="btn-txt" onClick={v.cerrarCrear}>
                            Cancelar
                          </button>
                          {" "}
                        </div>
                        {" "}
                      </form>
                      {" "}
                    </>
                  ) : null}
                  {" "}
                  <ul aria-label="Lista de contactos" style={sx("list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; overflow-y: auto")}>
                    {" "}
                    {(v.contactos || []).map((p, p_i) => (
                      <Fragment key={p_i}>
                        {" "}
                        <li>
                          <button type="button" onClick={p?.abrir} aria-label={`Escribir a ${p?.nombre ?? ''}, ${p?.rol ?? ''}`} style={sx(p?.estilo)} className="contacto">
                            {" "}
                            <span aria-hidden="true" style={sx(p?.avatar)}>
                              {p?.ini}
                            </span>
                            {" "}
                            <span style={sx("flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column")}>
                              <span style={sx("font-size: 15px; font-weight: 700")}>
                                {p?.nombre}
                              </span>
                              <span style={sx("font-size: 13px; color: #A1434F")}>
                                {p?.rol}
                              </span>
                            </span>
                            {" "}
                          </button>
                        </li>
                        {" "}
                      </Fragment>
                    ))}
                    {" "}
                  </ul>
                  {" "}
                </aside>
                {" "}
              </>
            ) : null}
            {" "}
          </div>
          {" "}
          {v.hayAvisoConv ? (
            <>
              {" "}
              <div role="status" style={sx("position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); z-index: 40; display: flex; align-items: center; gap: 12px; padding: 12px 12px 12px 18px; border-radius: 14px; background: #8A1428; color: #FBF5EC; font-size: 15px; font-weight: 600; box-shadow: 0 12px 30px rgba(138,20,40,0.25)")}>
                {" "}
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
                {v.avisoConv}{" "}
                <button type="button" onClick={v.deshacerConv} style={sx("min-height: 40px; padding: 0 14px; border-radius: 10px; border: 1.5px solid #FBF5EC; background: transparent; color: #FBF5EC; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer")}>
                  Deshacer
                </button>
                {" "}
                <button type="button" onClick={v.cerrarAvisoConv} aria-label="Cerrar aviso" style={sx("width: 40px; height: 40px; border-radius: 10px; border: 0; background: transparent; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M6 6l12 12"></path>
                    <path d="M18 6L6 18"></path>
                  </svg>
                </button>
                {" "}
              </div>
              {" "}
            </>
          ) : null}
          {" "}
          {v.hayEliminar ? (
            <>
              {" "}
              <div style={sx("position: fixed; inset: 0; z-index: 50; background: rgba(138,20,40,0.45); display: flex; align-items: center; justify-content: center; padding: 16px")}>
                {" "}
                <div role="alertdialog" aria-modal="true" aria-labelledby="t-eliminar" aria-describedby="d-eliminar" style={sx("width: 100%; max-width: 480px; box-sizing: border-box; border-radius: 20px; background: #FFFFFF; padding: 28px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 24px 60px rgba(138,20,40,0.3)")}>
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
                  <h2 id="t-eliminar" style={sx("margin: 0; font-size: 22px; line-height: 1.25; font-weight: 800; color: #8A1428")}>
                    ¿Eliminar esta conversación?
                  </h2>
                  {" "}
                  <p id="d-eliminar" style={sx("margin: 0; font-size: 16px; line-height: 1.55; color: #8A1428")}>
                    La conversación con{" "}
                    <strong>
                      {v.nombreEliminar}
                    </strong>
                    {" "}desaparecerá de tu lista. Las demás personas podrán seguir viéndola.
                  </p>
                  {" "}
                  <div style={sx("display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 10px; margin-top: 4px")}>
                    {" "}
                    <button type="button" onClick={v.cancelarEliminar} autoFocus style={sx("min-height: 48px; padding: 0 20px; border-radius: 12px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer")}>
                      Cancelar
                    </button>
                    {" "}
                    <button type="button" onClick={v.confirmarEliminar} style={sx("min-height: 48px; padding: 0 20px; border-radius: 12px; border: 0; background: #AC0B32; color: #FFFFFF; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer")}>
                      Eliminar
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
        </main>
        {" "}
      </div>
      {" "}
    </div>
  );
}
