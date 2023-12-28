import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Divider, Input, SpinnerModal } from '@/components';
import { useRegisterMutation } from '@/hooks/auth';
import { RegisterProps } from '@/services/auth';
import { FacebookLogo, GoogleLogo } from '@/utils/svg';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Stack } from 'expo-router';
import * as Yup from 'yup';

import * as S from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const Register: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isPending, isError } = useRegisterMutation();

  const SocialButtons = [
    {
      label: 'Entre com Google',
      icon: <GoogleLogo width={24} height={24} />,
    },
    {
      label: 'Entre com Apple',
      icon: <FontAwesome5 name="apple" size={24} color="white" />,
    },
    {
      label: 'Entre com Facebook',
      icon: <FacebookLogo width={24} height={24} />,
    },
  ];

  const submitForm: SubmitHandler<RegisterProps> = async values => {
    try {
      await mutateAsync(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <Stack.Screen options={{ title: 'Cadastre-se' }} />

      <S.ContentWrapper>
        <S.Title>Comece no Pomo APP</S.Title>
        <S.Content>Aumente a sua produtividade!</S.Content>

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
          <S.HaveAccountText>Já possui uma conta ?</S.HaveAccountText>
          <Link href="/login/">
            <S.LoginText>Entrar</S.LoginText>
          </Link>
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

      <Button onPress={handleSubmit(submitForm)}>Cadastrar</Button>
      {isPending && !isError && (
        <SpinnerModal label="Cadastrando..." open={isPending} />
      )}
    </S.Container>
  );
};

export default Register;
