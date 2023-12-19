import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const LogoStyle = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.primary};
`;
