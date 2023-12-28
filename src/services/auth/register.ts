import { supabase } from '@/infra';
import { AuthResponse } from '@supabase/supabase-js';

export interface RegisterProps {
  email: string;
  password: string;
}

export const register = ({
  email,
  password,
}: RegisterProps): Promise<AuthResponse> => {
  return supabase.auth.signUp({ email, password });
};
