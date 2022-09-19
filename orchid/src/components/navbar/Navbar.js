import { React } from "react";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className="container">
      <div className="navbar__links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
