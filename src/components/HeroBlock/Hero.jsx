import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h3 className="hero__sup-title">Hi, my name is</h3>
        <h1 className="hero__title">Rasul</h1>
        <h2 className="hero__sub-title">Front-End Developer</h2>
        <p className="hero__text">
          I'm an <span>independent creative developer</span> who likes to craft
          solid and scalable web products with great user experiences.
        </p>
        <a href="" className="hero__btn btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
