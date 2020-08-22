import { common } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./colors";
import typography from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: colors.black.main,
      white: colors.white.main,
    },
    primary: colors.blue,
    secondary: colors.gray[0],
    error: colors.red,
    background: {
      default: common.white,
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
        backgroundColor: colors.translucentWhite.main,
        color: common.black,
      },
      colorPrimary: {
        backgroundColor: colors.translucentWhite.main,
        color: common.black,
      },
      colorSecondary: {
        backgroundColor: colors.translucentBlack.main,
        color: common.white,
      },
    },
    MuiPaper: {
      root: {
        backdropFilter: "saturate(1.8) blur(20px)",
        WebkitBackdropFilter: "saturate(1.8) blur(20px)",
        backgroundColor: colors.translucentWhite.main,
      },
    },
  },
});

export default theme;
