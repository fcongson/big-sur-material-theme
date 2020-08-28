import { common } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./colors";
import typography from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      black: colors.black.main,
      white: colors.white.main,
    },
    primary: colors.blue,
    secondary: colors.gray[0],
    error: colors.red,
    background: {
      default: common.black,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
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
        backgroundColor: colors.translucentBlack[1].main,
        color: common.white,
      },
      colorPrimary: {
        backgroundColor: colors.translucentWhite.main,
        color: common.black,
      },
      colorSecondary: {
        backgroundColor: colors.translucentBlack[0].main,
        color: common.white,
      },
    },
    MuiPaper: {
      root: {
        backdropFilter: "saturate(1.8) blur(20px)",
        WebkitBackdropFilter: "saturate(1.8) blur(20px)",
        backgroundColor: colors.translucentBlack[1].main,
        padding: 16,
      },
    },
  },
});

export default theme;
