# AI Class Builder UAO · Frontend en React

Aplicación web (solo frontend) de AI Class Builder UAO, construida con **React 18 y JavaScript (JSX)**; la única librería adicional es `@supabase/supabase-js` (inicio de sesión). Vite se usa únicamente como herramienta de desarrollo y compilación.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Configuración

Copia `.env.example` a `.env` y completa `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY` (clave publicable, nunca la secreta).

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
    NavContext.js          Recuerda si el menú está plegado al cambiar de página
  lib/
    router.js              Navegación por rutas con # (sin librerías)
    pageLogic.js           Base para el estado de cada página (usePageLogic)
    sx.js                  Convierte estilos en línea a objetos de estilo de React
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
| `#/mis-trayectorias` | Mis trayectorias |
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
| `#/perfil` | Mi perfil |
| `#/politica-privacidad` | Política de privacidad |

Una ruta desconocida lleva a la página de inicio.

## Conexión con el backend (repositorio `aicb-api`)

El backend es un repositorio aparte. El frontend solo necesita que esté accesible en `http://localhost:3001`.

- **Desarrollo:** Vite reenvía `/api` al backend (`VITE_DEV_API_TARGET`), así que no hace falta configurar CORS.
- **Producción:** si el backend está en otro dominio, define `VITE_API_URL` (y el backend debe incluir el dominio del frontend en su `ALLOWED_ORIGIN`). Si ambos se sirven bajo el mismo dominio, déjalo vacío.

Capa de conexión (`src/lib`):

| Archivo | Para qué sirve |
|---|---|
| `supabase.js` | Cliente de Supabase con clave publicable |
| `auth.jsx` | `AuthProvider` y `useAuth()` (sesión, rol, `signIn`, `signOut`) |
| `api.js` | Cliente REST con `Authorization: Bearer`; errores como `ApiError` |
| `tracking.js` | `track()` envía los eventos del Tracking Plan en lotes |

Las rutas privadas redirigen a `#/iniciar-sesion` si no hay sesión. Rutas públicas: `#/`, `#/iniciar-sesion`, `#/politica-privacidad`.

## Datos

Los datos que se muestran (trayectorias, conversaciones, analítica, etc.) son de ejemplo y viven en la lógica de cada página (`class Logic` al inicio de cada archivo de `src/pages`). Para conectar el backend, reemplaza esos datos por llamadas a la API, por ejemplo con `fetch` dentro de un `useEffect`.

Para iniciar sesión se usa un usuario real de Supabase Auth (ya no sirve cualquier correo).

## Pantalla de referencia

Diseñada para computador a 1920 × 1080 px: el menú principal queda fijo y completo a la altura de la pantalla, y el contenido de cada página se desplaza.
