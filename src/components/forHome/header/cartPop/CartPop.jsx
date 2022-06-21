import React from "react";
import { Link } from "react-router-dom";
import "./cartpop.scss";
export const CartPop = () => {
  return (
    <div className="cart-pop-wrapper">
      <h1>My Bag</h1>

      <section></section>
      <div className="cart-bottom">
        <Link to={"/cart"}>
          <button>VIEW BAG</button>
        </Link>
        <button>CHECK OUT</button>
      </div>
    </div>
  );
};
