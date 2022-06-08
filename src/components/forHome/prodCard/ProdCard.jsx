import React from "react";
import "./card.scss";
import shirt from "../../../assets/shirt.png";

export const ProdCard = () => {
  return (
    <div className="prod-card-top">
      <div className="prod-img">
        <img src={shirt} alt="prod-img" />
      </div>
      <div className="desc">
        <p>Apollo Running Short</p>
        <span>$50.00</span>
      </div>
    </div>
  );
};
