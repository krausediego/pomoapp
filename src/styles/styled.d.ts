import "styled-components/native";

import { type ThemeProps } from "./theme";
// Import type from above file
declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeProps {} // extends the global DefaultTheme with our ThemeType.
}
