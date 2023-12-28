import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text } from 'react-native';

import { FloatingButton, Input, StackHeader } from '@/components';
import { router } from 'expo-router';

import * as S from './styles';

const ManagerScreen: React.FC = () => {
  const { control } = useForm();
  const [showPopover, setShowPopover] = useState(false);

  const handleNavigate = (route: any): void => {
    setShowPopover(false);
    router.replace(route);
  };

  return (
    <S.Container>
      <StackHeader />
      <Input
        fullWidth
        name="search"
        control={control}
        leftIcon="search"
        placeholder="Buscar"
      />
      <FloatingButton setShowPopover={setShowPopover} showPopover={showPopover}>
        <Text>Teste</Text>
        {/* <S.ItemContainer>
          <S.Icon name="file-image-plus-outline" />
          <S.Title>Tarefa</S.Title>
        </S.ItemContainer>
        <S.Divider />
        <S.ItemContainer>
          <S.Icon name="toolbox-outline" />
          <S.Title>Projeto</S.Title>
        </S.ItemContainer>
        <S.Divider />
        <S.ItemContainer onPress={() => handleNavigate('/manager/NewTag/')}>
          <S.Icon name="tag-outline" />
          <S.Title>Tag</S.Title>
        </S.ItemContainer> */}
      </FloatingButton>
    </S.Container>
  );
};

export default ManagerScreen;
