import React from "react";
import { AppContext } from "../../App";
import SettingsSecondaryText from "./SettingsSecondaryText";

const ModeButton = () => {
  const { theme, setTheme } = React.useContext(AppContext);
  const switcher = React.useRef(null);

  const isChecked = theme === "dark" ? true : false;

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    switcher.current.checked = isChecked;
    console.log(switcher.current);
  };

  return (
    // <>
    //   <input
    //     type="checkbox"
    //     id="switch"
    //     ref={switcher}
    //     onChange={() => switchTheme()}
    //   />
    //   <label htmlFor="switch">Toggle</label>
    // </>

    <div className="mode-button">
      <SettingsSecondaryText>Mode:</SettingsSecondaryText>
      <div>
        <p>
          <label htmlFor="switch">☀️</label>
        </p>
        <input
          type="checkbox"
          id="switch"
          ref={switcher}
          checked={isChecked}
          onChange={() => switchTheme()}
        />
        <label className="switch-label" htmlFor="switch">
          Toggle
        </label>
        <p>
          <label htmlFor="switch">🌑</label>
        </p>
      </div>
    </div>

    //     <div className="modeButton" onClick={switchTheme}>
    //       {theme === "dark" ? (
    //         <svg
    //           version="1.0"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="32.000000pt"
    //           height="32.000000pt"
    //           viewBox="0 0 32.000000 32.000000"
    //           preserveAspectRatio="xMidYMid meet"
    //         >
    //           <g
    //             transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
    //             fill="#000000"
    //             stroke="none"
    //           >
    //             <path
    //               d="M146 303 c-8 -21 10 -41 24 -27 11 11 3 44 -10 44 -4 0 -11 -8 -14
    //  -17z"
    //             />
    //             <path d="M47 273 c-10 -9 12 -43 28 -43 8 0 15 7 15 15 0 16 -34 38 -43 28z" />
    //             <path
    //               d="M247 269 c-21 -12 -23 -39 -2 -39 16 0 39 36 27 44 -4 2 -15 0 -25
    //  -5z"
    //             />
    //             <path
    //               d="M106 214 c-15 -16 -26 -38 -26 -54 0 -35 44 -80 79 -80 54 0 95 66
    //  70 112 -29 54 -81 63 -123 22z"
    //             />
    //             <path
    //               d="M10 170 c-13 -9 -13 -11 0 -20 19 -12 35 -8 35 10 0 18 -16 22 -35
    //  10z"
    //             />
    //             <path
    //               d="M275 170 c-7 -11 2 -30 13 -30 4 0 14 5 22 10 13 9 13 11 0 20 -19
    //  12 -27 12 -35 0z"
    //             />
    //             <path d="M51 71 c-6 -10 -8 -21 -4 -24 9 -10 43 12 43 28 0 21 -27 18 -39 -4z" />
    //             <path
    //               d="M230 75 c0 -16 34 -38 43 -28 10 9 -12 43 -28 43 -8 0 -15 -7 -15
    //  -15z"
    //             />
    //             <path d="M146 41 c-7 -11 3 -41 14 -41 11 0 21 30 14 41 -7 12 -21 12 -28 0z" />
    //           </g>
    //         </svg>
    //       ) : (
    //         <svg
    //           version="1.0"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="32.000000pt"
    //           height="32.000000pt"
    //           viewBox="0 0 32.000000 32.000000"
    //           preserveAspectRatio="xMidYMid meet"
    //         >
    //           <g
    //             transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
    //             fill="#000000"
    //             stroke="none"
    //           >
    //             <path
    //               d="M84 301 c-112 -68 -108 -220 6 -279 80 -41 178 -8 217 74 20 41 12
    // 52 -21 30 -50 -32 -138 -9 -166 45 -12 21 -9 83 5 127 9 27 0 28 -41 3z"
    //             />
    //           </g>
    //         </svg>
    //       )}
    //    </div>
  );
};

export default ModeButton;
