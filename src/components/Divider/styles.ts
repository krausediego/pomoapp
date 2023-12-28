import styled, { css } from 'styled-components/native';

import { DividerProps } from '.';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Line = styled.View<DividerProps>`
  flex: 1;
  height: 1px;
  background-color: ${({ theme, color }) => color && theme[color]};
  ${({ label }) =>
    !label &&
    css`
      width: 100%;
    `}
`;

export const Label = styled.Text`
  flex: 0.5;
  text-align: center;
  color: ${({ theme }) => theme.content};
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: 20px;
`;
