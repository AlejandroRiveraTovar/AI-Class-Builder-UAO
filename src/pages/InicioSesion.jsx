import { useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import { iniciarSesion, mensajeDeLogin } from '../lib/auth.jsx';
import { navigate } from '../lib/router.js';
import './InicioSesion.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.state = { correo: '', clave: '', ver: false, intento: false, cargando: false, errorGeneral: '' };
}
renderVals() {
var self = this;
var c = (this.state.correo || '').trim().toLowerCase();
var errC = '';
if (this.state.intento) {
if (!c) errC = 'Escribe tu correo institucional.';
else if (!/^[^@\s]+@uao\.edu\.co$/.test(c)) errC = 'Usa tu correo institucional, que termina en @uao.edu.co.';
}
var errK = this.state.intento && !this.state.clave;
var ver = this.state.ver;
var ingresar = function () {
var cc = (self.state.correo || '').trim().toLowerCase();
if (!(/^[^@\s]+@uao\.edu\.co$/.test(cc) && self.state.clave)) { self.setState({ intento: true }); return; }
if (self.state.cargando) return;
self.setState({ cargando: true, errorGeneral: '' });
iniciarSesion(cc, self.state.clave)
.then(function () { navigate('/mis-trayectorias'); })
.catch(function (err) { self.setState({ errorGeneral: mensajeDeLogin(err) }); })
.then(function () { self.setState({ cargando: false }); });
};
return {
correo: this.state.correo,
clave: this.state.clave,
cambiarCorreo: function (e) { self.setState({ correo: e.target.value }); },
cambiarClave: function (e) { self.setState({ clave: e.target.value }); },
hayErrorCorreo: !!errC,
errorCorreo: errC,
correoInvalido: errC ? 'true' : 'false',
claseCorreo: 'ctrl' + (errC ? ' error' : ''),
hayErrorClave: errK,
claveInvalida: errK ? 'true' : 'false',
claseClave: 'ctrl' + (errK ? ' error' : ''),
tipoClave: ver ? 'text' : 'password',
verClave: ver ? 'true' : 'false',
claveVisible: ver,
claveOculta: !ver,
textoOjo: ver ? 'Ocultar contraseña' : 'Mostrar contraseña',
alternarClave: function () { self.setState({ ver: !self.state.ver }); },
ingresar: ingresar,
teclaClave: function (e) { if (e.key === 'Enter') { e.preventDefault(); ingresar(); } },
cargando: this.state.cargando,
hayErrorGeneral: !!this.state.errorGeneral,
errorGeneral: this.state.errorGeneral
};
}
}

export default function InicioSesion(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Inicio de sesión · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-inicio-sesion">
      {" "}
      {" "}
      <div className="lienzo">
        {" "}
        <div className="foto" role="img" aria-label="Una docente explica en una pantalla interactiva junto a un asistente robótico de IA">
          {" "}
          <div className="foto-arco" aria-hidden="true"></div>
          {" "}
          <div className="foto-txt">
            {" "}
            <strong>
              Diseñemos juntos tu trayectoria con IA
            </strong>
            {" "}
            <span>
              Asistentes que proponen; tu criterio pedagógico decide.
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <main className="panel">
          {" "}
          <div className="caja">
            {" "}
            <a href="#/" className="marca" aria-label="Universidad Autónoma de Occidente, ir a la página de inicio">
              {" "}
              <b aria-hidden="true">
                uao
              </b>
              <i aria-hidden="true"></i>
              <span aria-hidden="true">
                Universidad
                <br />
                Autónoma de
                <br />
                Occidente
              </span>
              {" "}
            </a>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 8px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                AI Class Builder
              </span>
              {" "}
              <h1 style={sx("margin: 0; font-size: 38px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Inicio de sesión
              </h1>
              {" "}
              <p style={sx("margin: 0; font-size: 17px; line-height: 1.5")}>
                Accede a la plataforma de diseño microcurricular con tu cuenta institucional.
              </p>
              {" "}
            </div>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 18px")}>
              {" "}
              <div className="campo">
                {" "}
                <label htmlFor="correo">
                  Correo institucional
                </label>
                {" "}
                <div className={v.claseCorreo}>
                  {" "}
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                  {" "}
                  <input id="correo" type="email" autoComplete="username" placeholder="nombre@uao.edu.co" value={v.correo ?? ''} onChange={v.cambiarCorreo} aria-invalid={v.correoInvalido} aria-describedby="error-correo" />
                  {" "}
                </div>
                {" "}
                {v.hayErrorCorreo ? (
                  <>
                    {" "}
                    <span id="error-correo" className="msj" role="alert">
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 8v5"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                      {v.errorCorreo}
                    </span>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
              <div className="campo">
                {" "}
                <label htmlFor="clave">
                  Contraseña
                </label>
                {" "}
                <div className={v.claseClave}>
                  {" "}
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="10" width="14" height="10" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  {" "}
                  <input id="clave" type={v.tipoClave} autoComplete="current-password" placeholder="Escribe tu contraseña" value={v.clave ?? ''} onChange={v.cambiarClave} onKeyDown={v.teclaClave} aria-invalid={v.claveInvalida} aria-describedby="error-clave" />
                  {" "}
                  <button type="button" className="ojo" onClick={v.alternarClave} aria-pressed={v.verClave} aria-label={v.textoOjo} title={v.textoOjo}>
                    {" "}
                    {v.claveVisible ? (
                      <>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3l18 18"></path>
                          <path d="M10.6 5.6A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-3 3.8"></path>
                          <path d="M6.6 6.6A16 16 0 0 0 2.5 12S6 18.5 12 18.5a9 9 0 0 0 4.2-1"></path>
                          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"></path>
                        </svg>
                      </>
                    ) : null}
                    {" "}
                    {v.claveOculta ? (
                      <>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </>
                    ) : null}
                    {" "}
                  </button>
                  {" "}
                </div>
                {" "}
                {v.hayErrorClave ? (
                  <>
                    {" "}
                    <span id="error-clave" className="msj" role="alert">
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 8v5"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                      Escribe tu contraseña.
                    </span>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
              {v.hayErrorGeneral ? (
                <span className="msj" role="alert">
                  {v.errorGeneral}
                </span>
              ) : null}
              {" "}
              <div className="fila">
                {" "}
                <label className="recordar">
                  <input type="checkbox" />
                  Recordar mi correo
                </label>
                {" "}
                <a href="#" className="enlace">
                  ¿Olvidaste tu contraseña?
                </a>
                {" "}
              </div>
              {" "}
              <button type="button" className="btn btn-pri" onClick={v.ingresar} disabled={v.cargando}>
                {v.cargando ? 'Ingresando…' : 'Iniciar sesión'}{" "}
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </button>
                            {" "}
            </div>
            {" "}
            <div className="pie">
              {" "}
              <span>
                ¿Necesitas ayuda? Escribe al equipo del CEEDi.
              </span>
              {" "}
              <a href="#/politica-privacidad">
                Política de privacidad
              </a>
              {" "}
            </div>
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
