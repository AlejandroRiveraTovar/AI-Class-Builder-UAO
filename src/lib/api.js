import { supabase } from './supabase.js';

// Vacío = mismo origen (en desarrollo lo reenvía el proxy de Vite).
const BASE = `${(import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')}/api/v1`;

export class ApiError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

/** Llama al backend con el token de sesión. Devuelve { data, meta } o lanza ApiError. */
async function request(path, { method = 'GET', body, query } = {}) {
  const { data: { session } } = await supabase.auth.getSession();

  const url = new URL(BASE + path, window.location.origin);
  Object.entries(query ?? {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
  });

  const headers = {};
  if (session?.access_token) headers.Authorization = `Bearer ${session.access_token}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  let res;
  try {
    res = await fetch(url, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined });
  } catch {
    throw new ApiError(0, 'NETWORK', 'No hay conexión con el servidor.');
  }

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    // Sesión vencida o inválida: se cierra para que la app vuelva al inicio de sesión.
    if (res.status === 401 && session) await supabase.auth.signOut();
    const e = json?.error;
    throw new ApiError(res.status, e?.code ?? 'UNKNOWN', e?.message ?? 'Error inesperado.', e?.details);
  }
  return { data: json?.data ?? null, meta: json?.meta ?? {} };
}

// Mapa entre las rutas del frontend (#/asistentes/<clave>) y los ids de agente del backend.
export const AGENT_BY_ROUTE = {
  'diseno-curricular': 'diseno_curricular',
  'diseno-microcurricular': 'diseno_microcurricular',
  disena: 'actividades_aprendizaje',
  evaluacion: 'instrumentos_evaluacion',
  aurea: 'aurea',
  guiones: 'guion_tecnico',
};

export const api = {
  health: () => request('/health'),
  me: () => request('/me'),

  getConsent: () => request('/consent'),
  setConsent: (decision, policy_version = 'v1') =>
    request('/consent', { method: 'POST', body: { decision, policy_version } }),

  sendEvents: (events) => request('/events', { method: 'POST', body: { events } }),

  listAgents: () => request('/agents'),
  runAgent: (agentId, message) =>
    request(`/agents/${agentId}/run`, { method: 'POST', body: { message } }),

  // Solo roles ceedi / tecnico. Con pocos titulares, data llega null y meta.status = 'restricted'.
  analyticsOverview: (params) => request('/analytics/overview', { query: params }),
  analyticsIndicators: () => request('/analytics/indicators'),
};
