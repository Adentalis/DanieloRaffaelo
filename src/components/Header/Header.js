import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Folkme from "../Folkme/Folkme.js";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Folkme
        targetURL=""
        color="#4c4d4e"
        backgroundColor="#ffafff"
        position="right"
        size="140px"
        ariaLabel="View source on Github"
      />

      <Toolbar id="back-to-top-anchor">
        <Button href="/"> Danielus Raffaellus</Button>
        <Button href="/projects"> Projekte </Button>
      </Toolbar>
    </AppBar>
  );
}
