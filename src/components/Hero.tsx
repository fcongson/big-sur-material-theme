import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: "100vh",
  },
  heroIntro: {
    color: theme.palette.common.white,
    fontSize: "3.75rem",
    fontWeight: 500,
    lineHeight: 1,
  },
  heroHeadline: {
    color: theme.palette.common.white,
    fontSize: "15rem",
    fontWeight: 500,
    lineHeight: 1,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.hero}
    >
      <Typography variant="body1" component="p" className={classes.heroIntro}>
        macOS
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        className={classes.heroHeadline}
        gutterBottom
      >
        Big Sur
      </Typography>
    </Grid>
  );
};

export default Hero;
