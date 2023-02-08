import { darkTheme } from "@rainbow-me/rainbowkit";

const defaultTheme = darkTheme();
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    accentColor: '#0e76fd'
  }
}