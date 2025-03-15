// src/theme.js
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      dark: "#1976D2",
    },
    secondary: {
      main: "#FF5722",
    },
    background: {
      default: "#F5F5F5",
    },
    text: {
      primary: "#212121",
    },
  },
});

export default theme;
