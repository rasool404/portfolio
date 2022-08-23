import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { AppContext } from "../App";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import parse from "html-react-parser";

const Translate = ({ children }) => {
  const ref = useRef();
  const { language } = useContext(AppContext);
  let word = ``;
  const translate = (id) => {
    switch (language) {
      case "en":
        if (Object.keys(en).includes(id)) {
          return en[id];
        }
      case "ru":
        if (Object.keys(ru).includes(id)) {
          return ru[id];
        }
      default:
        if (Object.keys(en).includes(id)) {
          return en[id];
        }
    }
    console.log(id);

    return id;
  };

  return parse(translate(children));
};

export default Translate;
