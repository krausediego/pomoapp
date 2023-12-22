import { Text } from "react-native";
import * as S from "./styles";
import { Stack } from "expo-router";
import CircularProgress, {
  ProgressRef,
} from "react-native-circular-progress-indicator";
import { Button } from "@/components";
import { useEffect, useRef } from "react";
import { darkTheme } from "@/styles/theme";

export default function PomodoroScreen() {
  const progressRef = useRef<ProgressRef>(null);

  const maxValue = 10;

  useEffect(() => {
    progressRef.current?.pause();
  }, [progressRef]);

  return (
    <S.Container>
      <S.WrapperPrimary />
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ color: "white" }}>Pomodoro</Text>
      <CircularProgress
        ref={progressRef}
        // showProgressValue={false}
        value={0}
        radius={140}
        maxValue={maxValue}
        initialValue={maxValue}
        progressValueColor={"#fff"}
        activeStrokeColor={darkTheme.primary}
        activeStrokeWidth={30}
        inActiveStrokeWidth={30}
        duration={maxValue * 1000}
        onAnimationComplete={() => alert("time out")}
        // progressFormatter={(value: number) => {
        //   return value;
        // }}
      />
      <Button
        onPress={() => {
          progressRef.current?.reAnimate();
          progressRef.current?.pause();
        }}
      >
        Restart
      </Button>
      <Button onPress={() => progressRef.current?.pause()}>Pause</Button>
      <Button onPress={() => progressRef.current?.play()}>Start</Button>
    </S.Container>
  );
}
