import React from "react";
// nodejs library that concatenates classes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// @material-ui/icons

export default function Header(props) {
 
  return (
    <AppBar position="sticky">
      <Toolbar id="back-to-top-anchor">
        <Button> Hallo JJ</Button>
      </Toolbar>
    </AppBar>
  );
}
