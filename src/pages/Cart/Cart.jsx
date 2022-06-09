import React, { Component } from "react";
import Header from "../../components/forHome/header/Header";
import "./cart.scss";
export default class Card extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="cart-head">cart</h1>
        <section className="cart-wrapper">
          <div className="cart-left">
            <h1>Apollo</h1>
            <h2>Running Short</h2>
            <span>$50.00</span>
            <p>size:</p>
            <div className="cart-size">
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
            </div>
            <p>color</p>
            <div className="cart-color">
              <div style={{ background: "#D3D2D5" }} className="grey"></div>
              <div style={{ background: "black" }} className="black"></div>
              <div style={{ background: "green" }} className="green"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
