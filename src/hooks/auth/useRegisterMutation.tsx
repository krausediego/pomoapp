import { RegisterProps, register } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: async ({ email, password }: RegisterProps) => {
      const { error, data } = await register({ email, password });

      if (error) throw new Error(error.message);

      return data;
    },
  });
