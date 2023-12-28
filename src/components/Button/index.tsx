import React, { useEffect, useRef } from 'react';
import { type PressableProps, Animated, Easing } from 'react-native';

import * as S from './styles';

interface ButtonProps extends PressableProps, S.ButtonStyleProps {
  children: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  fullWidth,
  isLoading,
  disabled,
  color,
  ...rest
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ).start();
    } else {
      spinValue.setValue(0);
    }
  }, [isLoading, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <S.ButtonStyle
      fullWidth={fullWidth}
      disabled={disabled}
      isLoading={isLoading}
      color={color}
      {...rest}>
      {leftIcon && (
        <S.LeftWrapper fullWidth={fullWidth}>{leftIcon}</S.LeftWrapper>
      )}
      {isLoading ? (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <S.Spinner name="spinner-3" size={40} />
        </Animated.View>
      ) : (
        <S.Label>{children}</S.Label>
      )}
      {rightIcon && (
        <S.RightWrapper fullWidth={fullWidth}>{rightIcon}</S.RightWrapper>
      )}
    </S.ButtonStyle>
  );
};
