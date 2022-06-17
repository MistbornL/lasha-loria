import Header from "../../components/forHome/header/Header";
import "./cart.scss";
import shirt from "../../assets/shirt.png";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [counter, setCounter] = useState(1);
  const cartData = useSelector((state) => state.store.cart);

  const handleIncr = () => {
    setCounter(counter + 1);
  };
  const handleDecr = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log(cartData);
  });
  return (
    <div className="App">
      <Header />
      <h1 className="cart-head">cart</h1>
      <section className="cart-wrapper">
        <div className="cart-left">
          <h1>Apollo</h1>
          <h2>Running Short</h2>
          <span>$50.00</span>
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
                src={shirt}
                alt="shirt"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
