import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useThemeContext } from "../utils/useThemeContext";

const useStyles = makeStyles(() => ({
  secondaryAppBar: {
    height: "44px",
    padding: "0px",
  },
  header: {
    height: "100%",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <AppBar
        position="relative"
        color="secondary"
        elevation={0}
        className={classes.secondaryAppBar}
      >
        <Container maxWidth="md" className={classes.header}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.header}
          >
            <Typography variant="subtitle1">Material-UI Theme</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={theme.palette.type === "dark"}
                  onChange={toggleTheme}
                  name="darkMode"
                  color="primary"
                  size="small"
                />
              }
              label="Dark Mode"
              labelPlacement="start"
            />
          </Grid>
        </Container>
      </AppBar>
      <AppBar position="sticky" color="default" elevation={0}>
        <Container maxWidth="md" className={classes.header}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.header}
          >
            <Typography variant="h6">macOS Big Sur</Typography>
            <Link href="/about" color="secondary">
              Overview
            </Link>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
