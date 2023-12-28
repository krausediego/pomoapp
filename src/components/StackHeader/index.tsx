import React from 'react';

import { StackHeaderStyled } from './styles';

export interface StackHeaderProps {
  background?: 'background' | 'primary';
}

export const StackHeader: React.FC<StackHeaderProps> = ({
  background = 'background',
}) => {
  return <StackHeaderStyled background={background} />;
};
