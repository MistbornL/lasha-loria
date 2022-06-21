import Header from "../../components/forHome/header/Header";
import "./cart.scss";
import shirt from "../../assets/shirt.png";

import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [counter, setCounter] = useState(1);
  const cartData = useSelector((state) => state.store.cart);
  console.log(cartData);

  const handleIncr = () => {
    setCounter(counter + 1);
  };
  const handleDecr = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {});
  return (
    <div className="App">
      <Header />
      <h1 className="cart-head">cart</h1>
      <section className="cart-wrapper">
        {cartData.map((item) => {
          return (
            <Fragment>
              <div className="cart-left">
                <h1>{item.name}</h1>
                <h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </h2>
                <span>${item.prices[0].amount}</span>
                <p>size:</p>
                <div className="cart-size">
                  <div>XS</div>
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                </div>
                <p>color</p>
                <div className="cart-color">
                  <div style={{ background: "#D3D2D5" }} className="grey"></div>
                  <div style={{ background: "black" }} className="black"></div>
                  <div style={{ background: "green" }} className="green"></div>
                </div>
              </div>

              <div className="cart-right">
                <div className="cart-right-counter">
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "285px",
                    }}
                  >
                    <button style={{ cursor: "pointer" }} onClick={handleIncr}>
                      +
                    </button>
                    <span>{counter}</span>
                    <button style={{ cursor: "pointer" }} onClick={handleDecr}>
                      -
                    </button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img
                      style={{ width: "200px", height: "288px" }}
                      src={item.gallery[0]}
                      alt="shirt"
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default Cart;
