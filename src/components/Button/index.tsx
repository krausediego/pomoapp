import { forwardRef, memo, useEffect, useRef } from "react";
import { type PressableProps, Animated, Easing } from "react-native";
import {
  ButtonStyle,
  ButtonStyleProps,
  Label,
  LeftWrapper,
  Spinner,
} from "./styles";

interface ButtonProps extends PressableProps, ButtonStyleProps {
  children: string;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
}

const ButtonRef = (
  { children, leftIcon, fullWidth, isLoading, disabled, ...rest }: ButtonProps,
  ref: any
) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    } else {
      spinValue.setValue(0);
    }
  }, [isLoading]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ButtonStyle
      ref={ref}
      fullWidth={fullWidth}
      disabled={disabled}
      isLoading={isLoading}
      {...rest}
    >
      {leftIcon && <LeftWrapper fullWidth={fullWidth}>{leftIcon}</LeftWrapper>}
      {isLoading ? (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Spinner name="spinner-3" size={40} />
        </Animated.View>
      ) : (
        <Label>{children}</Label>
      )}
    </ButtonStyle>
  );
};

export const Button = memo(forwardRef(ButtonRef));
