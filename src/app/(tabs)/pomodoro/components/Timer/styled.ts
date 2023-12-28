import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const deviceHeight = Dimensions.get('screen').height;

export const ContainerTimer = styled.View`
  width: 320px;
  height: 320px;
  border-radius: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  top: ${deviceHeight / 2 - 160 - 98}px;
`;
