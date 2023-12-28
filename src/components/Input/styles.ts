import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface InputStyledProps {
  error?: boolean;
}

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.View<ContainerProps>`
  display: flex;
  gap: 10px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Wrapper = styled.View`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const LeftIconWrapper = styled.View`
  position: absolute;
  left: 16px;
  z-index: 1;
`;

export const Icon1 = styled(MaterialIcons)`
  color: ${({ theme }) => theme.content};
`;

export const Icon2 = styled(Ionicons)`
  color: ${({ theme }) => theme.content};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[600]};
`;

export const RightIconWrapper = styled.View`
  position: absolute;
  right: 16px;
  z-index: 1;
`;

export const MessageLabel = styled.Text`
  color: ${({ theme }) => theme.error};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[500]};
  margin-left: 12px;
`;

export const InputStyled = styled.TextInput.attrs<InputStyledProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.placeholder,
  }),
)`
  background-color: ${({ theme }) => theme.secondary};
  height: 58px;
  border-radius: 8px;
  padding: 0px 44px;
  color: ${({ theme }) => theme.title};
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.error};
    `}
`;
