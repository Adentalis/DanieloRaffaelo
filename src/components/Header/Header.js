import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="/" className="header-logo">
        Adentalis
      </a>
      <div className="header-toggle"></div>
      <ul>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/projects"> Projekte</a>
        </li>
        <li>
          <a href="/test"> Test</a>
        </li>
      </ul>
    </div>
  );
}
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";

// <AppBar position="sticky">
//   <Toolbar id="back-to-top-anchor">
//     <Button href="/"> Danielus Raffaellus</Button>
//     <Button href="/projects"> Projekte </Button>
//   </Toolbar>
// </AppBar>
