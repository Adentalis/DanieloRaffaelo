import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Folkme from "../Folkme/Folkme.js";

export default function Header(props) {
  return (
    <AppBar position="sticky">
          <Folkme></Folkme>

      <Toolbar id="back-to-top-anchor">
        <Button> Hallo JJ</Button>
        <Button> Hallo {props.startText}</Button>
        <h2>It is </h2>
      </Toolbar>
    </AppBar>
  );
}
