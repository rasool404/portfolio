import React from "react";
import { AppContext } from "../../App";
import SettingsSecondaryText from "./SettingsSecondaryText";

const TranslateToggle = () => {
  const { language, setLanguage } = React.useContext(AppContext);
  return (
    <div className="language">
      <SettingsSecondaryText>Language:</SettingsSecondaryText>
      <div className="language__wrapper">
        <p
          className={
            language === "en" ? "language__item active" : "language__item"
          }
          onClick={() => setLanguage("en")}
        >
          English
        </p>
        <p
          className={
            language === "ru" ? "language__item active" : "language__item"
          }
          onClick={() => setLanguage("ru")}
        >
          Russian
        </p>
      </div>
    </div>
  );
};

export default TranslateToggle;
