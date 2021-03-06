import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
