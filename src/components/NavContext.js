import { createContext, useContext } from 'react';

// Estado compartido por todas las páginas:
// - plegado: si el menú principal está plegado.
// - rol: 'docente' o 'ceedi' (colaborador CEEDi), según cómo se inició sesión.
// - abrirGuia: abre la guía de la página actual (botón Ayuda).
export const NavContext = createContext({
  plegado: false,
  setPlegado: () => {},
  rol: 'docente',
  abrirGuia: () => {},
});

export function useNav() {
  return useContext(NavContext);
}
