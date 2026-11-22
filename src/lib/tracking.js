import { api, ApiError } from './api.js';

/**
 * Envío de eventos del Tracking Plan en lotes.
 * - Solo se envían las propiedades que el backend autoriza (esquema estricto).
 * - Nunca incluyas texto de prompts, respuestas ni ediciones.
 * - Si el backend responde CONSENT_REQUIRED, se vacía la cola y se pausa hasta resetTracking().
 */
const MAX_BATCH = 50;
const FLUSH_MS = 5000;

let queue = [];
let timer = null;
let paused = false;

const sessionId = (() => {
  try {
    let id = sessionStorage.getItem('aicb_session');
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem('aicb_session', id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
})();

export function track(event_name, fields = {}) {
  if (paused) return;
  queue.push({
    event_id: crypto.randomUUID(),
    schema_version: '1.0',
    occurred_at: new Date().toISOString(),
    session_id: sessionId,
    event_name,
    ...fields, // activity_id (uuid) es obligatorio en todos los eventos
  });
  if (queue.length >= MAX_BATCH) flush();
  else if (!timer) timer = setTimeout(flush, FLUSH_MS);
}

export async function flush() {
  clearTimeout(timer);
  timer = null;
  if (paused || queue.length === 0) return;

  const batch = queue.splice(0, MAX_BATCH);
  try {
    await api.sendEvents(batch);
  } catch (e) {
    if (e instanceof ApiError && e.code === 'CONSENT_REQUIRED') {
      queue = [];
      paused = true;
    } else if (!(e instanceof ApiError) || e.status >= 500 || e.status === 0) {
      queue = [...batch, ...queue].slice(-200); // reintento posterior, con tope
      timer = setTimeout(flush, FLUSH_MS * 3);
    } // 4xx: el lote es inválido, se descarta
  }
}

/** Llamar tras registrar el consentimiento o al iniciar sesión. */
export function resetTracking() {
  paused = false;
}
