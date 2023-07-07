import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  // I just configured only breakpoints, we can do with spacing, typography, marign
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
