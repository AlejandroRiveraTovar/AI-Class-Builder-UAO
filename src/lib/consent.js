import { api, ApiError } from './api.js';
import { resetTracking } from './tracking.js';
import { navigate } from './router.js';

export const POLICY_VERSION = 'v1';

/** Registra la autorización solo si no hay una vigente con la misma versión de la política. */
export async function registrarConsentimiento(version = POLICY_VERSION) {
  const { data } = await api.getConsent();
  if (!(data?.decision === true && data?.policy_version === version)) {
    await api.setConsent(true, version);
  }
  resetTracking();
}

/** Para class Logic: registra la autorización y navega al destino. */
export async function guardarConsentimiento(self, destino = '/centro-diseno') {
  if (self.state.guardando) return;
  self.setState({ guardando: true, errorConsent: '' });
  try {
    await registrarConsentimiento();
    navigate(destino);
  } catch (e) {
    self.setState({
      errorConsent: e instanceof ApiError && e.status !== 0
        ? e.message
        : 'No se pudo registrar tu autorización. Revisa tu conexión e inténtalo de nuevo.',
    });
  } finally {
    self.setState({ guardando: false });
  }
}
