import React from "react";
import Translate from "../Translate";
import ModeButton from "./ModeButton";
import TranslateToggle from "./TranslateToggle";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "sidebar active" : "sidebar"}>
      <ul className="sidebar__links">
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>

        <div className="header-button">
          <a href="">{"Blog"}</a>
        </div>

        <li className="sidebar__actions">
          <ModeButton />
          <TranslateToggle />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
