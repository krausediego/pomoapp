import { RegisterProps, register } from '@/services/auth';
import { Session, User } from '@supabase/supabase-js';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const useRegisterMutation = (): UseMutationResult<
  { user: User | null; session: Session | null },
  Error,
  RegisterProps,
  unknown
> =>
  useMutation({
    mutationFn: async ({ email, password }: RegisterProps) => {
      const { error, data } = await register({ email, password });

      if (error) throw new Error(error.message);

      return data;
    },
  });
