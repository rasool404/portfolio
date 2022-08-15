import React from "react";
import ModeButton from "./ModeButton";

const SettingsButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(isOpen);

  const rootEl = React.useRef(null);

  React.useEffect(() => {
    const onClick = (e) =>
      rootEl.current.contains(e.target) || setIsOpen(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="settings-wrapper" ref={rootEl}>
      <div className="settings-button" onClick={() => setIsOpen(!isOpen)}>
        settings
      </div>
      <div className={isOpen ? "settings-block active" : "settings-block"}>
        <ModeButton setIsDropdownOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default SettingsButton;
