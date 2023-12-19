import { Button, Logo } from "@/components";
import * as S from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { FacebookLogo, GoogleLogo } from "@/utils/svg";
import { Link, Stack } from "expo-router";

export default function GetStartedScreen() {
  const SocialButtons = [
    {
      label: "Entre com Google",
      icon: <GoogleLogo width={24} height={24} />,
    },
    {
      label: "Entre com Apple",
      icon: <FontAwesome5 name="apple" size={24} color="white" />,
    },
    {
      label: "Entre com Facebook",
      icon: <FacebookLogo width={24} height={24} />,
    },
    {
      label: "Entre com Twitter",
      icon: <FontAwesome5 name="twitter" size={24} color="#239AF0" />,
    },
  ];

  return (
    <S.Container>
      <Stack.Screen options={{ headerShown: false }} />
      <Logo />
      <S.Wrapper>
        <S.Title>Vamos Começar!</S.Title>
        <S.Content>Entre agora mesmo em sua conta</S.Content>
      </S.Wrapper>
      <S.Wrapper>
        {SocialButtons.map(({ label, icon }, index) => {
          return (
            <Button key={index} color="secondary" fullWidth leftIcon={icon}>
              {label}
            </Button>
          );
        })}
      </S.Wrapper>
      <S.Wrapper>
        <Link href="/register/" asChild>
          <Button color="primary" fullWidth>
            Cadastre-se
          </Button>
        </Link>
        <Link href="/login/" asChild>
          <Button color="tertiary" fullWidth>
            Entrar
          </Button>
        </Link>
      </S.Wrapper>
    </S.Container>
  );
}
