import { useNav } from './NavContext.js';
import './Sidebar.css';

const ENLACES = [
  {
    id: 'trayectorias',
    texto: 'Mis trayectorias',
    href: '#/mis-trayectorias',
    icono: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6', 'M9 17h4'],
  },
  {
    id: 'chat',
    texto: 'Chat',
    href: '#/chat',
    icono: ['M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z'],
  },
  {
    id: 'analitica',
    texto: 'Analítica',
    href: '#/analitica',
    icono: ['M4 20V4', 'M4 20h16', 'M8 15l4-4 3 3 5-6'],
  },
  {
    id: 'recursos',
    texto: 'Recursos',
    href: '#/recursos',
    icono: ['M5 4v16', 'M9 4v16', 'M13 5l4 15'],
  },
];

function Icono({ paths, size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/**
 * Menú principal de la plataforma (barra lateral vino).
 * Queda fijo a la altura de la pantalla y se puede plegar.
 */
export default function Sidebar({ active }) {
  const { plegado, setPlegado } = useNav();

  return (
    <>
      <input
        type="checkbox"
        id="nav-pleg"
        className="nav-pleg"
        aria-label="Plegar el menú principal"
        checked={plegado}
        onChange={(e) => setPlegado(e.target.checked)}
      />
      <aside className="menu-principal">
        <a href="#/" className="menu-marca" aria-label="AI Class Builder, Universidad Autónoma de Occidente">
          <span className="menu-marca-uao">uao</span>
          <span className="menu-marca-linea" />
          <span className="menu-marca-nombre">
            AI Class
            <br />
            Builder
          </span>
        </a>

        <nav aria-label="Principal" className="menu-nav">
          {ENLACES.map((e) => (
            <a
              key={e.id}
              href={e.href}
              className={e.id === active ? 'menu-enlace activo' : 'menu-enlace'}
              aria-current={e.id === active ? 'page' : undefined}
              title={e.texto}
            >
              <Icono paths={e.icono} />
              {e.texto}
            </a>
          ))}
        </nav>

        <label htmlFor="nav-pleg" className="nav-pleg-btn" title="Plegar o desplegar el menú">
          <Icono paths={['M11 7l-5 5 5 5', 'M18 7l-5 5 5 5']} />
          {plegado ? 'Mostrar menú' : 'Ocultar menú'}
        </label>

        <a
          href="#/perfil"
          className={active === 'perfil' ? 'menu-cuenta activo' : 'menu-cuenta'}
          aria-current={active === 'perfil' ? 'page' : undefined}
          aria-label="Mi perfil: Juan Martínez, Docente UAO"
        >
          <span className="menu-avatar">JM</span>
          <span className="menu-cuenta-texto">
            <span className="menu-cuenta-nombre">Juan Martínez</span>
            <span className="menu-cuenta-rol">{active === 'perfil' ? 'Mi perfil' : 'Docente UAO'}</span>
          </span>
          {active === 'perfil' ? null : <Icono paths={['M9 6l6 6-6 6']} size={18} />}
        </a>
      </aside>
    </>
  );
}
