import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Exo 2, sans-serif",
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#4438ca",
      light: "#243136",
      dark: "#4e46e5",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#d11717",
      light: "#d11717",
      dark: "#d11717",
    },
    tertiary: {
      main: "#FFFFFF",
    },
    quaternary: {
      main: "#243136",
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#111827",
      content: "#AAAAAA",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Open Sans", "Arial", sans-serif`,
  },
});

export default theme;
