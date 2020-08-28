import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "../styles/useStyles";

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
      <Typography
        variant="body1"
        component="p"
        className={classes.typographyHeroIntro}
      >
        macOS
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        className={classes.typographyHeroHeadline}
      >
        Big Sur
      </Typography>
    </Grid>
  );
};

export default Hero;
