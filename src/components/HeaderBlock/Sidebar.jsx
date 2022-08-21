import React from "react";
import Translate from "../Translate";
import ModeButton from "./ModeButton";
import TranslateToggle from "./TranslateToggle";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "sidebar active" : "sidebar"}>
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <a href="">{<Translate>nav_about</Translate> || "About"}</a>
        </li>
        <li className="sidebar__link">
          <a href="">
            {<Translate>nav_skills_and_tools</Translate> || "Skills & Tools"}
          </a>
        </li>
        <li className="sidebar__link">
          <a href="">{<Translate>nav_works</Translate> || "Works"}</a>
        </li>
        <li className="sidebar__link">
          <a href="">
            {<Translate>nav_testimonials</Translate> || "Testimonials"}
          </a>
        </li>
        <li className="sidebar__link">
          <a href="">{<Translate>nav_contact</Translate> || "Contact"}</a>
        </li>

        <div className="header-button">
          <a href="">{<Translate>nav_blog</Translate> || "Blog"}</a>
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
