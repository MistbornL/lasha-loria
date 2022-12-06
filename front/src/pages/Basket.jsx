import React, { Component } from "react";
import { connect } from "react-redux";
import BasketItem from "../components/basket/BasketItem";
import Header from "../components/header/Header";
import { getTotalPrice, getProductsQuantity } from "../components/helper";
import "./cart.scss";

class Basket extends Component {
  render() {
    const currency = this.props.currency.currencies.find(
      (item) => item.selected
    );
    const totalPrice = getTotalPrice(this.props.basket.products, currency) ?? 0;

    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <div className="cart">
            <p>CART</p>
            <hr />
            {this.props.basket.products.map((product) => {
              return (
                <BasketItem
                  product={product}
                  cssClass={"cart-item"}
                  canEdit={false}
                />
              );
            })}
            <div className="payment-info">
              <div className="all-info">
                <div className="titles-totals">
                  <span>Tax 21%: </span>
                  <span>Quantity: </span>
                  <span>Total: </span>
                </div>
                &nbsp; &nbsp;
                <div className="titles-totals">
                  <span>
                    <b>{`${currency?.symbol ?? ""} ${(
                      totalPrice * 0.21
                    ).toFixed(2)}`}</b>{" "}
                  </span>
                  <span>
                    <b>{`${getProductsQuantity(
                      this.props.basket.products
                    )}`}</b>{" "}
                  </span>
                  <span>
                    <b>{`${currency?.symbol ?? ""} ${totalPrice}`}</b>{" "}
                  </span>
                </div>
              </div>
              <a href="/">
                <button> ORDER</button>
              </a>
            </div>
            <br />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    currency: state.currency,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(Basket);
