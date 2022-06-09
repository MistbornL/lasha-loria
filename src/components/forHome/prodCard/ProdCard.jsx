import "./card.scss";
import shirt from "../../../assets/shirt.png";
import React, { Component } from "react";

export default class ProdCard extends Component {
  render() {
    return (
      <div className="prod-card-top">
        <div className="prod-img">
          <img src={shirt} alt="prod-img" />
        </div>
        <div className="desc">
          <p>Apollo Running Short</p>
          <strong>$50.00</strong>
        </div>
      </div>
    );
  }
}
