import React, { useState } from "react";
import "./header.scss";
import greenPack from "../../../assets/greenpack.png";
import down from "../../../assets/downarrow.png";
import up from "../../../assets/uparrow.png";
import cart from "../../../assets/cart.png";
import CurrencyPop from "../header/currencyPopUp/CurrencyPop";
import { GET_CATEGORIES_AND_CURRENCIES } from "../../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  storeData,
  storeCategories,
  storeProduct,
  setName,
} from "../../../state/reducer";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.store.data);

  const { loading, error, data } = useQuery(GET_CATEGORIES_AND_CURRENCIES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  dispatch(storeData(data));

  const handleArrow = () => {
    setToggleArrow(!toggleArrow);
  };

  return (
    <header>
      <nav>
        <ul className="header-top-right">
          {reduxData.categories.map((item, index) => {
            return (
              <li
                // style={selectAll ? { color: "#5ece7b" } : undefined}
                key={index}
              >
                <Link
                  onClick={() => {
                    dispatch(setName(item.name));
                  }}
                  to={`/${item.name}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
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
