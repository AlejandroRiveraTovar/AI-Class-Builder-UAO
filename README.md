# AI Class Builder UAO · Frontend en React

Aplicación web (solo frontend) de AI Class Builder UAO, construida con **React 18 y JavaScript (JSX)**, sin librerías adicionales. Vite se usa únicamente como herramienta de desarrollo y compilación.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Cómo ejecutarla

```bash
npm install        # instala React, React DOM y Vite
npm run dev        # servidor local en http://localhost:5173
npm run build      # versión de producción en la carpeta dist
npm run preview    # revisa la versión de producción en http://localhost:4173
```

La carpeta `dist` se puede publicar en cualquier servidor estático (Apache, Nginx, IIS, GitHub Pages, etc.). Como la navegación usa rutas con `#`, no necesita configuración especial del servidor.

## Estructura

```
src/
  main.jsx                 Punto de entrada
  App.jsx                  Tabla de rutas y estado del menú principal
  components/
    Sidebar.jsx / .css     Menú principal (fijo a la altura de la pantalla y plegable)
    NavContext.js          Estado compartido: menú plegado, rol y apertura de la guía
    Guia.jsx / .css        Guía paso a paso de cada página
  lib/
    router.js              Navegación por rutas con # (sin librerías)
    pageLogic.js           Base para el estado de cada página (usePageLogic)
    sx.js                  Convierte estilos en línea a objetos de estilo de React
    guias.js               Pasos de la guía de cada página
  pages/                   Una página por archivo (.jsx) con su hoja de estilos (.css)
  styles/global.css        Estilos base (DM Sans y fondo crema)
  assets/                  Imágenes
```

Cada hoja de estilos de página lleva un prefijo propio (`.pg-nombre-de-pagina`), así los estilos de una página no afectan a las demás.

## Rutas

| Ruta | Página |
|---|---|
| `#/` | Inicio (página de presentación) |
| `#/iniciar-sesion` | Inicio de sesión |
| `#/mis-trayectorias` | Mis trayectorias (docente: solo las que creó) |
| `#/contextualizacion/1` a `#/contextualizacion/5` | Contextualización de la trayectoria, partes 1 a 5 |
| `#/centro-diseno` | Centro de diseño microcurricular |
| `#/asistentes/diseno-curricular` | Asistente 1 · Diseño curricular UAO |
| `#/asistentes/diseno-microcurricular` | Asistente 2 · Diseño microcurricular UAO |
| `#/asistentes/disena` | Asistente 3 · Diseña UAO |
| `#/asistentes/evaluacion` | Asistente 4 · Instrumentos de evaluación UAO |
| `#/asistentes/aurea` | Asistente 5 · AUREA |
| `#/asistentes/guiones` | Asistente 6 · Guiones técnicos audiovisuales |
| `#/historial` | Historial de versiones |
| `#/exportacion` | Consolidación y exportación |
| `#/vista-previa` | Vista previa del diseño microcurricular |
| `#/analitica-trayectoria` | Analítica de la trayectoria formativa |
| `#/analitica` | Analítica general · Uso de la IA |
| `#/chat` | Comentarios y revisión |
| `#/recursos` | Recursos CEEDi y CRAI |
| `#/recursos/plantillas` | Plantillas institucionales |
| `#/perfil` | Mi perfil (docente) |
| `#/ceedi/trayectorias` | Trayectorias de todo el cuerpo docente (colaborador CEEDi) |
| `#/ceedi/perfil` | Mi perfil (colaborador CEEDi) |
| `#/politica-privacidad` | Política de privacidad |

Una ruta desconocida lleva a la página de inicio.

## Datos

Los datos que se muestran (trayectorias, conversaciones, analítica, etc.) son de ejemplo y viven en la lógica de cada página (`class Logic` al inicio de cada archivo de `src/pages`). Para conectar el backend, reemplaza esos datos por llamadas a la API, por ejemplo con `fetch` dentro de un `useEffect`.

## Roles (versión de demostración)

- **Docente:** en Inicio de sesión, escribe cualquier correo `@uao.edu.co` y cualquier contraseña y pulsa **Iniciar sesión**. Ves solo tus trayectorias.
- **Colaborador CEEDi:** pulsa **Continuar con Google**. Ves las trayectorias de todo el cuerpo docente y tu propio perfil.

El rol se guarda en el navegador (`localStorage`) y el menú lateral cambia según el rol: nombre, enlace de trayectorias y perfil.

## Guía de cada página

- La primera vez que alguien entra a una página interna (todas menos la landing, el inicio de sesión y la política de privacidad) aparece una guía paso a paso que resalta cada sección y explica para qué sirve.
- Se puede volver a ver con el botón **Ayuda** del menú lateral.
- Los pasos están en `src/lib/guias.js` (título, texto y selector CSS del elemento que se resalta). Las secciones se marcan en las páginas con el atributo `data-guia`.
- Para volver a ver las guías como la primera vez, borra en el navegador las claves `aicb-guia-…` de `localStorage`.

## Pantalla de referencia

Diseñada para computador a 1920 × 1080 px: el menú principal queda fijo y completo a la altura de la pantalla, y el contenido de cada página se desplaza.
