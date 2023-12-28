import React, { useEffect } from 'react';
import CircularProgress, {
  ProgressRef,
} from 'react-native-circular-progress-indicator';

import { darkTheme } from '@/styles/theme';

import * as S from './styled';

interface PomodoroTimer {
  controller: React.RefObject<ProgressRef>;
  timerValue: number;
}

export const PomodoroTimer: React.FC<PomodoroTimer> = ({
  timerValue,
  controller,
}) => {
  useEffect(() => {
    controller.current?.play();
    setTimeout(() => {
      controller.current?.reAnimate();
      controller.current?.pause();
    }, 600);
  }, [controller]);

  const formatValueTimerToClockTime = (value: number): string => {
    'worklet';

    const clockValue = value.toFixed(0);

    const horas = Math.floor(Number(clockValue) / 60);
    const minutos = Number(clockValue) % 60;

    // Formatando para garantir que tenhamos dois dígitos para horas e minutos
    const horasFormatadas = horas < 10 ? `0${horas}` : horas.toString();
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos.toString();

    // Construir a string de horário
    const horarioFormatado = `${horasFormatadas}:${minutosFormatados}`;

    return horarioFormatado;
  };

  return (
    <S.ContainerTimer>
      <CircularProgress
        ref={controller}
        value={0}
        radius={140}
        maxValue={timerValue}
        initialValue={timerValue}
        progressValueColor="#fff"
        activeStrokeColor={darkTheme.primary}
        activeStrokeWidth={30}
        inActiveStrokeWidth={30}
        duration={timerValue * 1000}
        // onAnimationComplete={() => setRestart(true)}
        progressFormatter={(value: number) => {
          'worklet';

          return formatValueTimerToClockTime(value);
        }}
      />
    </S.ContainerTimer>
  );
};
