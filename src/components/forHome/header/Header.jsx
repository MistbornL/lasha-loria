import React from "react";
import "./header.scss";
import greenPack from "../../../assets/greenpack.png";
import down from "../../../assets/downarrow.png";

export const Header = () => {
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
          <img className="green-logo" src={greenPack} alt="logo" />
        </div>

        <div className="currency">
          <p>$</p>
          <span>
            <img src={down} alt="arrow" />
          </span>
        </div>
      </nav>
    </header>
  );
};
