import "./card.scss";
import greenCart from "../../../assets/cartInGreen.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProdCard = ({ name, img, price, symbol, id, inStock }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={inStock ? "prod-card-top" : "out-of-stock"}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="prod-img">
        <img
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
          <strong>
            {symbol}
            {price}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
