import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div>
      <header>
        <h1>YI JIN</h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/">About Me</Link>
            </li>

            <li className="nav-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavTabs;
