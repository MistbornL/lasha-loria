import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cartpop.scss";
export const CartPop = () => {
  const cartData = useSelector((state) => state.store.cart);
  console.log(cartData);
  return (
    <div className="cart-pop-wrapper">
      <h1>
        My Bag, <span>{cartData.length} items</span>
      </h1>

      {cartData.map((item) => {
        return (
          <section>
            <div className="card-pop-top">
              <h1>{item.name}</h1>
            </div>
          </section>
        );
      })}

      <div className="cart-bottom">
        <Link to={"/cart"}>
          <button>VIEW BAG</button>
        </Link>
        <button>CHECK OUT</button>
      </div>
    </div>
  );
};
