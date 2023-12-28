import React from 'react';
import { View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Popover } from 'native-base';

import * as S from './styles';

interface FloatingButtonProps {
  children: React.ReactNode;
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>;
  showPopover: boolean;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  setShowPopover,
  showPopover,
}) => {
  return (
    <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
      <Popover
        placement="top right"
        trigger={triggerProps => (
          <S.FloatingButtonStyled {...triggerProps}>
            <MaterialCommunityIcons name="plus" size={30} color="white" />
          </S.FloatingButtonStyled>
        )}>
        <Popover.Content>
          <Popover.Arrow />
          <Popover.Body>
            <S.Container>{children}</S.Container>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </View>
  );
};
