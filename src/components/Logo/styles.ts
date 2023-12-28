import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { LogoProps } from '.';

export const LogoStyle = styled(MaterialCommunityIcons)<LogoProps>`
  color: ${({ theme, logoColor }) =>
    logoColor === 'primary' ? theme.primary : 'white'};
`;
