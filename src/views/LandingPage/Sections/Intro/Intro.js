import React from "react";

import image from "../../../../assets/img/banner.png";

export default function Intro(props) {
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "auto",
        backgroundPosition: "top center",
        height: "500px",
        color: "white",
        fontSize: "3em"
      }}
    >
      This is Daniel
    </div>
  );
}
