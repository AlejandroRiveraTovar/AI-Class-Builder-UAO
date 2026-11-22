import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  // Falla visible y temprana en vez de errores confusos más adelante.
  throw new Error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_PUBLISHABLE_KEY en el archivo .env');
}

// Solo clave publicable: nunca pongas aquí la clave secreta.
export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    // La app usa rutas con #, así que Supabase no debe leer el hash de la URL.
    detectSessionInUrl: false,
  },
});
