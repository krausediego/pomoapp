import { Button, Divider, Input, SpinnerModal } from "@/components";
import * as S from "./styles";
import { Link, Stack, router } from "expo-router";
import { FacebookLogo, GoogleLogo } from "@/utils/svg";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/hooks/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginProps } from "@/services/auth";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isPending, isError } = useLoginMutation();

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
  ];

  const submitForm: SubmitHandler<LoginProps> = async (values) => {
    try {
      await mutateAsync(values);

      router.replace("/pomodoro/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <Stack.Screen options={{ title: "Entrar" }} />

      <S.ContentWrapper>
        <S.Title>Entre no Pomo APP</S.Title>
        <S.Content>Agilize seu tempo!</S.Content>

        <Input
          label="Email"
          name="email"
          leftIcon="mail-outline"
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          control={control}
          message={errors?.email?.message}
        />
        <Input
          label="Password"
          name="password"
          leftIcon="lock-outline"
          placeholder="Digite sua senha"
          secureTextEntry
          autoCapitalize="none"
          control={control}
          message={errors?.password?.message}
        />

        <S.Wrapper>
          <S.ForgotPasswordText>Esqueceu a senha ?</S.ForgotPasswordText>
        </S.Wrapper>

        <Divider label="ou" />

        {SocialButtons.map(({ label, icon }) => {
          return (
            <Button key={label} color="secondary" fullWidth leftIcon={icon}>
              {label}
            </Button>
          );
        })}
      </S.ContentWrapper>

      <Button onPress={handleSubmit(submitForm)}>Entrar</Button>
      {isPending && !isError && (
        <SpinnerModal label="Entrando..." open={isPending} />
      )}
    </S.Container>
  );
}
