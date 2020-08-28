import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useStyles } from "../styles/useStyles";

const Grids = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <Paper className={classes.widgetSmall}></Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.widgetSmall}></Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.widgetMedium}></Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.widgetLarge}></Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.widgetLarge}></Paper>
      </Grid>
    </Grid>
  );
};

export default Grids;
