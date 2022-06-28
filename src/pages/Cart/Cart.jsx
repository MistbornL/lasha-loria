import Header from "../../components/forHome/header/Header";
import "./cart.scss";
import React from "react";
import { CartItem } from "./cartITem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.store.cart);
  const tax = cartData.reduce(
    (prev, item) =>
      Math.round((prev + item.prices[0].amount * item.count) * 0.21),
    0
  );
  const total = cartData.reduce(
    (prev, item) => Math.round(prev + item.prices[0].amount * item.count + tax),
    0
  );

  return (
    <div className="App">
      <Header />
      <h1 className="cart-head">cart</h1>
      <div className="section-wrapper">
        {cartData.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <div className="cart-footer">
        <p>
          Tax 21%: <strong>{tax}$</strong>
        </p>
        <p>
          Quantity:{" "}
          <strong>
            {cartData.reduce((prev, item) => prev + item.count, 0)}
          </strong>
        </p>
        <p>
          total: <strong>{total}$</strong>
        </p>
      </div>
    </div>
  );
};

export default Cart;
