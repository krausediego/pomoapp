import { View, Animated, Easing } from "react-native";
import Modal from "react-native-modal";
import { Container, Spinner, Label } from "./styles";
import { useEffect, useRef } from "react";
import { BlurView } from "expo-blur";

interface SpinnerModalProps {
  label: string;
  open: boolean;
}

export const SpinnerModal = ({ label, open }: SpinnerModalProps) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View>
      <Modal
        style={{ justifyContent: "center", alignItems: "center" }}
        isVisible={open}
        customBackdrop={
          <BlurView
            intensity={70}
            tint="dark"
            style={{ flex: 1, backgroundColor: "black" }}
          />
        }
        backdropOpacity={0.98}
      >
        <Container>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Spinner name="spinner-3" size={100} />
          </Animated.View>
          <Label>{label}</Label>
        </Container>
      </Modal>
    </View>
  );
};
