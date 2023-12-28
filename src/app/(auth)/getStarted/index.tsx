import React from 'react';

import { Button, Logo } from '@/components';
import { FacebookLogo, GoogleLogo } from '@/utils/svg';
import { FontAwesome5 } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';

import * as S from './styles';

const GetStartedScreen: React.FC = () => {
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
    {
      label: 'Entre com Twitter',
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
        {SocialButtons.map(({ label, icon }) => {
          return (
            <Button key={label} color="secondary" fullWidth leftIcon={icon}>
              {label}
            </Button>
          );
        })}
      </S.Wrapper>
      <S.Wrapper>
        <Button
          onPress={() => router.replace('/register/')}
          color="primary"
          fullWidth>
          Cadastre-se
        </Button>
        <Button
          onPress={() => router.replace('/login/')}
          color="tertiary"
          fullWidth>
          Entrar
        </Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default GetStartedScreen;
