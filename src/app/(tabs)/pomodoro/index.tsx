import React, { useRef, useState } from 'react';
import { ProgressRef } from 'react-native-circular-progress-indicator';

import { Button, StackHeader } from '@/components';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { PomodoroTimer } from './components/Timer';
import * as S from './styles';

const PomodoroScreen: React.FC = () => {
  const progressRef = useRef<ProgressRef>(null);
  const [restart, setRestart] = useState(false);

  return (
    <S.Container>
      <S.WrapperPrimary />
      <StackHeader background="primary" />
      <S.Header>
        <Button
          color="secondary"
          fullWidth
          rightIcon={<AntDesign name="down" color="white" size={18} />}>
          Selecione a task
        </Button>
      </S.Header>
      <PomodoroTimer controller={progressRef} timerValue={1500} />
      <S.Footer>
        <Button
          onPress={() => {
            if (restart) {
              setRestart(false);
              progressRef.current?.reAnimate();
              return progressRef.current?.pause();
            }

            progressRef.current?.play();
          }}
          leftIcon={<Entypo name="controller-play" color="white" size={30} />}>
          {restart ? 'Reiniciar' : 'Iniciar Timer'}
        </Button>
      </S.Footer>
    </S.Container>
  );
};

export default PomodoroScreen;
