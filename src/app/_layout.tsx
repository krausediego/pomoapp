import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';

import { fonts } from '@/styles/fonts';
import { darkTheme } from '@/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components/native';

import { Wrapper } from './styles';

SplashScreen.preventAutoHideAsync();

export const queryClient = new QueryClient();

const RootLayout: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <ThemeProvider theme={darkTheme}>
          <Wrapper onLayout={onLayoutRootView}>
            <StatusBar
              backgroundColor={darkTheme.background}
              barStyle="light-content"
            />
            <Slot />
          </Wrapper>
        </ThemeProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
