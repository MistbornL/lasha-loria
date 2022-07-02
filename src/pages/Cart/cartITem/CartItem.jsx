import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../state/reducer";
import { useSelector } from "react-redux/es/hooks/useSelector";
export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const selectedCurrencies = useSelector(
    (state) => state.store.selectedCurrencies
  );

  return (
    <section className="cart-wrapper">
      <div className="cart-left">
        <h1>{item.name}</h1>
        <h2>
          <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
        </h2>
        {item.prices.map((price) => {
          if (price.currency.symbol === selectedCurrencies) {
            return (
              <span>
                {price.currency.symbol}
                {price.amount}
              </span>
            );
          }
          return undefined;
        })}

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
            return <p>Color</p>;
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
                  <div key={index} style={{ background: colorValue }}></div>
                );
              });
            }
            return undefined;
          })}
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
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(increment(item));
              }}
            >
              +
            </button>
            <span>{item.count}</span>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(decrement(item));
              }}
            >
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
