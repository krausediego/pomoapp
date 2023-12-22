import styled from "styled-components/native";
import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("screen").height;

console.log("deviceHeight", deviceHeight);

export const Container = styled.View`
  height: ${deviceHeight}px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const WrapperPrimary = styled.View`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: ${deviceHeight / 2 - 50}px;
  position: absolute;
  top: 0;
`;
