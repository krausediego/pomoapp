import React from 'react';
import { StatusBar } from 'react-native';

import { Stack } from 'expo-router';

const PomodoroLayout: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#FF6347" />
      <Stack />
    </>
  );
};

export default PomodoroLayout;
