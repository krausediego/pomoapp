import { Container, Label, Line } from "./styles";

interface DividerProps {
  label: string;
}

export const Divider = ({ label }: DividerProps) => {
  return (
    <Container>
      <Line />
      <Label>{label}</Label>
      <Line />
    </Container>
  );
};
