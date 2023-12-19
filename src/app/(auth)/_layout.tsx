import { Container, StackStyle } from "./styles";
import { supabase } from "@/infra";
import { useEffect } from "react";
import { router } from "expo-router";

export default function AuthLayout() {
  const getSession = async () => {
    const {
      data: { session: authSession },
    } = await supabase.auth.getSession();

    if (authSession) router.replace("/pomodoro/");
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <Container>
      <StackStyle />
    </Container>
  );
}
