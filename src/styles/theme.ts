export interface ThemeProps {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  title: string;
  content: string;
  placeholder: string;
  error: string;
  fonts: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

const fonts: ThemeProps["fonts"] = {
  100: "Urbanist_100Thin",
  200: "Urbanist_200ExtraLight",
  300: "Urbanist_300Light",
  400: "Urbanist_400Regular",
  500: "Urbanist_500Medium",
  600: "Urbanist_600SemiBold",
  700: "Urbanist_700Bold",
  800: "Urbanist_800ExtraBold",
  900: "Urbanist_900Black",
};

export const lightTheme: ThemeProps = {
  background: "#FFFFFF",
  primary: "#FF6347",
  secondary: "#FFFFFF",
  tertiary: "#FFF3F0",
  title: "#212121",
  content: "#616161",
  placeholder: "#9D9E9E",
  error: "#FF6584",
  fonts,
};

export const darkTheme: ThemeProps = {
  background: "#181A20",
  primary: "#FF6347",
  secondary: "#1F222A",
  tertiary: "#35383F",
  title: "#FFFFFF",
  content: "#EEEEEE",
  placeholder: "#9E9E9F",
  error: "#FF6584",
  fonts,
};
