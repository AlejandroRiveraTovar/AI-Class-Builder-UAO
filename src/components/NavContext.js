import { createContext, useContext } from 'react';

// Guarda si el menú principal está plegado, para conservarlo al cambiar de página.
export const NavContext = createContext({ plegado: false, setPlegado: () => {} });

export function useNav() {
  return useContext(NavContext);
}
