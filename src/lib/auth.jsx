import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from './supabase.js';

const AuthContext = createContext({ loading: true, session: null, user: null, role: null });

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_evento, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const value = useMemo(() => {
    const user = session?.user ?? null;
    return {
      loading,
      session,
      user,
      // Solo para la interfaz: el backend vuelve a validar el rol en cada petición.
      role: user ? user.app_metadata?.role ?? 'docente' : null,
      signIn: async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      },
      signOut: () => supabase.auth.signOut(),
    };
  }, [session, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

// Para las páginas con class Logic (no pueden usar hooks).
export async function iniciarSesion(email, password) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

export function mensajeDeLogin(err) {
  const code = err?.code;
  if (code === 'invalid_credentials') return 'Correo o contraseña incorrectos.';
  if (code === 'email_not_confirmed') return 'Debes confirmar tu correo antes de ingresar.';
  if (err?.status === 0 || err?.name === 'AuthRetryableFetchError') return 'No hay conexión con el servidor. Inténtalo de nuevo.';
  if (err?.status === 429) return 'Demasiados intentos. Espera un momento e inténtalo de nuevo.';
  return 'No fue posible iniciar sesión. Inténtalo de nuevo.';
}
