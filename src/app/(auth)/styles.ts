import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const StackStyle = styled(Stack).attrs(({ theme }) => ({
  screenOptions: {
    headerStyle: {
      backgroundColor: "transparent",
    },
    headerTintColor: theme.content,
    headerTitleStyle: {
      color: theme.content,
    },
  },
}))``;
