import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar id="back-to-top-anchor">
        <Button href="/"> Danielus Raffaellus</Button>
        <Button href="/projects"> Projekte </Button>
      </Toolbar>
    </AppBar>
  );
}
