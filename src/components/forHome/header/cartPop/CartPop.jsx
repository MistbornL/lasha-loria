import React, { Fragment } from "react";
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
              <h2>{item.name}</h2>
              <h1>{item.prices[0].amount}</h1>
            </div>
            {item.attributes.map((sizeItem) => {
              if (sizeItem.name === "Size") {
                return <p>Size</p>;
              } else if (sizeItem.name === "Capacity") {
                return <p>Capacity</p>;
              } else {
                return null;
              }
            })}
            <div className="cart-size">
              {item.attributes.map((sizeItem) => {
                if (sizeItem.name === "Size") {
                  return sizeItem.items.map((size, index) => {
                    return (
                      <Fragment key={index}>
                        <div>{size.value} </div>
                      </Fragment>
                    );
                  });
                } else if (sizeItem.name === "Capacity") {
                  return sizeItem.items.map((cap, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="size">
                          <div>{cap.value} </div>
                        </div>
                      </Fragment>
                    );
                  });
                }

                return undefined;
              })}
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
