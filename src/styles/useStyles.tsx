import makeStyles from "@material-ui/core/styles/makeStyles";
import backgroundImageDark from "../../images/macOS-Big-Sur-Vector-Wave-Dark.jpg";
import backgroundImage from "../../images/macOS-Big-Sur-Vector-Wave.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url("${
      theme.palette.type === "light" ? backgroundImage : backgroundImageDark
    }")`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "400vh",
  },
  secondaryAppBar: {
    height: "44px",
  },
  header: {
    height: "100%",
  },
  main: {
    padding: "4rem",
  },
  container: {
    marginBottom: "8rem",
  },
  content: {
    padding: "4rem",
  },
  hero: {
    minHeight: 0,
  },
  typographyHeroIntro: {
    color: theme.palette.common.white,
    fontSize: "3.75rem",
    fontWeight: 500,
    lineHeight: 1,
  },
  typographyHeroHeadline: {
    color: theme.palette.common.white,
    fontSize: "15rem",
    fontWeight: 500,
    lineHeight: 1,
  },
}));
