import { useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import Sidebar from '../components/Sidebar.jsx';
import './Perfil.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
constructor(props) {
super(props);
this.base = {
nombre: 'Juan Martínez',
telefono: '+57 300 123 4567',
extension: '1024',
unidad: 'Software, Datos y Experiencias Digitales Interactivas',
especialidad: 'Inteligencia artificial',
bio: 'Docente de la Facultad de Ingeniería, con experiencia en diseño de experiencias interactivas e inteligencia artificial aplicada a la educación.'
};
this.state = Object.assign({}, this.base, { guardado: false });
}
renderVals() {
var self = this;
var s = this.state;
var claves = ['nombre', 'telefono', 'extension', 'unidad', 'especialidad', 'bio'];
var cambios = claves.some(function (k) { return s[k] !== self.base[k]; });
var set = function (k) { return function (e) { var o = { guardado: false }; o[k] = e.target.value; self.setState(o); }; };
var partes = s.nombre.trim().split(/\s+/);
return {
nombre: s.nombre,
nombreCorto: partes.length > 1 ? partes[0] + ' ' + partes[1] : s.nombre,
setNombre: set('nombre'),
telefono: s.telefono, setTelefono: set('telefono'),
extension: s.extension, setExtension: set('extension'),
unidad: s.unidad, setUnidad: set('unidad'),
especialidad: s.especialidad, setEspecialidad: set('especialidad'),
bio: s.bio, setBio: set('bio'), lenBio: s.bio.length,
sinCambios: !cambios,
pendiente: cambios,
guardado: s.guardado,
guardar: function (e) {
e.preventDefault();
claves.forEach(function (k) { self.base[k] = self.state[k]; });
self.setState({ guardado: true });
},
descartar: function () { self.setState(Object.assign({}, self.base, { guardado: false })); },
botonEstilo: 'display: inline-flex; align-items: center; gap: 8px; min-height: 50px; padding: 0 22px; border-radius: 12px; border: 0; font-family: inherit; font-size: 16px; font-weight: 700; ' + (cambios ? 'background: #FF051E; color: #FFFFFF; cursor: pointer' : 'background: #F1E4D3; color: #A1434F; cursor: not-allowed')
};
}

}

export default function Perfil(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Mi perfil · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-perfil">
      {" "}
      {" "}
      <div style={sx("min-height: 100vh; display: flex; flex-wrap: wrap; background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif")}>
        {" "}
        {" "}
        <Sidebar active="perfil" />
        {" "}
        <main style={sx("flex: 999 1 560px; min-width: 0; box-sizing: border-box; padding: 32px clamp(16px, 4vw, 48px) 40px; display: flex; flex-direction: column; gap: 24px")}>
          {" "}
          <div style={sx("display: flex; flex-direction: column; gap: 6px")}>
            {" "}
            <span style={sx("font-size: 14px; font-weight: 700; color: #FF051E")}>
              Docente UAO
            </span>
            {" "}
            <h1 style={sx("margin: 0; font-size: 36px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
              Mi perfil
            </h1>
            {" "}
            <p style={sx("margin: 0; font-size: 16px; line-height: 1.5")}>
              Actualiza tus datos y revisa tu avance en AI Class Builder.
            </p>
            {" "}
          </div>
          {" "}
          <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-start; gap: 24px")}>
            {" "}
            <form data-guia="datos" onSubmit={v.guardar} style={sx("flex: 2 1 640px; min-width: 0; background: #FFFFFF; border-radius: 18px; padding: 28px clamp(18px, 3vw, 32px); display: flex; flex-direction: column; gap: 22px")}>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 20px; padding-bottom: 22px; border-bottom: 1px solid #F1E4D3")}>
                {" "}
                <div style={sx("position: relative; flex: none")}>
                  {" "}
                  <span aria-hidden="true" style={sx("width: 88px; height: 88px; border-radius: 50%; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 800")}>
                    JM
                  </span>
                  {" "}
                  <button type="button" aria-label="Cambiar foto de perfil" title="Cambiar foto" style={sx("position: absolute; right: -6px; bottom: -4px; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #FFFFFF; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center; cursor: pointer")}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h3l2-3h6l2 3h3v11H4z"></path>
                      <circle cx="12" cy="13" r="3.5"></circle>
                    </svg>
                  </button>
                  {" "}
                </div>
                {" "}
                <div style={sx("flex: 1 1 260px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
                  {" "}
                  <h2 style={sx("margin: 0; font-size: 24px; font-weight: 800")}>
                    {v.nombre}
                  </h2>
                  {" "}
                  <span style={sx("font-size: 15px")}>
                    juan.martinez@uao.edu.co
                  </span>
                  {" "}
                  <span style={sx("display: flex; flex-wrap: wrap; gap: 8px; padding-top: 2px")}>
                    {" "}
                    <span style={sx("display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: #8A1428; color: #FBF5EC; font-size: 13px; font-weight: 700")}>
                      <span aria-hidden="true" style={sx("width: 8px; height: 8px; border-radius: 50%; background: #FF836C")}></span>
                      Cuenta activa
                    </span>
                    {" "}
                    <span style={sx("display: inline-flex; align-items: center; padding: 4px 12px; border-radius: 999px; background: #FBF5EC; border: 1px solid #F1E4D3; font-size: 13px; font-weight: 700")}>
                      4 trayectorias
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px")}>
                {" "}
                <label className="campo">
                  {" "}
                  <span className="etq">
                    Nombre completo
                  </span>
                  {" "}
                  <input className="ctrl" type="text" value={v.nombre ?? ''} onChange={v.setNombre} autoComplete="name" />
                  {" "}
                </label>
                {" "}
                <div className="campo">
                  {" "}
                  <span className="etq" id="l-correo">
                    Correo institucional
                  </span>
                  {" "}
                  <div aria-labelledby="l-correo" style={sx("display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 48px; padding: 0 14px; box-sizing: border-box; border-radius: 12px; background: #FBF5EC; border: 1.5px solid #F1E4D3; font-size: 15px")}>
                    juan.martinez@uao.edu.co
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AC0B32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                      <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                    </svg>
                  </div>
                  {" "}
                  <span className="ayuda">
                    Lo gestiona tu cuenta institucional UAO; no se puede editar aquí.
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={sx("display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 3fr); gap: 20px")}>
                {" "}
                <label className="campo">
                  {" "}
                  <span className="etq">
                    Teléfono
                  </span>
                  {" "}
                  <input className="ctrl" type="tel" value={v.telefono ?? ''} onChange={v.setTelefono} autoComplete="tel" />
                  {" "}
                </label>
                {" "}
                <label className="campo">
                  {" "}
                  <span className="etq">
                    Extensión
                  </span>
                  {" "}
                  <input className="ctrl" type="text" inputMode="numeric" value={v.extension ?? ''} onChange={v.setExtension} />
                  {" "}
                </label>
                {" "}
                <label className="campo">
                  {" "}
                  <span className="etq">
                    Unidad académica
                  </span>
                  {" "}
                  <select className="ctrl" value={v.unidad ?? ''} onChange={v.setUnidad} style={sx("cursor: pointer")}>
                    <option value="Software, Datos y Experiencias Digitales Interactivas">
                      Software, Datos y Experiencias Digitales Interactivas
                    </option>
                    <option value="Facultad de Ingeniería y Ciencias Básicas">
                      Facultad de Ingeniería y Ciencias Básicas
                    </option>
                    <option value="Facultad de Comunicación y Ciencias Sociales">
                      Facultad de Comunicación y Ciencias Sociales
                    </option>
                  </select>
                  {" "}
                </label>
                {" "}
              </div>
              {" "}
              <label className="campo">
                {" "}
                <span className="etq">
                  Especialidad
                </span>
                {" "}
                <input className="ctrl" type="text" value={v.especialidad ?? ''} onChange={v.setEspecialidad} />
                {" "}
              </label>
              {" "}
              <label className="campo">
                {" "}
                <span className="etq">
                  Biografía
                </span>
                {" "}
                <textarea className="ctrl" rows="3" maxLength="500" value={v.bio ?? ''} onChange={v.setBio} style={sx("min-height: 96px")} />
                {" "}
                <span style={sx("display: flex; justify-content: space-between; gap: 12px")}>
                  <span className="ayuda">
                    Los asistentes la usan para adaptar sus propuestas a tu experiencia.
                  </span>
                  <span className="ayuda" style={sx("flex: none")}>
                    {v.lenBio}{" "}/ 500 caracteres
                  </span>
                </span>
                {" "}
              </label>
              {" "}
              <div style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid #F1E4D3")}>
                {" "}
                <button type="submit" disabled={!!v.sinCambios} style={sx(v.botonEstilo)}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                  Guardar cambios
                </button>
                {" "}
                <button type="button" onClick={v.descartar} disabled={!!v.sinCambios} style={sx("min-height: 50px; padding: 0 20px; border-radius: 12px; border: 1.5px solid #8A1428; background: #FFFFFF; color: #8A1428; font-family: inherit; font-size: 16px; font-weight: 600; cursor: pointer")}>
                  Descartar cambios
                </button>
                {" "}
                {v.guardado ? (
                  <>
                    {" "}
                    <span role="status" style={sx("display: inline-flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF051E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-10"></path>
                      </svg>
                      Guardamos tus cambios.
                    </span>
                    {" "}
                  </>
                ) : null}
                {" "}
                {v.pendiente ? (
                  <>
                    {" "}
                    <span role="status" style={sx("font-size: 14px; color: #A1434F")}>
                      Tienes cambios sin guardar.
                    </span>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
            </form>
            {" "}
            <div style={sx("flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; gap: 24px")}>
              {" "}
              <section data-guia="avance" aria-labelledby="t-avance" style={sx("background: #FFFFFF; border-radius: 18px; padding: 26px; display: flex; flex-direction: column; gap: 18px")}>
                {" "}
                <div style={sx("display: flex; flex-direction: column; gap: 2px")}>
                  {" "}
                  <h2 id="t-avance" style={sx("margin: 0; font-size: 20px; font-weight: 800")}>
                    Tu avance
                  </h2>
                  {" "}
                  <span style={sx("font-size: 14px")}>
                    Trayectorias en la plataforma
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={sx("display: flex; align-items: baseline; gap: 10px")}>
                  <span style={sx("font-size: 56px; line-height: 1; font-weight: 800; letter-spacing: -1.5px")}>
                    4
                  </span>
                  <span style={sx("font-size: 16px; font-weight: 600")}>
                    trayectorias
                  </span>
                </div>
                {" "}
                <div role="img" aria-label="1 completada, 2 en progreso y 1 pendiente" style={sx("display: flex; gap: 3px; height: 14px")}>
                  {" "}
                  <span style={sx("flex: 1; border-radius: 999px 0 0 999px; background: #8A1428")}></span>
                  {" "}
                  <span style={sx("flex: 2; background: #FF836C")}></span>
                  {" "}
                  <span style={sx("flex: 1; border-radius: 0 999px 999px 0; background: #FFFFFF; border: 1.5px solid #AC0B32; box-sizing: border-box")}></span>
                  {" "}
                </div>
                {" "}
                <ul style={sx("list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px")}>
                  {" "}
                  <li className="dato">
                    <span style={sx("display: inline-flex; align-items: center; gap: 10px")}>
                      <span aria-hidden="true" style={sx("width: 12px; height: 12px; border-radius: 50%; background: #8A1428")}></span>
                      Completadas
                    </span>
                    <strong>
                      1
                    </strong>
                  </li>
                  {" "}
                  <li className="dato">
                    <span style={sx("display: inline-flex; align-items: center; gap: 10px")}>
                      <span aria-hidden="true" style={sx("width: 12px; height: 12px; border-radius: 50%; background: #FF836C")}></span>
                      En progreso
                    </span>
                    <strong>
                      2
                    </strong>
                  </li>
                  {" "}
                  <li className="dato">
                    <span style={sx("display: inline-flex; align-items: center; gap: 10px")}>
                      <span aria-hidden="true" style={sx("width: 12px; height: 12px; box-sizing: border-box; border-radius: 50%; border: 2px solid #AC0B32")}></span>
                      Pendientes
                    </span>
                    <strong>
                      1
                    </strong>
                  </li>
                  {" "}
                </ul>
                {" "}
                <ul style={sx("list-style: none; margin: 0; padding: 16px 0 0; border-top: 1px solid #F1E4D3; display: flex; flex-direction: column; gap: 10px")}>
                  {" "}
                  <li className="dato">
                    <span style={sx("display: inline-flex; align-items: center; gap: 10px")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF051E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12a8 8 0 1 0 2.4-5.7"></path>
                        <path d="M4 4v4h4"></path>
                        <path d="M12 8v4l3 2"></path>
                      </svg>
                      Última actividad
                    </span>
                    <strong>
                      28/09/2026
                    </strong>
                  </li>
                  {" "}
                  <li className="dato">
                    <span style={sx("display: inline-flex; align-items: center; gap: 10px")}>
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF051E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v11"></path>
                        <path d="M7 10l5 5 5-5"></path>
                        <path d="M5 20h14"></path>
                      </svg>
                      Paquetes exportados
                    </span>
                    <strong>
                      3
                    </strong>
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="#/mis-trayectorias" style={sx("display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 15px; font-weight: 700")}>
                  <span>
                    Ver mis trayectorias
                  </span>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M13 6l6 6-6 6"></path>
                  </svg>
                </a>
                {" "}
              </section>
              {" "}
              <section data-guia="seguir" aria-labelledby="t-seguir" style={sx("position: relative; overflow: hidden; border-radius: 18px; background: #FF051E; color: #FFFFFF; padding: 24px 24px 80px; display: flex; flex-direction: column; gap: 10px")}>
                {" "}
                <div aria-hidden="true" style={sx("position: absolute; left: 50%; bottom: -230px; width: 340px; height: 290px; margin-left: -170px; border-radius: 50%; background: #FBF5EC")}></div>
                {" "}
                <h2 id="t-seguir" style={sx("position: relative; margin: 0; font-size: 18px; font-weight: 800")}>
                  Continúa donde quedaste
                </h2>
                {" "}
                <p style={sx("position: relative; margin: 0; font-size: 15px; line-height: 1.5")}>
                  <strong>
                    Diseño Web
                  </strong>
                  {" "}· Diseño curricular UAO, etapa 3 de 6.
                </p>
                {" "}
                <a href="#/asistentes/diseno-curricular" style={sx("position: relative; align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 16px; border-radius: 10px; background: #FFFFFF; color: #8A1428; font-size: 15px; font-weight: 700; text-decoration: none")}>
                  Continuar
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M13 6l6 6-6 6"></path>
                  </svg>
                </a>
                {" "}
              </section>
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
