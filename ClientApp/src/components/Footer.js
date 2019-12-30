import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © 2019 {currentYear}</p>
    </footer>
  );
}

export default Footer;
