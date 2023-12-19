import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const TabsStyle = styled(Tabs).attrs(({ theme }) => ({
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.background,
      borderTopWidth: 0,
      paddingBottom: 0,
      height: 50,
    },
  },
}))``;
