import React from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingCart";

function Navbar() {
  return (
    <nav className="header">
      {/* <Link to="/"> */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      {/* </Link> */}

      {/* <Link to="/" className="header__link"> */}
      <div className="header__option">
        <span>About Us</span>
      </div>
      {/* </Link> */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
    </nav>
  );
}

export default Navbar;
