import React from "react";
import Navlink from "./Navlink";
import Logo from "./Logo";

function Sidebar({ width }) {
  return (
    <div className={`${width} p-5`}>
      <Logo />
      <Navlink />
    </div>
  );
}

export default Sidebar;
