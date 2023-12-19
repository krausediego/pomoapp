import { Text } from "react-native";
import * as S from "./styles";
import { Stack } from "expo-router";
import CircularProgress, {
  ProgressRef,
} from "react-native-circular-progress-indicator";
import { Button } from "@/components";
import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";

export default function PomodoroScreen() {
  const progressRef = useRef<ProgressRef>(null);

  const maxValue = 10;

  useEffect(() => {
    progressRef.current?.pause();
  }, [progressRef]);

  useEffect(() => {
    // Solicitar permissões para notificações
    const getNotificationPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Você precisa permitir notificações para usar este recurso.");
      }
    };

    getNotificationPermissions();
  }, []);

  const handleSendNotification = async () => {
    try {
      // Solicitar permissões para notificações
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Você precisa permitir notificações para usar este recurso.");
        return;
      }

      // Enviar notificação
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Notificação de Teste",
          body: "Esta é uma notificação de teste.",
        },
        trigger: null, // Envia imediatamente
      });

      alert("Notificação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar notificação:", error);
    }
  };

  return (
    <S.Container
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ color: "white" }}>Pomodoro</Text>
      <CircularProgress
        ref={progressRef}
        // showProgressValue={false}
        value={0}
        radius={120}
        maxValue={maxValue}
        initialValue={maxValue}
        progressValueColor={"#fff"}
        activeStrokeWidth={15}
        inActiveStrokeWidth={15}
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
      <Button onPress={handleSendNotification}>Notificação</Button>
    </S.Container>
  );
}
