import { useEffect, useState } from 'react';

/**
 * Enrutador mínimo basado en el hash de la URL (#/ruta).
 * No depende de ninguna librería: solo de React y del navegador.
 */
function readPath() {
  const hash = window.location.hash;
  if (hash.startsWith('#/')) return hash.slice(1).split('?')[0];
  if (hash === '' || hash === '#') return '/';
  return null; // Un ancla dentro de la página (#arriba) no cambia la ruta.
}

export function navigate(path) {
  window.location.hash = path.startsWith('#') ? path : `#${path}`;
}

export function useRoute() {
  const [path, setPath] = useState(() => readPath() || '/');

  useEffect(() => {
    const onChange = () => {
      const next = readPath();
      if (next !== null) {
        setPath(next);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}
