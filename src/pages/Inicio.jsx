import { useEffect } from 'react';
import { PageLogic, usePageLogic } from '../lib/pageLogic.js';
import { sx } from '../lib/sx.js';
import './Inicio.css';

// Lógica y datos de la página (estado local, sin servidor).
class Logic extends PageLogic {
renderVals() {
return {};
}
}

export default function Inicio(props) {
  const v = usePageLogic(Logic, props);
  useEffect(() => {
    document.title = "AI Class Builder UAO";
  }, []);

  return (
    <div className="pg-inicio">
      {" "}
      {" "}
      <div style={sx("background: #FBF5EC; color: #8A1428; font-family: 'DM Sans', sans-serif; min-width: 0")}>
        {" "}
        <header style={sx("background: #FFFFFF; border-bottom: 1px solid #F1E4D3")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px")}>
            {" "}
            <a href="#inicio" aria-label="AI Class Builder, Universidad Autónoma de Occidente" style={sx("display: flex; align-items: center; gap: 14px; text-decoration: none")}>
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
            <nav aria-label="Principal" style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 28px; font-size: 15px")}>
              <a href="#ingresar" style={sx("display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0px 20px; border-radius: 10px; background: rgb(255, 5, 30); color: rgb(255, 255, 255); font-weight: 700; text-decoration: none")}>
                Comenzar
              </a>
            </nav>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <section id="inicio" style={sx("max-width: 1200px; margin: 0 auto; padding: 88px 24px 96px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 64px")}>
          {" "}
          <div style={sx("flex: 0 1 860px; min-width: 0; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px")}>
            {" "}
            <span style={sx("align-self: center; padding: 6px 14px; border-radius: 999px; background: #FFFFFF; border: 1px solid #F1E4D3; font-size: 14px; font-weight: 600; color: #AC0B32")}>
              Para docentes UAO y colaboradores CEEDi
            </span>
            {" "}
            <h1 style={sx("margin: 0; font-size: 60px; line-height: 1.04; font-weight: 800; letter-spacing: -1.5px; color: #8A1428")}>
              Diseñemos juntos tu trayectoria con{" "}
              <span style={sx("color: #FF051E")}>
                IA generativa
              </span>
            </h1>
            {" "}
            <p style={sx("margin: 0; font-size: 19px; line-height: 1.6; max-width: 680px")}>
              Como Comunidad UAO, transformamos la forma de planear nuestros cursos. AI Class Builder te acompaña con 6 asistentes formados en el modelo pedagógico UAO para construir el diseño microcurricular de tu trayectoria, paso a paso y con tu criterio al centro.
            </p>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; padding-top: 8px")}>
              {" "}
              <a href="#/iniciar-sesion" style={sx("display: inline-flex; align-items: center; gap: 10px; min-height: 52px; padding: 0 26px; border-radius: 12px; background: #FF051E; color: #FFFFFF; font-size: 17px; font-weight: 700; text-decoration: none")}>
                {" "}
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
                  <path d="M10 17l5-5-5-5"></path>
                  <path d="M15 12H4"></path>
                </svg>
                {" "}Iniciar sesión
              </a>
              {" "}
              <a href="#como-funciona" style={sx("display: inline-flex; align-items: center; min-height: 52px; padding: 0 26px; border-radius: 12px; border: 1.5px solid #8A1428; color: #8A1428; font-size: 17px; font-weight: 600; text-decoration: none")}>
                Conoce cómo funciona
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="que-hacemos" style={sx("border-top: 1px solid #F1E4D3")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-direction: column; gap: 56px")}>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; align-items: flex-end; gap: 32px 64px")}>
              {" "}
              <div style={sx("flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 12px")}>
                {" "}
                <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                  ¿Qué hacemos?
                </span>
                {" "}
                <h2 style={sx("margin: 0; font-size: 42px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                  De una idea a una{" "}
                  <span style={sx("color: #FF051E")}>
                    actividad de aprendizaje
                  </span>
                </h2>
                {" "}
              </div>
              {" "}
              <p style={sx("flex: 1 1 420px; min-width: 0; margin: 0; font-size: 18px; line-height: 1.6")}>
                Diseñar una actividad de aprendizaje implica tomar decisiones sobre objetivos, contenidos, estrategias, recursos y evaluación. AI Class Builder organiza ese proceso y pone a tu disposición asistentes de IA especializados que te acompañan en cada etapa.
              </p>
              {" "}
            </div>
            {" "}
            <ol style={sx("list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px")}>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 16px")}>
                {" "}
                <div style={sx("display: flex; align-items: center; gap: 12px")}>
                  {" "}
                  <span style={sx("flex: none; width: 64px; height: 64px; border-radius: 50%; background: #FFFFFF; border: 2px solid #FF051E; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6"></path>
                      <path d="M10 21h4"></path>
                      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"></path>
                    </svg>
                  </span>
                  {" "}
                  <span aria-hidden="true" style={sx("flex: 1 1 auto; height: 2px; background: #FF836C")}></span>
                  {" "}
                </div>
                {" "}
                <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                  Etapa 1
                </span>
                {" "}
                <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                  Define tu intención
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Parte de lo que quieres lograr con tus Estudiantes UAO y establece el propósito de la actividad.
                </p>
                {" "}
              </li>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 16px")}>
                {" "}
                <div style={sx("display: flex; align-items: center; gap: 12px")}>
                  {" "}
                  <span style={sx("flex: none; width: 64px; height: 64px; border-radius: 50%; background: #FFFFFF; border: 2px solid #FF051E; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 20 12z"></path>
                      <path d="M12 8.5l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9z"></path>
                    </svg>
                  </span>
                  {" "}
                  <span aria-hidden="true" style={sx("flex: 1 1 auto; height: 2px; background: #FF836C")}></span>
                  {" "}
                </div>
                {" "}
                <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                  Etapa 2
                </span>
                {" "}
                <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                  Construye con apoyo de la IA
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Usa asistentes especializados para generar ideas, estructurar contenidos, proponer actividades y explorar alternativas.
                </p>
                {" "}
              </li>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 16px")}>
                {" "}
                <div style={sx("display: flex; align-items: center; gap: 12px")}>
                  {" "}
                  <span style={sx("flex: none; width: 64px; height: 64px; border-radius: 50%; background: #FFFFFF; border: 2px solid #FF051E; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 7h10"></path>
                      <path d="M18 7h2"></path>
                      <circle cx="16" cy="7" r="2"></circle>
                      <path d="M4 17h4"></path>
                      <path d="M12 17h8"></path>
                      <circle cx="10" cy="17" r="2"></circle>
                    </svg>
                  </span>
                  {" "}
                  <span aria-hidden="true" style={sx("flex: 1 1 auto; height: 2px; background: #FF836C")}></span>
                  {" "}
                </div>
                {" "}
                <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                  Etapa 3
                </span>
                {" "}
                <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                  Revisa y adapta
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Analiza las propuestas, ajusta lo necesario y toma las decisiones pedagógicas según tu contexto.
                </p>
                {" "}
              </li>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 16px")}>
                {" "}
                <div style={sx("display: flex; align-items: center; gap: 12px")}>
                  {" "}
                  <span style={sx("flex: none; width: 64px; height: 64px; border-radius: 50%; background: #FF051E; border: 2px solid #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="4" width="12" height="17" rx="2"></rect>
                      <path d="M9 4V3h6v1"></path>
                      <path d="M9.5 13l2 2 3.5-4"></path>
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                  Etapa 4
                </span>
                {" "}
                <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                  Obtén una propuesta estructurada
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Organiza los resultados en una experiencia de aprendizaje coherente, lista para tu curso.
                </p>
                {" "}
              </li>
              {" "}
            </ol>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="como-funciona" style={sx("background: #FFFFFF")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-direction: column; gap: 48px")}>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 12px; max-width: 720px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                Cómo funciona
              </span>
              {" "}
              <h2 style={sx("margin: 0; font-size: 42px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
                Cuatro pasos para co-crear tu curso
              </h2>
              {" "}
              <p style={sx("margin: 0; font-size: 18px; line-height: 1.6")}>
                Un proceso de co-diseño pedagógico en el que tú decides en cada paso.
              </p>
              {" "}
            </div>
            {" "}
            <ol style={sx("list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px")}>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                {" "}
                <div style={sx("display: flex; align-items: center; justify-content: space-between")}>
                  {" "}
                  <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
                      <path d="M14 3v5h5"></path>
                      <path d="M9 13h6"></path>
                      <path d="M9 17h4"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 44px; font-weight: 800; color: #FF836C; line-height: 1")}>
                    1
                  </span>
                  {" "}
                </div>
                {" "}
                <h3 style={sx("margin: 0; font-size: 20px; font-weight: 700")}>
                  Contextualiza tu curso
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Carga los datos base: competencias y resultados de aprendizaje.
                </p>
                {" "}
              </li>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                {" "}
                <div style={sx("display: flex; align-items: center; justify-content: space-between")}>
                  {" "}
                  <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path>
                      <path d="M9 11h6"></path>
                      <path d="M9 14h4"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 44px; font-weight: 800; color: #FF836C; line-height: 1")}>
                    2
                  </span>
                  {" "}
                </div>
                {" "}
                <h3 style={sx("margin: 0; font-size: 20px; font-weight: 700")}>
                  Conversa con los asistentes
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Avanza en un diálogo guiado, tipo chat, con 6 asistentes especializados.
                </p>
                {" "}
              </li>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                {" "}
                <div style={sx("display: flex; align-items: center; justify-content: space-between")}>
                  {" "}
                  <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 44px; font-weight: 800; color: #FF836C; line-height: 1")}>
                    3
                  </span>
                  {" "}
                </div>
                {" "}
                <h3 style={sx("margin: 0; font-size: 20px; font-weight: 700")}>
                  Decide en cada propuesta
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Acepta, edita, rechaza o regenera cada propuesta de la IA.
                </p>
                {" "}
              </li>
              {" "}
              <li style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                {" "}
                <div style={sx("display: flex; align-items: center; justify-content: space-between")}>
                  {" "}
                  <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11"></path>
                      <path d="M7 10l5 5 5-5"></path>
                      <path d="M5 20h14"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 44px; font-weight: 800; color: #FF836C; line-height: 1")}>
                    4
                  </span>
                  {" "}
                </div>
                {" "}
                <h3 style={sx("margin: 0; font-size: 20px; font-weight: 700")}>
                  Consolida y exporta
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                  Descarga matrices y paquetes completos en Excel, PDF o Word.
                </p>
                {" "}
              </li>
              {" "}
            </ol>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="asistentes" style={sx("max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-direction: column; gap: 48px")}>
          {" "}
          <div style={sx("display: flex; flex-direction: column; gap: 12px; max-width: 720px")}>
            {" "}
            <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
              Asistentes IA
            </span>
            {" "}
            <h2 style={sx("margin: 0; font-size: 42px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
              Conoce a nuestros asistentes
            </h2>
            {" "}
            <p style={sx("margin: 0; font-size: 18px; line-height: 1.6")}>
              Cada asistente trabaja con el modelo pedagógico UAO. Úsalos en el orden que necesites.
            </p>
            {" "}
          </div>
          {" "}
          <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px")}>
            {" "}
            <article style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FFFFFF")}>
              {" "}
              <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11l8-7 8 7"></path>
                  <path d="M6 10v10h12V10"></path>
                  <path d="M10 20v-5h4v5"></path>
                </svg>
              </span>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 600; color: #AC0B32")}>
                Asistente 1
              </span>
              {" "}
              <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                Diseño curricular UAO
              </h3>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.55; flex-grow: 1")}>
                Competencias, niveles de desempeño y resultados de aprendizaje.
              </p>
              {" "}
            </article>
            {" "}
            <article style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FFFFFF")}>
              {" "}
              <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5"></circle>
                  <path d="M3 20c0-3.3 2.7-6 6-6"></path>
                  <path d="M14 20l1-3 4.5-4.5 2 2L17 19z"></path>
                </svg>
              </span>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 600; color: #AC0B32")}>
                Asistente 2
              </span>
              {" "}
              <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                Diseño microcurricular UAO
              </h3>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.55; flex-grow: 1")}>
                Matriz de alineación de actividades por semanas.
              </p>
              {" "}
            </article>
            {" "}
            <article style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FFFFFF")}>
              {" "}
              <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF836C; color: #8A1428; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M4 10h16"></path>
                  <path d="M10 10v10"></path>
                </svg>
              </span>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 600; color: #AC0B32")}>
                Asistente 3
              </span>
              {" "}
              <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                Diseña UAO
              </h3>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.55; flex-grow: 1")}>
                Actividades de aprendizaje con el modelo Canvas.
              </p>
              {" "}
            </article>
            {" "}
            <article style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FFFFFF")}>
              {" "}
              <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #AC0B32; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8"></circle>
                  <circle cx="12" cy="12" r="4.5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </span>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 600; color: #AC0B32")}>
                Asistente 4
              </span>
              {" "}
              <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                Instrumentos de evaluación UAO
              </h3>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.55; flex-grow: 1")}>
                Rúbricas analíticas (escala de 0 a 5) y cuestionarios.
              </p>
              {" "}
            </article>
            {" "}
            <article style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FFFFFF")}>
              {" "}
              <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="5" width="16" height="14" rx="2"></rect>
                  <circle cx="9" cy="10" r="1.5"></circle>
                  <path d="M20 16l-5-5-8 8"></path>
                </svg>
              </span>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 600; color: #AC0B32")}>
                Asistente 5
              </span>
              {" "}
              <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                AUREA
              </h3>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.55; flex-grow: 1")}>
                Imágenes, banners y portadas con la identidad UAO.
              </p>
              {" "}
            </article>
            {" "}
            <article style={sx("display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 18px; background: #FFFFFF")}>
              {" "}
              <span style={sx("width: 52px; height: 52px; border-radius: 14px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M7 6l2 4"></path>
                  <path d="M12 6l2 4"></path>
                  <path d="M17 6l2 4"></path>
                </svg>
              </span>
              {" "}
              <span style={sx("font-size: 13px; font-weight: 600; color: #AC0B32")}>
                Asistente 6
              </span>
              {" "}
              <h3 style={sx("margin: -8px 0 0; font-size: 21px; font-weight: 700")}>
                Guiones técnicos audiovisuales
              </h3>
              {" "}
              <p style={sx("margin: 0; font-size: 16px; line-height: 1.55; flex-grow: 1")}>
                Del guion literario al guion técnico, por escenas y planos.
              </p>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="por-que" style={sx("background: #FFFFFF")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-direction: column; gap: 48px")}>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 12px; max-width: 720px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
                ¿Por qué usar la plataforma?
              </span>
              {" "}
              <h2 style={sx("margin: 0; font-size: 42px; line-height: 1.1; font-weight: 800; letter-spacing: -1px; width: 837px")}>
                Seis razones para diseñar con AI Class Builder
              </h2>
              {" "}
            </div>
            {" "}
            <div style={sx("display: flex; flex-wrap: wrap; gap: 24px")}>
              {" "}
              <article style={sx("flex: 1 1 360px; min-width: 0; position: relative; overflow: hidden; border-radius: 22px; background: #FF051E; color: #FFFFFF; padding: 40px 36px 150px; display: flex; flex-direction: column; gap: 16px")}>
                {" "}
                <div aria-hidden="true" style={sx("position: absolute; left: 50%; bottom: -330px; width: 460px; height: 420px; margin-left: -230px; border-radius: 50%; background: #FFFFFF")}></div>
                {" "}
                <span style={sx("position: relative; width: 56px; height: 56px; border-radius: 14px; background: #FFFFFF; color: #FF051E; display: inline-flex; align-items: center; justify-content: center")}>
                  {" "}
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="7" r="3.5"></circle>
                    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path>
                    <path d="M18 4l.8 1.7 1.7.8-1.7.8L18 9l-.8-1.7-1.7-.8 1.7-.8z"></path>
                  </svg>
                </span>
                {" "}
                <span style={sx("position: relative; font-size: 14px; font-weight: 700")}>
                  Razón 1
                </span>
                {" "}
                <h3 style={sx("position: relative; margin: -8px 0 0; font-size: 28px; line-height: 1.15; font-weight: 800")}>
                  La IA al servicio de tu experiencia docente
                </h3>
                {" "}
                <p style={sx("position: relative; margin: 0; font-size: 17px; line-height: 1.6")}>
                  Diseñar con inteligencia artificial no significa dejar las decisiones pedagógicas en manos de una herramienta. Significa contar con un apoyo para explorar posibilidades, ahorrar tiempo y dedicar más atención a lo esencial: la experiencia de aprendizaje de tus Estudiantes UAO.
                </p>
                {" "}
              </article>
              {" "}
              <div style={sx("flex: 2 1 560px; min-width: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px")}>
                {" "}
                <article style={sx("display: flex; flex-direction: column; gap: 12px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                  {" "}
                  <span style={sx("width: 48px; height: 48px; border-radius: 12px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="5" r="2.5"></circle>
                      <circle cx="5" cy="18" r="2.5"></circle>
                      <circle cx="19" cy="18" r="2.5"></circle>
                      <path d="M10.7 7.2L6.3 15.8"></path>
                      <path d="M13.3 7.2l4.4 8.6"></path>
                      <path d="M7.5 18h9"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                    Razón 2
                  </span>
                  {" "}
                  <h3 style={sx("margin: -6px 0 0; font-size: 20px; font-weight: 700")}>
                    Menos complejidad
                  </h3>
                  {" "}
                  <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                    Interactúa con la IA en un entorno diseñado para el contexto educativo, sin saltar entre herramientas dispersas ni procesos complejos.
                  </p>
                  {" "}
                </article>
                {" "}
                <article style={sx("display: flex; flex-direction: column; gap: 12px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                  {" "}
                  <span style={sx("width: 48px; height: 48px; border-radius: 12px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3" width="6" height="5" rx="1"></rect>
                      <rect x="3" y="16" width="6" height="5" rx="1"></rect>
                      <rect x="15" y="16" width="6" height="5" rx="1"></rect>
                      <path d="M12 8v4"></path>
                      <path d="M6 16v-4h12v4"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                    Razón 3
                  </span>
                  {" "}
                  <h3 style={sx("margin: -6px 0 0; font-size: 20px; font-weight: 700")}>
                    Más estructura
                  </h3>
                  {" "}
                  <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                    Organiza tus ideas en un proceso que facilita construir actividades de aprendizaje de forma ordenada.
                  </p>
                  {" "}
                </article>
                {" "}
                <article style={sx("display: flex; flex-direction: column; gap: 12px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                  {" "}
                  <span style={sx("width: 48px; height: 48px; border-radius: 12px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8.5"></circle>
                      <path d="M15.5 8.5l-2 5-5 2 2-5z"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                    Razón 4
                  </span>
                  {" "}
                  <h3 style={sx("margin: -6px 0 0; font-size: 20px; font-weight: 700")}>
                    Mayor autonomía
                  </h3>
                  {" "}
                  <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                    Usa la IA como apoyo y mantén siempre el control sobre las decisiones y los resultados finales.
                  </p>
                  {" "}
                </article>
                {" "}
                <article style={sx("display: flex; flex-direction: column; gap: 12px; padding: 28px; border-radius: 18px; background: #FBF5EC")}>
                  {" "}
                  <span style={sx("width: 48px; height: 48px; border-radius: 12px; background: #8A1428; color: #FBF5EC; display: inline-flex; align-items: center; justify-content: center")}>
                    {" "}
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18"></path>
                      <path d="M5 21V8l7-4 7 4v13"></path>
                      <path d="M9 21v-5h6v5"></path>
                      <path d="M9 11h.01"></path>
                      <path d="M15 11h.01"></path>
                    </svg>
                  </span>
                  {" "}
                  <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                    Razón 5
                  </span>
                  {" "}
                  <h3 style={sx("margin: -6px 0 0; font-size: 20px; font-weight: 700")}>
                    Pensada para la UAO
                  </h3>
                  {" "}
                  <p style={sx("margin: 0; font-size: 16px; line-height: 1.55")}>
                    Responde a las necesidades del contexto institucional e integra la IA a las dinámicas de trabajo de docentes UAO y colaboradores de la Universidad.
                  </p>
                  {" "}
                </article>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <article style={sx("display: flex; flex-wrap: wrap; align-items: center; gap: 24px 32px; padding: 32px 36px; border-radius: 18px; border: 2px solid #8A1428")}>
              {" "}
              <span style={sx("flex: none; width: 64px; height: 64px; border-radius: 16px; background: #FF051E; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center")}>
                {" "}
                <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </span>
              {" "}
              <div style={sx("flex: 1 1 200px; min-width: 0; display: flex; flex-direction: column; gap: 4px")}>
                {" "}
                <span style={sx("font-size: 14px; font-weight: 700; color: #AC0B32")}>
                  Razón 6
                </span>
                {" "}
                <h3 style={sx("margin: 0; font-size: 22px; font-weight: 800")}>
                  Inteligencia artificial responsable
                </h3>
                {" "}
              </div>
              {" "}
              <p style={sx("flex: 2 1 420px; min-width: 0; margin: 0; font-size: 16px; line-height: 1.6")}>
                La interacción con herramientas generativas debe ser transparente y estar acompañada de supervisión humana. Por eso, la plataforma se plantea desde una perspectiva ética y responsable, en la que la tecnología complementa la labor docente.
              </p>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="beneficios" style={sx("background: #8A1428; color: #FBF5EC")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-direction: column; gap: 48px")}>
            {" "}
            <div style={sx("display: flex; flex-direction: column; gap: 12px; max-width: 720px")}>
              {" "}
              <span style={sx("font-size: 15px; font-weight: 700; color: #FF836C")}>
                Beneficios
              </span>
              {" "}
              <h2 style={sx("margin: 0; font-size: 42px; line-height: 1.1; font-weight: 800; letter-spacing: -1px; color: #FFFFFF")}>
                Lo que ganamos como Comunidad UAO
              </h2>
              {" "}
              <p style={sx("margin: 0; font-size: 18px; line-height: 1.6")}>
                Para docentes UAO, y para el equipo del CEEDi que los acompaña.
              </p>
              {" "}
            </div>
            {" "}
            <div style={sx("display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 20px")}>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 12px; padding: 24px; border-radius: 16px; border: 1px solid rgba(251,245,236,0.28)")}>
                {" "}
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF836C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                </svg>
                {" "}
                <h3 style={sx("margin: 0; font-size: 18px; font-weight: 700; color: #FFFFFF")}>
                  Tu criterio al centro
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                  La IA sugiere y acompaña; tú conservas el 100 % de la decisión pedagógica.
                </p>
                {" "}
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 12px; padding: 24px; border-radius: 16px; border: 1px solid rgba(251,245,236,0.28)")}>
                {" "}
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF836C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8"></circle>
                  <path d="M12 8v4l3 2"></path>
                </svg>
                {" "}
                <h3 style={sx("margin: 0; font-size: 18px; font-weight: 700; color: #FFFFFF")}>
                  Menos carga, más propósito
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                  Sin pantallas en blanco: formularios guiados y borradores para empezar.
                </p>
                {" "}
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 12px; padding: 24px; border-radius: 16px; border: 1px solid rgba(251,245,236,0.28)")}>
                {" "}
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF836C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="M9 13.5L8 21l4-2 4 2-1-7.5"></path>
                </svg>
                {" "}
                <h3 style={sx("margin: 0; font-size: 18px; font-weight: 700; color: #FFFFFF")}>
                  Sello UAO en cada curso
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                  Coherencia con el PEI, el SIEA y la Política Curricular de la Universidad.
                </p>
                {" "}
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 12px; padding: 24px; border-radius: 16px; border: 1px solid rgba(251,245,236,0.28)")}>
                {" "}
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF836C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5"></circle>
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path>
                  <path d="M16 4.5a3.5 3.5 0 0 1 0 7"></path>
                  <path d="M18 14c2 .8 3 3 3 6"></path>
                </svg>
                {" "}
                <h3 style={sx("margin: 0; font-size: 18px; font-weight: 700; color: #FFFFFF")}>
                  Co-creación con el CEEDi
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                  Revisiones en línea entre docentes UAO y el equipo tecnopedagógico.
                </p>
                {" "}
              </div>
              {" "}
              <div style={sx("display: flex; flex-direction: column; gap: 12px; padding: 24px; border-radius: 16px; border: 1px solid rgba(251,245,236,0.28)")}>
                {" "}
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF836C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
                {" "}
                <h3 style={sx("margin: 0; font-size: 18px; font-weight: 700; color: #FFFFFF")}>
                  Ética y privacidad
                </h3>
                {" "}
                <p style={sx("margin: 0; font-size: 15px; line-height: 1.55")}>
                  Tratamiento transparente de datos conforme a la Ley 1581 de 2012.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="preguntas" style={sx("max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-wrap: wrap; gap: 48px")}>
          {" "}
          <div style={sx("flex: 1 1 300px; min-width: 0; display: flex; flex-direction: column; gap: 12px")}>
            {" "}
            <span style={sx("font-size: 15px; font-weight: 700; color: #FF051E")}>
              Preguntas frecuentes
            </span>
            {" "}
            <h2 style={sx("margin: 0; font-size: 42px; line-height: 1.1; font-weight: 800; letter-spacing: -1px")}>
              Resolvemos tus dudas
            </h2>
            {" "}
            <p style={sx("margin: 0; font-size: 18px; line-height: 1.6")}>
              Las preguntas más comunes sobre la plataforma y el uso de la IA en el diseño de cursos.
            </p>
            {" "}
          </div>
          {" "}
          <div style={sx("flex: 2 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 12px")}>
            {" "}
            <details open style={sx("background: #FFFFFF; border-radius: 14px; padding: 4px 24px")}>
              {" "}
              <summary style={sx("display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; font-size: 17px; font-weight: 700")}>
                ¿La IA reemplaza mi labor como docente en la creación del curso?
                <span className="faq-plus" aria-hidden="true" style={sx("flex: none; font-size: 26px; font-weight: 400; color: #FF051E; transition: transform .2s")}>
                  +
                </span>
              </summary>
              {" "}
              <p style={sx("margin: 0 0 20px; font-size: 16px; line-height: 1.6")}>
                No. La IA propone borradores y acompaña el proceso; tú decides qué aceptar, editar o rechazar. La decisión pedagógica siempre es tuya.
              </p>
              {" "}
            </details>
            {" "}
            <details style={sx("background: #FFFFFF; border-radius: 14px; padding: 4px 24px")}>
              {" "}
              <summary style={sx("display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; font-size: 17px; font-weight: 700")}>
                ¿Mis datos académicos y personales están protegidos?
                <span className="faq-plus" aria-hidden="true" style={sx("flex: none; font-size: 26px; font-weight: 400; color: #FF051E; transition: transform .2s")}>
                  +
                </span>
              </summary>
              {" "}
              <p style={sx("margin: 0 0 20px; font-size: 16px; line-height: 1.6")}>
                Sí. La plataforma trata tus datos conforme a la Ley 1581 de 2012 y a la Política de privacidad de la Universidad.
              </p>
              {" "}
            </details>
            {" "}
            <details style={sx("background: #FFFFFF; border-radius: 14px; padding: 4px 24px")}>
              {" "}
              <summary style={sx("display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; font-size: 17px; font-weight: 700")}>
                ¿Necesito saber programación o redactar prompts para usar los asistentes?
                <span className="faq-plus" aria-hidden="true" style={sx("flex: none; font-size: 26px; font-weight: 400; color: #FF051E; transition: transform .2s")}>
                  +
                </span>
              </summary>
              {" "}
              <p style={sx("margin: 0 0 20px; font-size: 16px; line-height: 1.6")}>
                No. Cada asistente te guía con un diálogo tipo chat y formularios; solo respondes con la información de tu curso.
              </p>
              {" "}
            </details>
            {" "}
            <details style={sx("background: #FFFFFF; border-radius: 14px; padding: 4px 24px")}>
              {" "}
              <summary style={sx("display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; font-size: 17px; font-weight: 700")}>
                ¿Debo usar los 6 asistentes en un orden obligatorio?
                <span className="faq-plus" aria-hidden="true" style={sx("flex: none; font-size: 26px; font-weight: 400; color: #FF051E; transition: transform .2s")}>
                  +
                </span>
              </summary>
              {" "}
              <p style={sx("margin: 0 0 20px; font-size: 16px; line-height: 1.6")}>
                No. Puedes usarlos en el orden que necesites, según la etapa en la que esté el diseño de tu trayectoria.
              </p>
              {" "}
            </details>
            {" "}
            <details style={sx("background: #FFFFFF; border-radius: 14px; padding: 4px 24px")}>
              {" "}
              <summary style={sx("display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; font-size: 17px; font-weight: 700")}>
                ¿Qué diferencia hay entre usar ChatGPT o Gemini directamente y usar esta plataforma institucional?
                <span className="faq-plus" aria-hidden="true" style={sx("flex: none; font-size: 26px; font-weight: 400; color: #FF051E; transition: transform .2s")}>
                  +
                </span>
              </summary>
              {" "}
              <p style={sx("margin: 0 0 20px; font-size: 16px; line-height: 1.6")}>
                Los asistentes de AI Class Builder trabajan con el modelo pedagógico UAO y están alineados con el PEI, el SIEA y la Política Curricular. Además, el CEEDi acompaña tu proceso y tus datos se tratan conforme a la Ley 1581 de 2012.
              </p>
              {" "}
            </details>
            {" "}
            <details style={sx("background: #FFFFFF; border-radius: 14px; padding: 4px 24px")}>
              {" "}
              <summary style={sx("display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; font-size: 17px; font-weight: 700")}>
                ¿Cómo colabora el equipo del CEEDi conmigo dentro de la plataforma?
                <span className="faq-plus" aria-hidden="true" style={sx("flex: none; font-size: 26px; font-weight: 400; color: #FF051E; transition: transform .2s")}>
                  +
                </span>
              </summary>
              {" "}
              <p style={sx("margin: 0 0 20px; font-size: 16px; line-height: 1.6")}>
                El equipo tecnopedagógico revisa en línea tus avances y comenta las propuestas contigo, para que cada curso salga con Sello UAO.
              </p>
              {" "}
            </details>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section id="ingresar" style={sx("max-width: 1200px; margin: 0 auto; padding: 0 24px 96px")}>
          {" "}
          <div style={sx("position: relative; border-radius: 22px; background: #FF051E; overflow: hidden; padding: 64px 48px 150px; display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center")}>
            {" "}
            <div aria-hidden="true" style={sx("position: absolute; left: 50%; bottom: -520px; width: 720px; height: 620px; margin-left: -360px; border-radius: 50%; background: #FBF5EC")}></div>
            {" "}
            <h2 style={sx("position: relative; margin: 0; font-size: 44px; line-height: 1.1; font-weight: 800; letter-spacing: -1px; color: #FFFFFF; max-width: 760px")}>
              Construyamos juntos tu próximo curso
            </h2>
            {" "}
            <p style={sx("position: relative; margin: 0; font-size: 18px; line-height: 1.6; color: #FFFFFF; max-width: 620px")}>
              Ingresa con tus credenciales institucionales y empieza a diseñar tu trayectoria. Porque en la UAO, el futuro lo diseñamos nosotros.
            </p>
            {" "}
            <a href="#/iniciar-sesion" style={sx("position: relative; display: inline-flex; align-items: center; gap: 10px; min-height: 52px; padding: 0 28px; border-radius: 12px; background: #FFFFFF; color: #8A1428; font-size: 17px; font-weight: 700; text-decoration: none; margin-top: 8px")}>
              {" "}
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
                <path d="M10 17l5-5-5-5"></path>
                <path d="M15 12H4"></path>
              </svg>
              {" "}Iniciar sesión
            </a>
            {" "}
            <span aria-hidden="true" style={sx("position: absolute; left: 0; right: 0; bottom: 34px; text-align: center; font-size: 44px; font-weight: 800; letter-spacing: -1.5px; color: #FF051E; line-height: 1")}>
              uao
            </span>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <footer style={sx("background: #8A1428; color: #FBF5EC")}>
          {" "}
          <div style={sx("max-width: 1200px; margin: 0 auto; padding: 40px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px")}>
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
            <a href="#/politica-privacidad" style={sx("font-size: 14px; font-weight: 600; color: #FBF5EC")}>
              Política de privacidad
            </a>
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
