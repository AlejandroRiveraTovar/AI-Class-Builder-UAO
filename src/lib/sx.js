/**
 * Convierte una cadena de estilos CSS en línea ("display: flex; gap: 8px")
 * en el objeto de estilos que espera React. Guarda en caché los resultados.
 */
const cache = new Map();

function toCamel(prop) {
  if (prop.startsWith('--')) return prop;
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function sx(css) {
  if (!css) return undefined;
  const cached = cache.get(css);
  if (cached) return cached;
  const style = {};
  let depth = 0;
  let current = '';
  const parts = [];
  for (const ch of css) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ';' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  parts.push(current);
  for (const part of parts) {
    const i = part.indexOf(':');
    if (i < 0) continue;
    const prop = part.slice(0, i).trim();
    let value = part.slice(i + 1).trim();
    if (!prop || !value) continue;
    // React no acepta !important en objetos de estilo.
    value = value.replace(/\s*!important\s*$/, '');
    style[toCamel(prop)] = value;
  }
  cache.set(css, style);
  return style;
}
