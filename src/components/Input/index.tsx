import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { type TextInputProps } from "react-native";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";

interface InputProps extends TextInputProps {
  label: string;
  leftIcon: keyof typeof MaterialIcons.glyphMap;
  control: any;
  name: string;
  message?: string;
}

const InputRef = (
  {
    label,
    leftIcon,
    secureTextEntry,
    control,
    name,
    value,
    message,
    ...rest
  }: InputProps,
  ref: any
) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordIcon = secureTextEntry;
  const inputElementRef = useRef<any>(null);

  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const handleInputPasswordType = () => {
    if (!secureTextEntry) {
      return false;
    }
    return !showPassword;
  };

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => {
        return (
          <S.Container>
            <S.Label>{label}</S.Label>
            <S.Wrapper>
              <S.LeftIconWrapper>
                <S.Icon1 name={leftIcon} size={18} />
              </S.LeftIconWrapper>
              <S.InputStyled
                ref={ref}
                secureTextEntry={handleInputPasswordType()}
                onChangeText={onChange}
                value={value}
                error={!!message}
                {...rest}
              />
              {showPasswordIcon && (
                <S.RightIconWrapper>
                  <S.Icon2
                    onPress={handleShowPassword}
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={18}
                  />
                </S.RightIconWrapper>
              )}
            </S.Wrapper>
            {!!message && <S.MessageLabel>{message}</S.MessageLabel>}
          </S.Container>
        );
      }}
    />
  );
};

export const Input = forwardRef(InputRef);
