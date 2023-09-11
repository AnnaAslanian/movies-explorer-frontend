import React from "react";
import "./NavTab.css";
import { Link } from "react-scroll";

function NavTab() {
  
  return (
    <nav className="nav-tab">
      <Link to="about" className="nav-tab__button">
        Узнать больше
      </Link>
    </nav>
  );
}

export default NavTab;