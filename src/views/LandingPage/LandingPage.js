import React from "react"
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import image from "../../assets/img/pic.jpg";

import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";

import styles from "../../assets/jss/headerStyle.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Button color="primary">Danielus Rafaellus ist Bombar!!!</Button>
      </div>
    </div>
  );
}
