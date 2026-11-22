import { api, ApiError } from './api.js';
import { track } from './tracking.js';

/**
 * Conexión de las páginas de asistentes con el backend.
 * Cada página llama a enviarAlAgente(self, 'id_del_agente') desde su lógica (class Logic).
 * No se guarda texto en analítica: solo se envían ids, tipo de asistente y tiempos.
 */

// Mientras no existan trayectorias reales en el backend, cada asistente usa un activity_id
// (UUID) estable en este navegador. Reemplazar por el id real de la actividad cuando exista.
export function actividadId(clave) {
  const k = `aicb_activity_${clave}`;
  try {
    let id = localStorage.getItem(k);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(k, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

function mensajeDeError(e) {
  if (e instanceof ApiError) {
    if (e.status === 0) return 'No hay conexión con el servidor. Inténtalo de nuevo.';
    if (e.status === 401) return 'Tu sesión venció. Inicia sesión de nuevo.';
    return e.message;
  }
  return 'No fue posible obtener la respuesta del asistente.';
}

export async function enviarAlAgente(self, agentId) {
  const texto = (self.state.borrador || '').trim();
  if (!texto || self.state.cargando) return;

  const activity_id = actividadId(agentId);
  const prompt_id = crypto.randomUUID();

  self.setState((s) => ({
    extra: s.extra.concat([{ rol: 'usuario', texto }]),
    borrador: '',
    cargando: true,
    error: '',
  }));
  track('prompt_submitted', { activity_id, prompt_id, assistant_type: agentId });

  const t0 = performance.now();
  try {
    const { data } = await api.runAgent(agentId, texto);
    const suggestion_id = crypto.randomUUID();
    self.setState((s) => ({
      extra: s.extra.concat([{ rol: 'ia', texto: data.output }]),
      ultimaSugerencia: suggestion_id,
    }));
    track('ai_suggestion_generated', {
      activity_id,
      prompt_id,
      suggestion_id,
      assistant_type: agentId,
      response_time_ms: Math.round(performance.now() - t0),
    });
  } catch (e) {
    self.setState({ error: mensajeDeError(e) });
  } finally {
    self.setState({ cargando: false });
  }
}

/** tipo: 'accepted' | 'rejected' | 'adjustment_requested'. Resuelve la última sugerencia generada. */
export function resolverSugerencia(self, tipo, agentId) {
  const suggestion_id = self.state.ultimaSugerencia;
  if (!suggestion_id) return; // la propuesta de ejemplo de la página no viene del backend
  track('ai_suggestion_resolved', {
    activity_id: actividadId(agentId),
    suggestion_id,
    resolution_type: tipo,
  });
  self.setState({ ultimaSugerencia: null });
}
