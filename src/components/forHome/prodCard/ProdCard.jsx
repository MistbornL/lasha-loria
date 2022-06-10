import "./card.scss";
import shirt from "../../../assets/shirt.png";
import React, { Component } from "react";
import greenCart from "../../../assets/cartInGreen.png";

export default class ProdCard extends Component {
  constructor() {
    super();
    this.state = { isShown: false };
  }
  render() {
    return (
      <div
        className="prod-card-top"
        onMouseEnter={() => this.setState({ isShown: true })}
        onMouseLeave={() => this.setState({ isShown: false })}
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
            src={this.state.isShown ? greenCart : null}
            alt={this.state.isShown ? "greenCart" : null}
          />
          <img src={shirt} alt="prod-img" />
          <div className="desc">
            <p>Apollo Running Short</p>
            <strong>$50.00</strong>
          </div>
        </div>
      </div>
    );
  }
}
