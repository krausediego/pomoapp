import { supabase } from '@/infra';
import { AuthResponse } from '@supabase/supabase-js';

export interface LoginProps {
  email: string;
  password: string;
}

export const login = ({
  email,
  password,
}: LoginProps): Promise<AuthResponse> => {
  return supabase.auth.signInWithPassword({ email, password });
};
