import React from "react";
import github from "./github.png";
import linkedin from "./linkedin.png";
// Here we import the Footer.css file to grant access to some additional classNames
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="footerEl">
      <footer className="footer">
        <ul>
          {/* <li>
          <a href="mailto:kayjinyi@gmail.com">kayjinyi@gmail.com</a>
        </li> */}

          <li>
            <a href="https://github.com/kayjinyi">
              {" "}
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yi-jin-4912bb33/">
              {" "}
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
