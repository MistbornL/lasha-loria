import React from "react";
import { useSelector } from "react-redux";

export const CartItem = ({ item }) => {
  const cartData = useSelector((state) => state.store.cart);
  const handleIncr = () => {
    cartData.map((item) => {
      return (item.count += 1);
    });
  };
  const handleDecr = () => {
    cartData.map((item) => {
      return (item.count += 1);
    });
  };
  return (
    <section className="cart-wrapper">
      <div className="cart-left">
        <h1>{item.name}</h1>
        <h2>
          <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
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
            <span>{item.count}</span>
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
    </section>
  );
};
