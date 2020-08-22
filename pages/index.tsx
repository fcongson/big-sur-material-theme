import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import React from "react";
import backgroundImageDark from "../images/macOS-Big-Sur-Vector-Wave-Dark.jpg";
import backgroundImage from "../images/macOS-Big-Sur-Vector-Wave.jpg";
import Copyright from "../src/components/Copyright";
import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import { useThemeContext } from "../src/utils/useThemeContext";

const useStyles = makeStyles((theme) => ({
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
}));

export default function Index() {
  const classes = useStyles();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="secondary">
        <Container maxWidth="lg" className={classes.header}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.header}
          >
            <Grid item>
              <Typography variant="subtitle1">Material-UI Theme</Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <AppBar position="sticky" color="primary">
        <Container maxWidth="lg" className={classes.header}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.header}
          >
            <Typography variant="h6">macOS Big Sur</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={theme.palette.type === "dark"}
                  onChange={toggleTheme}
                  name="darkMode"
                  color="primary"
                />
              }
              label="Dark Mode"
            />
          </Grid>
        </Container>
      </AppBar>
      <Container maxWidth="sm" className={classes.main}>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.container}
        >
          <Grid item>
            <Paper className={classes.content}>
              <Typography variant="h4" component="h1" gutterBottom>
                Next.js with TypeScript example
              </Typography>
              <Link href="/about" color="secondary">
                Go to the about page
              </Link>
              <ProTip />
              <Copyright />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
