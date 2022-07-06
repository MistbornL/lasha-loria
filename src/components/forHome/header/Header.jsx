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
import {
  storeData,
  storeCurrencies,
  storeCategories,
} from "../../../state/reducer";
import { Link } from "react-router-dom";
import { CartPop } from "./cartPop/CartPop";
import { useRef } from "react";

export const Header = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.store.categories);
  const currency = useSelector((state) => state.store.currencies);
  const cartData = useSelector((state) => state.store.cart);
  const selectedCurrencies = useSelector(
    (state) => state.store.selectedCurrencies
  );
  const currencyRef = useRef();
  const cartRef = useRef();
  const { loading, error, data } = useQuery(GET_CATEGORIES_AND_CURRENCIES);

  const handleArrow = () => {
    setToggleArrow(!toggleArrow);
    setToggleCart(false);
  };

  const handleCart = () => {
    setToggleCart(!toggleCart);
    setToggleArrow(false);
  };

  useEffect(() => {
    if (data) {
      dispatch(storeData(data));
      dispatch(storeCategories(data.categories));
      dispatch(storeCurrencies(data.currencies));
      const handler = (e) => {
        if (!currencyRef.current.contains(e.target)) {
          setToggleArrow(false);
        }
        if (!cartRef.current.contains(e.target)) setToggleCart(false);
      };
      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  }, [loading, data, dispatch, error]);

  return (
    <header>
      <nav>
        <ul className="header-top-right">
          {categories.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${item.name}`}>{item.name}</Link>

                {/* <Link
                  onClick={() => {
                    dispatch(setName(item.name));
                  }}
                  to={`/${item.name}`}
                > */}

                {/* </Link> */}
              </li>
            );
          })}
        </ul>
        <div style={{ display: "flex" }}>
          <img className="header-middle" src={greenPack} alt="logo" />
        </div>
        <div ref={currencyRef} className="currency">
          <p>{selectedCurrencies}</p>
          <span onClick={handleArrow}>
            <img src={!toggleArrow ? down : up} alt="arrow" />
          </span>
          <div className="popup">
            {toggleArrow
              ? currency.map((item, index) => {
                  return (
                    <CurrencyPop
                      item={item}
                      arrow={setToggleArrow}
                      key={index}
                    />
                  );
                })
              : null}
          </div>
          {cartData.length > 0 ? (
            <div style={{ position: "relative", zIndex: "1" }}>
              <img
                style={{ position: "relative" }}
                onClick={handleCart}
                src={cart}
                alt="cart"
              />
              <div
                style={{
                  marginTop: "-30px",
                  marginLeft: "10px",
                  position: "absolute",
                  borderRadius: "60px",
                  width: "20px",
                  height: "20px",
                  background: "black",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cartData.reduce((prev, item) => prev + item.count, 0)}
              </div>
            </div>
          ) : (
            <img onClick={handleCart} src={cart} alt="cart" />
          )}
          <div ref={cartRef} className="cart">
            {toggleCart ? <CartPop /> : null}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
