import { React } from "react";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar__container}>
      <img src="../images/logo-placeholder" className={classes.logo} />
      <div className={classes.navbar__links}>
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
        <button>website builder</button>
      </div>
    </div>
  );
};

export default Navbar;
