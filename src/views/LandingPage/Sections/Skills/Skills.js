import React from "react";

import image from "../../../../assets/img/table-tennis.jpg";

export default function Intro(props) {
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "auto",
        backgroundPosition: "top center",
        backgroundPositionY: "-560px",
        height: "900px",
        color: "white",
        fontSize: "3em",
      }}
    ></div>
  );
}
