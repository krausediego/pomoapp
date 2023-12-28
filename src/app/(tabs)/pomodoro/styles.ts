import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-screen-helper';

import styled from 'styled-components/native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;

console.log('deviceWidth', deviceWidth);

export const Container = styled.View`
  height: ${deviceHeight - getStatusBarHeight() - 25 - 98}px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[600]};
  color: ${({ theme }) => theme.title};
  font-size: 24px;
`;

export const WrapperPrimary = styled.View`
  background-color: ${({ theme }) => theme.primary};
  width: ${deviceWidth}px;
  height: ${deviceHeight / 2 - 98}px;
  position: absolute;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 16px;
  align-items: center;
  gap: 20px;
`;

export const Footer = styled.View`
  height: 20%;
  z-index: 1;
`;
