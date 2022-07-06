import "./card.scss";
import greenCart from "../../../assets/cartInGreen.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storeToCart } from "../../../state/reducer";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
const ProdCard = ({ item, name, img, id, inStock }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.store.selectedSize);
  const selectedCurrencies = useSelector(
    (state) => state.store.selectedCurrencies
  );
  return (
    <div
      className={inStock ? "prod-card-top" : "out-of-stock"}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="prod-img">
        <img
          onClick={() => {
            dispatch(
              selectedSize !== ""
                ? storeToCart(item)
                : alert("choose options first")
            );
          }}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            marginRight: "40px",
            marginBottom: "-20px",
          }}
          src={isShown ? greenCart : null}
          alt={isShown ? "greenCart" : null}
        />
        <Link to={`/PDP/${id}`}>
          {inStock ? (
            <img
              style={{ width: "354px", height: "330px" }}
              src={img}
              alt="prod-img"
            />
          ) : (
            <div>
              <img
                style={{
                  width: "354px",
                  height: "330px",
                  position: "relative",
                }}
                src={img}
                alt="prod-img"
              />
              <h1 className="out-h1">OUT OF STOCK</h1>
            </div>
          )}
        </Link>
        <div className="desc">
          <p>{name}</p>
          {item.prices.map((price, index) => {
            if (price.currency.symbol === selectedCurrencies) {
              return (
                <strong key={index}>
                  {price.currency.symbol}
                  {price.amount}
                </strong>
              );
            }
            return undefined;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
