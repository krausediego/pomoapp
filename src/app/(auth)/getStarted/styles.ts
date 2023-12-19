import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts[700]};
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.content};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts[400]};
`;
