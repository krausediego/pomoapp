import React from 'react';
import { Text } from 'react-native';

import { Stack } from 'expo-router';

import * as S from './styles';

const ReportScreen: React.FC = () => {
  return (
    <S.Container
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ color: 'white' }}>Report</Text>
    </S.Container>
  );
};

export default ReportScreen;
