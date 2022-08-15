import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import "./assets/scss/style.scss";

import Loader from "./components/Loader";

import Main from "./pages/Main";

export const ModeContex = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark-content");
      document.body.classList.add("white-content");
    } else {
      document.body.classList.remove("white-content");
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log(theme);

  return (
    <ModeContex.Provider value={{ theme, setTheme }}>
      <div className="app">
        <Main />
        <Loader loading={loading} />
      </div>
    </ModeContex.Provider>
  );
}

export default App;
