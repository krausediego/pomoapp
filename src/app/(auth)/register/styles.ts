import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.title};
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.content};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts[400]};
`;

export const HaveAccountText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts[400]};
  color: ${({ theme }) => theme.content};
`;

export const LoginText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts[600]};
  color: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const ContentWrapper = styled.View`
  display: flex;
  gap: 22px;
`;
