import React, { useEffect, useState } from "react";
import "./header.scss";
import greenPack from "../../../assets/greenpack.png";
import down from "../../../assets/downarrow.png";
import up from "../../../assets/uparrow.png";
import cart from "../../../assets/cart.png";
import CurrencyPop from "../header/currencyPopUp/CurrencyPop";
import { GET_CURRENCY } from "../../../GraphQL/Queries";
import { useQuery } from "@apollo/client";

export const Header = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const [currencies, setCurrencies] = useState([false]);

  const { loading, error, data } = useQuery(GET_CURRENCY);

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
          <span onClick={handleArrow}>
            <img src={!toggleArrow ? down : up} alt="arrow" />
          </span>
          <div className="popup">
            {toggleArrow
              ? data.currencies.map(({ label, symbol, index }) => {
                  return (
                    <CurrencyPop label={label} symbol={symbol} index={index} />
                  );
                })
              : null}
          </div>

          <img src={cart} alt="cart" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
