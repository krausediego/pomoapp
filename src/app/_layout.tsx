import { useCallback } from "react";
import { fonts } from "@/styles/fonts";
import { darkTheme, lightTheme } from "@/styles/theme";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { View, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import { Wrapper } from "./styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

export const queryClient = new QueryClient();

export default function RootLayout() {
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
      <ThemeProvider theme={darkTheme}>
        <Wrapper onLayout={onLayoutRootView}>
          <Slot />
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
