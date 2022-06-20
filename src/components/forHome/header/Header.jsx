import React, { useEffect, useState } from "react";
import "./header.scss";
import greenPack from "../../../assets/greenpack.png";
import down from "../../../assets/downarrow.png";
import up from "../../../assets/uparrow.png";
import cart from "../../../assets/cart.png";
import CurrencyPop from "../header/currencyPopUp/CurrencyPop";
import { GET_CATEGORIES_AND_CURRENCIES } from "../../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { storeData, setName, storeCurrencies } from "../../../state/reducer";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.store.data);
  const currency = useSelector((state) => state.store.currencies);

  const { loading, error, data } = useQuery(GET_CATEGORIES_AND_CURRENCIES);

  const handleArrow = () => {
    setToggleArrow(!toggleArrow);
  };

  useEffect(() => {
    if (data) {
      dispatch(storeData(data));
      dispatch(storeCurrencies(data.currencies));
    }
  }, [loading, data]);

  return (
    <header>
      <nav>
        <ul className="header-top-right">
          {reduxData.categories.map((item, index) => {
            return (
              <li key={index}>
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
          {currency.map((item) => {
            return <p>{item.isSelected ? item.symbol : null}</p>;
          })}

          <span onClick={handleArrow}>
            <img src={!toggleArrow ? down : up} alt="arrow" />
          </span>
          <div className="popup">
            {toggleArrow
              ? currency.map(({ item, index }) => {
                  console.log(item);
                  return (
                    <CurrencyPop
                      label={item.label}
                      symbol={item.symbol}
                      index={index}
                      selected={item.isSelected}
                    />
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
