import { EvilIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 75%;
  height: 180px;
  border-radius: 12px;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
`;

export const Spinner = styled(EvilIcons)`
  color: ${({ theme }) => theme.primary};
`;

export const Label = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts[400]};
  color: ${({ theme }) => theme.content};
`;
