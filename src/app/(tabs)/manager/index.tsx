import { Text } from "react-native";
import * as S from "./styles";
import { Stack } from "expo-router";

export default function ManagerScreen() {
  return (
    <S.Container
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ color: "white" }}>Manager</Text>
    </S.Container>
  );
}
