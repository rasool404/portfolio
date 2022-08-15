import React from "react";

import ModeToggleButton from "./ModeButton";
import SettingsButton from "./SettingsBlock";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="logo">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="148.000000pt"
            height="133.000000pt"
            viewBox="0 0 148.000000 133.000000"
            preserveAspectRatio="xMidYMid meet"
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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills & Tools</a>
            </li>
            <li>
              <a href="">Works</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ol>
          <div className="button">
            <a href="">Blog</a>
          </div>
          <div>
            <SettingsButton />
          </div>
        </div>
        <div className="menu"></div>
      </nav>
    </header>
  );
};

export default Header;
