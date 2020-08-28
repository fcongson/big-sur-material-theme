import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

export const useStyles = makeStyles(() => ({
  widgetSmall: {
    width: 155,
    height: 155,
  },
  widgetMedium: {
    width: 329,
    height: 155,
  },
  widgetLarge: {
    width: 329,
    height: 345,
  },
}));

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
