import React from "react";
import ModeButton from "./ModeButton";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "sidebar active" : "sidebar"}>
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <a href="">About</a>
        </li>
        <li className="sidebar__link">
          <a href="">Skills & Tools</a>
        </li>
        <li className="sidebar__link">
          <a href="">Works</a>
        </li>
        <li className="sidebar__link">
          <a href="">Testimonials</a>
        </li>
        <li className="sidebar__link">
          <a href="">Contact</a>
        </li>
        <li className="sidebar__actions">
          <ModeButton />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
