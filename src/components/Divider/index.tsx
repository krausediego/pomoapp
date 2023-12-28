import React from 'react';

import { Container, Label, Line } from './styles';

export interface DividerProps {
  label?: string;
  color?: 'title' | 'secondary' | 'tertiary';
}

export const Divider: React.FC<DividerProps> = ({
  label,
  color = 'tertiary',
}) => {
  return (
    <Container>
      <Line label={label} color={color} />
      {label && (
        <>
          <Label>{label}</Label>
          <Line />
        </>
      )}
    </Container>
  );
};
