import React from "react";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import CodeIcon from "@material-ui/icons/Code";
function Header() {
  return (
    <header>
      <h1>
        <LocalCafeIcon />
        Note Keeper
        <CodeIcon />
      </h1>
    </header>
  );
}
export default Header;
