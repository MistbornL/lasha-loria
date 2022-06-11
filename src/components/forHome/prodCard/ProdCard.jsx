import "./card.scss";
import shirt from "../../../assets/shirt.png";
import greenCart from "../../../assets/cartInGreen.png";

import React, { useState } from "react";

const ProdCard = () => {
  const [isShown, setIsShown] = useState(false);

  return (
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
        <img src={shirt} alt="prod-img" />
        <div className="desc">
          <p>Apollo Running Short</p>
          <strong>$50.00</strong>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
