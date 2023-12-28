import { EvilIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export interface ButtonStyleProps {
  color?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  disabled?: boolean | null;
  isLoading?: boolean;
}

export const ButtonStyle = styled.Pressable<ButtonStyleProps>`
  height: 58px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  ${({ disabled, isLoading }) =>
    (disabled || isLoading) &&
    css`
      opacity: 0.5;
    `}
  ${({ color }) =>
    (!color || color === 'primary') &&
    css`
      background-color: ${({ theme }) => theme.primary};
    `};
  ${({ color }) =>
    color === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.secondary};
      border: 1px solid ${({ theme }) => theme.tertiary};
    `};
  ${({ color }) =>
    color === 'tertiary' &&
    css`
      background-color: ${({ theme }) => theme.tertiary};
    `};
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : css`
          gap: 8px;
          padding: 0px 18px;
        `}
`;

export const LeftWrapper = styled.View<Pick<ButtonStyleProps, 'fullWidth'>>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      position: absolute;
      left: 16px;
    `}
`;

export const RightWrapper = styled.View<Pick<ButtonStyleProps, 'fullWidth'>>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      position: absolute;
      right: 30px;
    `}
`;

export const Spinner = styled(EvilIcons)`
  color: ${({ theme }) => theme.title};
`;

export const Label = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 16px;
  letter-spacing: 0.2px;
`;
