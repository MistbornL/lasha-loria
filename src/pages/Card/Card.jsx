import React, { Component } from "react";
import Header from "../../components/forHome/header/Header";

export default class Card extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="cart-head">cart</h1>
        <section className="cart-wrapper"></section>
      </div>
    );
  }
}
