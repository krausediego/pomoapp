import { Stack } from 'expo-router';
import styled from 'styled-components/native';

import { StackHeaderProps } from '.';

export const StackHeaderStyled = styled(Stack.Screen).attrs<StackHeaderProps>(
  ({ theme, background }) => ({
    options: {
      headerStyle: {
        backgroundColor:
          background === 'background' ? theme.background : theme.primary,
      },
      headerShadowVisible: false,
      title: 'Pomoapp',
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: theme.fonts[600],
        color: theme.title,
      },
    },
  }),
)``;
