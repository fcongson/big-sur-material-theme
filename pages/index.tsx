import Container from "@material-ui/core/Container";
import React from "react";
import Grids from "../src/components/Grids";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import { useStyles } from "../src/styles/useStyles";

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="md" className={classes.main}>
        <Hero />
        <Grids />
      </Container>
    </div>
  );
};

export default Index;
