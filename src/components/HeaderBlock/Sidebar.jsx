import React from "react";
import Translate from "../Translate";
import ModeButton from "./ModeButton";
import TranslateToggle from "./TranslateToggle";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "sidebar active" : "sidebar"}>
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <a href="">
            <Translate>nav_about</Translate>
          </a>
        </li>
        <li className="sidebar__link">
          <a href="">
            <Translate>nav_skills_and_tools</Translate>
          </a>
        </li>
        <li className="sidebar__link">
          <a href="">
            <Translate>nav_works</Translate>
          </a>
        </li>
        <li className="sidebar__link">
          <a href="">
            <Translate>nav_testimonials</Translate>
          </a>
        </li>
        <li className="sidebar__link">
          <a href="">
            <Translate>nav_contact</Translate>
          </a>
        </li>

        <div className="header-button">
          <a href="">
            <Translate>nav_blog</Translate>
          </a>
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
