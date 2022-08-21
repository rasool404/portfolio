import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import "./assets/scss/style.scss";

import Loader from "./components/Loader";

import Main from "./pages/Main";

export const AppContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(false);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const defaultLanguage =
    window.navigator.userLanguage || window.navigator.language;
  const [language, setLanguage] = React.useState(defaultLanguage);
  console.log(language);

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
    }, 3500);
  }, []);

  console.log(theme);

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      <div className="app">{loading ? <Loader /> : <Main />}</div>
    </AppContext.Provider>
  );
}

export default App;
