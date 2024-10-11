import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}, Akhil M Mathew</p>
    </footer>
  );
}

export default Footer;
