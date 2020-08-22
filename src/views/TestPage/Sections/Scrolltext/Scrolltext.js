import React from "react";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import image from "../../../../assets/img/profile-bg.jpg";

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
  window: PropTypes.func,
};

export default function Scrolltext(props) {
  return (
    <div
      style={{
        display: "grid",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "auto",
        backgroundPosition: "top center",
        color: "red",
      }}
    >
      <Button color="primary">Danielus Rafaellus ist Bombardus</Button>
      <input
        type="range"
        min="1"
        max="100"
        //value="50"
        class="slider"
        id="myRange"
      />

      {[...new Array(50)].map(() => `J ist die beste! `).join("\n")}
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
