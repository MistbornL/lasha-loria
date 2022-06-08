import React from "react";
import "./header.scss";
import greenPack from "../../../assets/greenpack.png";
import down from "../../../assets/downarrow.png";
import cart from "../../../assets/cart.png";
import { useState } from "react";
import { CurrencyPop } from "./currencyPopUp/CurrencyPop";

export const Header = () => {
  const [toggleArrow, setToggleArrow] = useState(false);

  const handleArrow = () => {
    setToggleArrow(!toggleArrow);
  };
  return (
    <header>
      <nav>
        <ul className="header-top-right">
          <li>WOMEN</li>
          <li>MEN</li>
          <li>
            <span>KIDS</span>
          </li>
        </ul>

        <div style={{ display: "flex" }}>
          <img className="header-middle" src={greenPack} alt="logo" />
        </div>

        <div className="currency">
          <p>$</p>
          <span>
            <img onClick={handleArrow} src={down} alt="arrow" />
          </span>
          {toggleArrow ? <CurrencyPop /> : null}
          <img src={cart} alt="cart" />
        </div>
      </nav>
    </header>
  );
};
