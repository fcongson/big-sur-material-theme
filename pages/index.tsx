import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import backgroundImageDark from "../images/macOS-Big-Sur-Vector-Wave-Dark.jpg";
import backgroundImage from "../images/macOS-Big-Sur-Vector-Wave.jpg";
import Grids from "../src/components/Grids";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";

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
  main: {
    padding: "4rem",
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Hero />
      <Container maxWidth="md" className={classes.main}>
        <Grids />
      </Container>
    </div>
  );
};

export default Index;
