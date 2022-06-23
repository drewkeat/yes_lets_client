import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#20B1A9",
    },
    secondary: {
      main: "#8c9eff",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
