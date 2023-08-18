import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/svg/Arrow.svg";
import "./button.css";

const Button = ({ text, mode = "dark", to = "./" }) => {
  return (
    <Link
      to={`./${to}`}
      className={`button-component ${
        mode === "light" && "button-component-light"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {text}

      <img src={rightArrow} alt="arrow" />
    </Link>
  );
};

export default Button;
