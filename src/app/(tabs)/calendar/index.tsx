import React from 'react';
import { Text } from 'react-native';

import { Stack } from 'expo-router';

import * as S from './styles';

const CalendarScreen: React.FC = () => {
  return (
    <S.Container
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ color: 'white' }}>Calendar</Text>
    </S.Container>
  );
};

export default CalendarScreen;
