import React, { Fragment } from "react";
import Translate from "../Translate";
import ModeButton from "./ModeButton";

import SettingsButton from "./SettingsBlock";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 148.000000 133.000000"
          >
            <g
              transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M378 1288 c-38 -22 -61 -59 -268 -417 -117 -202 -117 -202 -8 -391
233 -403 228 -396 271 -423 l41 -27 326 0 326 0 41 26 c34 23 63 65 187 279
80 138 151 266 157 284 22 62 7 101 -136 349 -155 267 -175 296 -219 323 -29
18 -53 19 -356 19 -313 0 -326 -1 -362 -22z m670 -82 c30 -16 314 -501 315
-536 0 -15 -56 -121 -135 -255 -171 -291 -158 -272 -185 -284 -34 -15 -574
-15 -607 0 -32 15 -320 501 -319 539 1 35 291 530 317 540 36 15 587 11 614
-4z"
              />
              <path
                d="M580 645 l0 -235 50 0 50 0 0 90 0 90 29 0 c26 0 35 -10 83 -87 l55
-88 51 -3 c29 -2 52 0 52 3 0 3 -29 49 -65 102 l-65 97 34 28 c41 33 60 85 50
130 -18 84 -67 108 -219 108 l-105 0 0 -235z m202 143 c10 -5 20 -19 24 -32
12 -48 -30 -86 -97 -86 l-29 0 0 63 c0 35 3 66 6 70 7 7 73 -3 96 -15z"
              />
            </g>
          </svg>
        </a>
        <div className="links">
          <ol className="linksList">
            <li>
              <a href="">
                <Translate>nav_about</Translate>
              </a>
            </li>
            <li>
              <a href="">
                <Translate>nav_skills_and_tools</Translate>
              </a>
            </li>
            <li>
              <a href="">
                <Translate>nav_works</Translate>
              </a>
            </li>
            <li>
              <a href="">
                <Translate>nav_testimonials</Translate>
              </a>
            </li>
            <li>
              <a href="">
                <Translate>nav_contact</Translate>
              </a>
            </li>
          </ol>
          <div className="header-button">
            <a href="">
              <Translate>nav_blog</Translate>
            </a>
          </div>
          <div>
            <SettingsButton />
          </div>
        </div>
        <div className="menu">
          <div
            className={
              isMenuOpen
                ? "menu__burger hamburger active"
                : "menu__burger hamburger"
            }
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </div>
          <Sidebar isMenuOpen={isMenuOpen} />
          <div
            className={isMenuOpen ? "menu__cover active" : "menu__cover"}
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
