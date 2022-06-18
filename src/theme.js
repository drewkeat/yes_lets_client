import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#4db6ac",
    },
    secondary: {
      main: "#8c9eff",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
