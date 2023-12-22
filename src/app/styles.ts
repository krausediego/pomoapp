import styled from "styled-components/native";
import { StatusBar, Dimensions, Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-screen-helper";

const statusBarHeight = StatusBar.currentHeight;

export const Wrapper = styled.View`
  height: ${Dimensions.get("screen").height}px;
  background-color: ${({ theme }) => theme.background};
  padding-top: ${statusBarHeight}px;
  padding-bottom: ${Platform.OS === "android" ? 25 : getBottomSpace()}px;
`;
