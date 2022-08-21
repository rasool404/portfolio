// components/Translate.jsx
import { useContext } from "react";
import { AppContext } from "../App";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const Translate = ({ children }) => {
  const { language } = useContext(AppContext);
  const translate = (text) => {
    switch (language) {
      case "en":
        if (Object.keys(en).includes(text)) {
          return en[text];
        }
      case "ru":
        if (Object.keys(ru).includes(text)) {
          return ru[text];
        }
      default:
        if (Object.keys(en).includes(text)) {
          return en[text];
        }
    }
    console.log(text);

    return text;
  };
  return translate(children);
};

export default Translate;
