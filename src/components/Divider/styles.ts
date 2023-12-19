import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.tertiary};
`;

export const Label = styled.Text`
  flex: 0.5;
  text-align: center;
  color: ${({ theme }) => theme.content};
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: 20px;
`;
