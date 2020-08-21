import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#292929",
      white: "#FFFFFF",
    },
    primary: colors.blue,
    secondary: colors.gray[0],
    error: colors.red,
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      "roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
