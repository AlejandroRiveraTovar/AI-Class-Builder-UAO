import { useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import './Politica.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
renderVals() { return {}; }
}

export default function Politica(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "Política de privacidad · AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-politica">
      {" "}
      {" "}
      <div id="arriba" style={sx("background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif; min-width: 0")}>
        {" "}
        <header style={sx("background: #FFFFFF; border-bottom: 1px solid #F1E4D3")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px")}>
            {" "}
            <a href="#/" aria-label="AI Class Builder, Universidad Autónoma de Occidente" style={sx("display: flex; align-items: center; gap: 14px; text-decoration: none")}>
              {" "}
              <span style={sx("font-size: 38px; font-weight: 800; letter-spacing: -1.5px; line-height: 1; color: #FF051E")}>
                uao
              </span>
              {" "}
              <span style={sx("width: 1.5px; height: 34px; background: #8A1428")}></span>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 600; line-height: 1.15; color: #8A1428")}>
                AI Class
                <br />
                Builder
              </span>
              {" "}
            </a>
            {" "}
            <a href="#/" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #8A1428; color: #8A1428; font-size: 15px; font-weight: 600; text-decoration: none")}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <path d="M11 6l-6 6 6 6"></path>
              </svg>
              Volver al inicio
            </a>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <section style={sx("max-width: 1200px; margin: 0 auto; padding: 40px 24px 0")}>
          {" "}
          <div style={sx("position: relative; overflow: hidden; border-radius: 22px; background: #FF051E; color: #FFFFFF; padding: 44px clamp(24px, 4vw, 56px) 52px; display: flex; flex-direction: column; gap: 14px")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; right: -80px; bottom: -300px; width: 520px; height: 440px; border-radius: 50%; background: #FBF5EC")}></div>
            {" "}
            <span style={sx("position: relative; align-self: flex-start; padding: 6px 14px; border-radius: 999px; background: #FFFFFF; color: #8A1428; font-size: 14px; font-weight: 700")}>
              Ley 1581 de 2012 · Protección de datos personales
            </span>
            {" "}
            <h1 style={sx("position: relative; margin: 0; font-size: 52px; line-height: 1.05; font-weight: 800; letter-spacing: -1.5px; max-width: 760px")}>
              Política de privacidad
            </h1>
            {" "}
            <p style={sx("position: relative; margin: 0; font-size: 19px; line-height: 1.6; max-width: 700px")}>
              Te contamos qué datos tratamos en AI Class Builder, para qué los usamos y cómo puedes ejercer tus derechos. Porque cuidar tu información también es parte de diseñar con propósito.
            </p>
            {" "}
            <p style={sx("position: relative; margin: 0; font-size: 15px; font-weight: 600")}>
              Última actualización:{" "}
              <span className="marca" style={sx("color: #8A1428")}>
                [FECHA]
              </span>
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <div style={sx("max-width: 1200px; margin: 0 auto; padding: 32px 24px 64px; display: flex; flex-wrap: wrap; gap: 28px")}>
          {" "}
          <nav aria-label="Contenido de la política" className="indice indice-fijo" style={sx("flex: 1 1 260px; min-width: 0; max-width: 100%; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: 20px 14px; display: flex; flex-direction: column; gap: 2px")}>
            {" "}
            <h2 style={sx("margin: 0 0 8px; padding: 0 12px; font-size: 16px; font-weight: 800")}>
              En esta página
            </h2>
            {" "}
            <a href="#resumen">
              <span>
                ·
              </span>
              En pocas palabras
            </a>
            {" "}
            <a href="#responsable">
              <span>
                1
              </span>
              Responsable del tratamiento
            </a>
            {" "}
            <a href="#datos">
              <span>
                2
              </span>
              Datos que tratamos
            </a>
            {" "}
            <a href="#finalidades">
              <span>
                3
              </span>
              Para qué los usamos
            </a>
            {" "}
            <a href="#ia">
              <span>
                4
              </span>
              Uso de inteligencia artificial
            </a>
            {" "}
            <a href="#compartir">
              <span>
                5
              </span>
              Con quién los compartimos
            </a>
            {" "}
            <a href="#derechos">
              <span>
                6
              </span>
              Tus derechos
            </a>
            {" "}
            <a href="#ejercer">
              <span>
                7
              </span>
              Cómo ejercerlos
            </a>
            {" "}
            <a href="#seguridad">
              <span>
                8
              </span>
              Seguridad y conservación
            </a>
            {" "}
            <a href="#cambios">
              <span>
                9
              </span>
              Cambios a esta política
            </a>
            {" "}
          </nav>
          {" "}
          <div style={sx("flex: 999 1 640px; min-width: 0; display: flex; flex-direction: column; gap: 20px")}>
            {" "}
            <section id="resumen" className="sec" aria-labelledby="t-resumen" style={sx("border: 2px solid #FF051E")}>
              {" "}
              <h2 id="t-resumen">
                En pocas palabras
              </h2>
              {" "}
              <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px")}>
                {" "}
                <div className="derecho">
                  <strong>
                    Pedimos solo lo necesario
                  </strong>
                  <span>
                    Tus datos institucionales y la información de las trayectorias que diseñas.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Tú decides
                  </strong>
                  <span>
                    La IA propone y tú conservas el control de cada decisión pedagógica.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    No vendemos tus datos
                  </strong>
                  <span>
                    Solo los compartimos con quienes nos ayudan a prestar el servicio, bajo contrato.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Tus derechos, siempre
                  </strong>
                  <span>
                    Puedes conocer, actualizar, rectificar o pedir la supresión de tus datos.
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="responsable" className="sec" aria-labelledby="t-1">
              {" "}
              <h2 id="t-1">
                <span className="num" aria-hidden="true">
                  1
                </span>
                Responsable del tratamiento
              </h2>
              {" "}
              <p>
                La Universidad Autónoma de Occidente (UAO), con domicilio en Cali, Colombia, es la responsable del tratamiento de los datos personales que se recogen en AI Class Builder.
              </p>
              {" "}
              <ul>
                {" "}
                <li>
                  NIT:{" "}
                  <span className="marca">
                    [NIT]
                  </span>
                </li>
                {" "}
                <li>
                  Dirección:{" "}
                  <span className="marca">
                    [DIRECCIÓN]
                  </span>
                </li>
                {" "}
                <li>
                  Correo de protección de datos:{" "}
                  <span className="marca">
                    [CORREO DE PROTECCIÓN DE DATOS]
                  </span>
                </li>
                {" "}
                <li>
                  Teléfono:{" "}
                  <span className="marca">
                    [TELÉFONO]
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
              <p>
                Esta política complementa la Política de Tratamiento de Datos Personales de la Universidad:{" "}
                <a href="#">
                  [ENLACE A LA POLÍTICA INSTITUCIONAL]
                </a>
                .
              </p>
              {" "}
            </section>
            {" "}
            <section id="datos" className="sec" aria-labelledby="t-2">
              {" "}
              <h2 id="t-2">
                <span className="num" aria-hidden="true">
                  2
                </span>
                Datos que tratamos
              </h2>
              {" "}
              <h3>
                Datos de tu cuenta institucional
              </h3>
              {" "}
              <ul>
                {" "}
                <li>
                  Nombre, correo institucional, rol (Docente UAO o colaborador del CEEDi) y unidad académica.
                </li>
                {" "}
              </ul>
              {" "}
              <h3>
                Datos de perfil que tú decides agregar
              </h3>
              {" "}
              <ul>
                {" "}
                <li>
                  Teléfono, extensión, especialidad y biografía.
                </li>
                {" "}
              </ul>
              {" "}
              <h3>
                Información académica de tus trayectorias
              </h3>
              {" "}
              <ul>
                {" "}
                <li>
                  La contextualización de cada trayectoria: programas, créditos, competencias, resultados de aprendizaje y criterios de evaluación.
                </li>
                {" "}
                <li>
                  Tus conversaciones con los asistentes, las propuestas que aceptas o rechazas y los archivos que adjuntas.
                </li>
                {" "}
                <li>
                  Los comentarios que intercambias con el equipo del CEEDi.
                </li>
                {" "}
              </ul>
              {" "}
              <h3>
                Datos de uso de la plataforma
              </h3>
              {" "}
              <ul>
                {" "}
                <li>
                  Fechas de acceso, historial de versiones y paquetes exportados.
                </li>
                {" "}
              </ul>
              {" "}
              <p>
                No solicitamos datos sensibles. Te pedimos no incluir en tus conversaciones ni en tus archivos datos personales de Estudiantes UAO u otras personas.
              </p>
              {" "}
            </section>
            {" "}
            <section id="finalidades" className="sec" aria-labelledby="t-3">
              {" "}
              <h2 id="t-3">
                <span className="num" aria-hidden="true">
                  3
                </span>
                Para qué los usamos
              </h2>
              {" "}
              <ul>
                {" "}
                <li>
                  Darte acceso seguro a la plataforma con tu cuenta institucional.
                </li>
                {" "}
                <li>
                  Acompañarte en el diseño curricular y microcurricular de tus trayectorias con los 6 asistentes de IA.
                </li>
                {" "}
                <li>
                  Facilitar la revisión y co-creación con el equipo del CEEDi.
                </li>
                {" "}
                <li>
                  Guardar versiones de tu trabajo y permitirte exportarlo.
                </li>
                {" "}
                <li>
                  Mejorar la plataforma y los asistentes, solo si nos das tu autorización.
                </li>
                {" "}
                <li>
                  Generar estadísticas institucionales de uso, siempre de forma agregada.
                </li>
                {" "}
              </ul>
              {" "}
            </section>
            {" "}
            <section id="ia" className="sec" aria-labelledby="t-4">
              {" "}
              <h2 id="t-4">
                <span className="num" aria-hidden="true">
                  4
                </span>
                Uso de inteligencia artificial
              </h2>
              {" "}
              <p>
                Los asistentes de AI Class Builder usan modelos de inteligencia artificial generativa para proponer borradores. Estos son nuestros compromisos:
              </p>
              {" "}
              <ul>
                {" "}
                <li>
                  <strong>
                    Supervisión humana:
                  </strong>
                  {" "}la IA sugiere; tú decides qué aceptar, editar o rechazar.
                </li>
                {" "}
                <li>
                  <strong>
                    Sin decisiones automatizadas sobre ti:
                  </strong>
                  {" "}no usamos la IA para evaluar tu desempeño como docente.
                </li>
                {" "}
                <li>
                  <strong>
                    Uso para mejorar los asistentes:
                  </strong>
                  {" "}solo con la autorización que das en la contextualización de cada trayectoria. Puedes revocarla cuando quieras.
                </li>
                {" "}
                <li>
                  <strong>
                    Proveedor del modelo:
                  </strong>
                  {" "}
                  <span className="marca">
                    [PROVEEDOR DE IA Y CONDICIONES DE USO DE LOS DATOS]
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
            </section>
            {" "}
            <section id="compartir" className="sec" aria-labelledby="t-5">
              {" "}
              <h2 id="t-5">
                <span className="num" aria-hidden="true">
                  5
                </span>
                Con quién los compartimos
              </h2>
              {" "}
              <ul>
                {" "}
                <li>
                  <strong>
                    Equipo del CEEDi:
                  </strong>
                  {" "}para revisar y acompañar el diseño de tus trayectorias.
                </li>
                {" "}
                <li>
                  <strong>
                    Proveedores tecnológicos:
                  </strong>
                  {" "}como encargados del tratamiento, bajo contratos que los obligan a proteger tus datos.
                </li>
                {" "}
                <li>
                  <strong>
                    Autoridades competentes:
                  </strong>
                  {" "}solo cuando la ley lo exige.
                </li>
                {" "}
              </ul>
              {" "}
              <p>
                Si algún proveedor almacena datos fuera de Colombia, la transferencia se hará conforme a la Ley 1581 de 2012:{" "}
                <span className="marca">
                  [PAÍSES Y PROVEEDORES]
                </span>
                .
              </p>
              {" "}
            </section>
            {" "}
            <section id="derechos" className="sec" aria-labelledby="t-6">
              {" "}
              <h2 id="t-6">
                <span className="num" aria-hidden="true">
                  6
                </span>
                Tus derechos
              </h2>
              {" "}
              <p>
                Como titular de tus datos, la Ley 1581 de 2012 te reconoce estos derechos:
              </p>
              {" "}
              <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px")}>
                {" "}
                <div className="derecho">
                  <strong>
                    Conocer, actualizar y rectificar
                  </strong>
                  <span>
                    Tus datos cuando estén incompletos, sean inexactos o induzcan a error.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Pedir prueba de tu autorización
                  </strong>
                  <span>
                    Saber cuándo y cómo autorizaste el tratamiento.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Ser informado
                  </strong>
                  <span>
                    Sobre el uso que damos a tus datos, cuando lo solicites.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Revocar y pedir la supresión
                  </strong>
                  <span>
                    Cuando no se respeten tus derechos o ya no quieras que tratemos tus datos, salvo un deber legal de conservarlos.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Acceder gratis
                  </strong>
                  <span>
                    A tus datos personales objeto de tratamiento.
                  </span>
                </div>
                {" "}
                <div className="derecho">
                  <strong>
                    Presentar quejas
                  </strong>
                  <span>
                    Ante la Superintendencia de Industria y Comercio (SIC), después de agotar el trámite con la Universidad.
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="ejercer" className="sec" aria-labelledby="t-7">
              {" "}
              <h2 id="t-7">
                <span className="num" aria-hidden="true">
                  7
                </span>
                Cómo ejercerlos
              </h2>
              {" "}
              <p>
                Escríbenos a{" "}
                <span className="marca">
                  [CORREO DE PROTECCIÓN DE DATOS]
                </span>
                {" "}con tu nombre, tu correo institucional y una descripción de tu solicitud.
              </p>
              {" "}
              <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px")}>
                {" "}
                <div style={sx("display: flex; gap: 14px; align-items: flex-start; padding: 18px; border-radius: 14px; border: 1.5px solid #F1E4D3")}>
                  {" "}
                  <span aria-hidden="true" style={sx("flex: none; width: 44px; height: 44px; border-radius: 12px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="6.5"></circle>
                      <path d="M20 20l-4.2-4.2"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    <strong style={sx("font-size: 16px")}>
                      Consultas
                    </strong>
                    <span style={sx("font-size: 15px; line-height: 1.5")}>
                      Te respondemos en máximo 10 días hábiles, prorrogables por 5 días hábiles más.
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={sx("display: flex; gap: 14px; align-items: flex-start; padding: 18px; border-radius: 14px; border: 1.5px solid #F1E4D3")}>
                  {" "}
                  <span aria-hidden="true" style={sx("flex: none; width: 44px; height: 44px; border-radius: 12px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("display: flex; flex-direction: column; gap: 4px")}>
                    <strong style={sx("font-size: 16px")}>
                      Reclamos
                    </strong>
                    <span style={sx("font-size: 15px; line-height: 1.5")}>
                      Para corregir, actualizar o suprimir datos: máximo 15 días hábiles, prorrogables por 8 días hábiles más.
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p>
                También puedes actualizar tus datos de perfil en cualquier momento desde{" "}
                <a href="#/perfil">
                  Mi perfil
                </a>
                .
              </p>
              {" "}
            </section>
            {" "}
            <section id="seguridad" className="sec" aria-labelledby="t-8">
              {" "}
              <h2 id="t-8">
                <span className="num" aria-hidden="true">
                  8
                </span>
                Seguridad y conservación
              </h2>
              {" "}
              <ul>
                {" "}
                <li>
                  Accedes con tu cuenta institucional UAO.
                </li>
                {" "}
                <li>
                  Aplicamos medidas técnicas y administrativas para proteger tu información:{" "}
                  <span className="marca">
                    [MEDIDAS DE SEGURIDAD]
                  </span>
                </li>
                {" "}
                <li>
                  Conservamos tus datos mientras tengas una cuenta activa y durante el plazo que exijan las normas:{" "}
                  <span className="marca">
                    [PLAZO DE CONSERVACIÓN]
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
            </section>
            {" "}
            <section id="cambios" className="sec" aria-labelledby="t-9">
              {" "}
              <h2 id="t-9">
                <span className="num" aria-hidden="true">
                  9
                </span>
                Cambios a esta política
              </h2>
              {" "}
              <p>
                Si actualizamos esta política, te avisaremos en la plataforma antes de que los cambios entren en vigor. La fecha de la última actualización aparece al inicio de esta página.
              </p>
              {" "}
            </section>
            {" "}
            <section aria-labelledby="t-dudas" style={sx("position: relative; overflow: hidden; border-radius: 18px; background: #8A1428; color: #FBF5EC; padding: 30px clamp(20px, 3vw, 36px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px")}>
              {" "}
              <div aria-hidden="true" style={sx("position: absolute; right: -60px; bottom: -200px; width: 320px; height: 270px; border-radius: 50%; background: #FF051E")}></div>
              {" "}
              <div style={sx("position: relative; flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 6px")}>
                {" "}
                <h2 id="t-dudas" style={sx("margin: 0; font-size: 22px; font-weight: 800; color: #FFFFFF")}>
                  ¿Tienes dudas sobre tus datos?
                </h2>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Escríbenos y con gusto te ayudamos.
                </p>
                {" "}
              </div>
              {" "}
              <a href="#" style={sx("position: relative; display: inline-flex; align-items: center; gap: 8px; min-height: 48px; padding: 0 20px; border-radius: 12px; background: #FFFFFF; color: #8A1428; font-size: 16px; font-weight: 700; text-decoration: none")}>
                Escribir al equipo de protección de datos
              </a>
              {" "}
            </section>
            {" "}
            <a href="#arriba" style={sx("align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 15px; font-weight: 700")}>
              Volver arriba
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5"></path>
                <path d="M6 11l6-6 6 6"></path>
              </svg>
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <footer style={sx("background: #8A1428; color: #FBF5EC; height: 106px")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 32px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px")}>
            {" "}
            <div style={sx("display: flex; align-items: center; gap: 14px")}>
              {" "}
              <span style={sx("font-size: 34px; font-weight: 800; letter-spacing: -1.5px; line-height: 1; color: #FBF5EC")}>
                uao
              </span>
              {" "}
              <span style={sx("font-size: 14px; line-height: 1.3")}>
                Universidad Autónoma
                <br />
                de Occidente
              </span>
              {" "}
            </div>
            {" "}
            <p style={sx("margin: 0; font-size: 14px; line-height: 1.5")}>
              © 2026 Universidad Autónoma de Occidente · Cali, Colombia · Vigilada MinEducación
            </p>
            {" "}
          </div>
          {" "}
        </footer>
        {" "}
      </div>
      {" "}
    </div>
  );
}
