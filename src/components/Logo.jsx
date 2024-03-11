import React from "react";
import logo from "../assets/logo.png"

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logo} width={width} />
    </div>
  );
}

export default Logo;
