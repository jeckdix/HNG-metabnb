import React from "react";
import classes from "./NavBar.module.css";
import { HiMenu } from "react-icons/hi";
import logo from "../../Assets/logo.png";

const handleMenuClick = () => {
  console.log("menu was clicked");
};
export const NavBar = () => {
  return (
    <nav>
        <div className={classes['mobile-menu']}>
          <div>
            <img className={classes.logo} src={logo} alt="logo" />
          </div>

          <div className={classes["action-button"]}>
            <HiMenu size="20" onClick={handleMenuClick} />
            {/* <button className={classes["connect-button"]}>Connect wallet</button> */}
          </div>
        </div>

        {/* <ul>
          <li> Home</li>
          <li>Place to stay</li>
          <li> NFTs</li>
          <li>Community</li>
        </ul> */}

      {/* Desktop Navigation Bar  */}
      <div className={classes["desktop-view"]}>
        <div>
          <div>Logo</div>
          <h2>Metabnb</h2>
        </div>
        <ul>
          <li> Home</li>
          <li>Place to stay</li>
          <li> NFTs</li>
          <li>Community</li>
        </ul>
        <div> Connect to wallet</div>
      </div>
    </nav>
  );
};
