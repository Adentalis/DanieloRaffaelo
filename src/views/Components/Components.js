import React from "react";

//import SectionBasics from "./Sections/SectionBasics.js";
import Button from "@material-ui/core/Button";

import Header from "../../components/Header/Header.js";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import image from "../../assets/img/profile-bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
        alignToTop: true,
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Components(props) {
  return (
    <div>
      <Header></Header>
      <div style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "auto",
          backgroundPosition: "top center"
        }}>
        <Button color="primary">Danielus Rafaellus ist Bombardus</Button>
        <Container >
          <Box my={2} color= "#00ff00">
            {[...new Array(1150)]
              .map(
                () => `J ist die beste! `
              )
              .join("\n")}
          </Box>
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </div>
  );
}
