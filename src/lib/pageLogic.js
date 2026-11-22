import { useRef, useState } from 'react';

/**
 * Clase base para la lógica de cada página.
 * Cada página define una subclase con su estado inicial (this.state)
 * y un método renderVals() que devuelve los valores que usa la vista.
 */
export class PageLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
  }

  // Se reemplaza en usePageLogic para que React vuelva a pintar la página.
  setState(patch) {
    const next = typeof patch === 'function' ? patch(this.state) : patch;
    this.state = { ...this.state, ...next };
  }

  renderVals() {
    return {};
  }
}

/**
 * Hook que crea una sola instancia de la lógica por página
 * y vuelve a pintar el componente cada vez que cambia su estado.
 */
export function usePageLogic(LogicClass, props) {
  const [, forceRender] = useState(0);
  const ref = useRef(null);
  if (!ref.current) {
    const instance = new LogicClass(props);
    instance.setState = (patch) => {
      const next = typeof patch === 'function' ? patch(instance.state) : patch;
      instance.state = { ...instance.state, ...next };
      forceRender((n) => n + 1);
    };
    ref.current = instance;
  }
  ref.current.props = props || {};
  return ref.current.renderVals();
}
