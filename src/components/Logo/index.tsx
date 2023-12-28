import React from 'react';

import { LogoStyle } from './styles';

export interface LogoProps {
  logoColor?: 'primary' | 'white';
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  logoColor = 'primary',
  size = 80,
}) => {
  return <LogoStyle logoColor={logoColor} name="clock-fast" size={size} />;
};
