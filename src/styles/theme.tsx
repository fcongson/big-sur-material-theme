import { common } from "@material-ui/core/colors";
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
      default: common.white,
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
  shape: {
    borderRadius: 24,
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: 66,
      },
      colorDefault: {
        backdropFilter: "saturate(1.8) blur(20px)",
        WebkitBackdropFilter: "saturate(1.8) blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        color: common.black,
      },
      colorPrimary: {
        backdropFilter: "saturate(1.8) blur(20px)",
        WebkitBackdropFilter: "saturate(1.8) blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        color: common.black,
      },
      colorSecondary: {
        height: 44,
        backdropFilter: "saturate(1.8) blur(20px)",
        WebkitBackdropFilter: "saturate(1.8) blur(20px)",
        backgroundColor: "rgba(0,0,0,0.8)",
        color: common.white,
      },
    },
    MuiPaper: {
      root: {
        backdropFilter: "saturate(1.8) blur(20px)",
        WebkitBackdropFilter: "saturate(1.8) blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
      },
    },
  },
});

export default theme;
