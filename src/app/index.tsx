import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Root() {
  return <Redirect href="/getStarted/" />;
}
