import React from "react";
// Here we import the Footer.css file to grant access to some additional classNames
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="mailto:kayjinyi@gmail.com">kayjinyi@gmail.com</a>
        </li>

        <li>
          <a href="https://github.com/kayjinyi">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yi-jin-4912bb33/">LinkedIn</a>
        </li>
        <li>
          <a href="">951.323.1970</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
