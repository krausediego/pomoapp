import { Tabs } from 'expo-router';
import styled from 'styled-components/native';

export const Container = styled.View`
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
      elevation: 0,
      paddingHorizontal: 16,
    },
    tabBarActiveTintColor: theme.primary,
  },
}))``;
