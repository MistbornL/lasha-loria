import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cartpop.scss";
export const CartPop = () => {
  const cartData = useSelector((state) => state.store.cart);
  console.log(cartData);
  return (
    <div>
      <div className="cart-pop-wrapper">
        <div style={{ marginBottom: "-40px" }}>
          <h1>
            My Bag, <span>{cartData.length} items</span>
          </h1>
        </div>

        {cartData.map((item) => {
          return (
            <section style={{ position: "relative", height: "150px" }}>
              <div className="card-pop-top">
                <h2>{item.name}</h2>
                <h1>{item.prices[0].amount}$</h1>
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

              {item.attributes.map((colorItem) => {
                if (colorItem.name === "Color") {
                  return <p>color</p>;
                } else {
                  return null;
                }
              })}

              <div className="cart-color">
                {item.attributes.map((colorItems) => {
                  if (colorItems.name === "Color") {
                    return colorItems.items.map((color, index) => {
                      const colorValue = color.value;
                      return (
                        <div
                          key={index}
                          style={{ background: colorValue }}
                        ></div>
                      );
                    });
                  }
                  return undefined;
                })}
              </div>
              <div className="cart-pop-right">
                <div className="counter">
                  <button>+</button>
                  <span>{item.count}</span>
                  <button>-</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                  }}
                >
                  <img
                    style={{ width: "121px", height: "190px" }}
                    src={item.gallery[0]}
                    alt={item.name}
                  />
                </div>
              </div>
            </section>
          );
        })}

        <div className="cart-bottom">
          <Link to={"/cart"}>
            <button>VIEW BAG</button>
          </Link>
          <button style={{ background: "#5ECE7B", color: "white" }}>
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};
