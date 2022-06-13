import "./card.scss";
import greenCart from "../../../assets/cartInGreen.png";
import React, { useState } from "react";

const ProdCard = ({ name, img, price, symbol }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Link>
      <div
        className="prod-card-top"
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
          <img
            style={{ width: "354px", height: "330px" }}
            src={img}
            alt="prod-img"
          />
          <div className="desc">
            <p>{name}</p>
            <strong>
              {symbol}
              {price}
            </strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProdCard;
