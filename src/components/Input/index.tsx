import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Controller } from 'react-hook-form';
import { type TextInputProps, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  leftIcon: keyof typeof MaterialIcons.glyphMap;
  control?: any;
  name: string;
  message?: string;
  fullWidth?: boolean;
}

const InputRef: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  {
    label,
    leftIcon,
    secureTextEntry,
    control,
    name,
    message,
    fullWidth,
    ...rest
  },
  ref: any,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordIcon = secureTextEntry;
  const inputElementRef = useRef<any>(null);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleInputPasswordType = (): boolean => {
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
          <S.Container fullWidth={fullWidth}>
            {label && <S.Label>{label}</S.Label>}
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
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
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
