import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Copyright from "../src/components/Copyright";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import { useStyles } from "../src/styles/useStyles";

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="md" className={classes.main}>
        <Hero />
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
};

export default Index;
