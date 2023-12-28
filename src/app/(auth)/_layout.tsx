import React, { useEffect } from 'react';

import { supabase } from '@/infra';
import { router } from 'expo-router';

import { Container, StackStyle } from './styles';

const AuthLayout: React.FC = () => {
  const getSession = async () => {
    const {
      data: { session: authSession },
    } = await supabase.auth.getSession();

    if (authSession) router.replace('/pomodoro/');
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <Container>
      <StackStyle />
    </Container>
  );
};

export default AuthLayout;
