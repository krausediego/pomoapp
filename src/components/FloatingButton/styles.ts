import styled from 'styled-components/native';

export const FloatingButtonStyled = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 20px black;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  padding: 14px 20px;
  gap: 10px;
`;
