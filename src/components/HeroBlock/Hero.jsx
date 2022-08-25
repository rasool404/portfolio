import React, { Fragment } from "react";
import Translate from "../Translate";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h3 className="hero__sup-title">
          <Translate>hero_sup_title</Translate>
        </h3>
        <h1 className="hero__title">
          <Translate>hero_title</Translate>
        </h1>
        <h2 className="hero__sub-title">
          <Translate>hero_sub_title</Translate>
        </h2>
        <p className="hero__text">
          {/* I'm an <span>independent creative developer</span> who likes to craft
          solid and scalable web products with great user experiences. */}
          <Fragment>
            <Translate>hero_text</Translate>
          </Fragment>
        </p>
        <a href="" className="hero__btn btn">
          <Translate>hero_btn</Translate>
        </a>
      </div>
    </div>
  );
};

export default Hero;
