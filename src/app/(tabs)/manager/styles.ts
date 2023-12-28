import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding: 16px 16px 0 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.title};
  font-family: ${({ theme }) => theme.fonts[500]};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(() => ({
  size: 18,
}))`
  color: ${({ theme }) => theme.title};
`;

export const ItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Divider = styled.View`
  height: 0.5px;
  background-color: ${({ theme }) => theme.tertiary};
  width: 100%;
`;
