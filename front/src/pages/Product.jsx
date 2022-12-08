import React, { Component } from "react";
import { addToBasket } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import "./product.scss";
import filter from "../assets/filter.png";

class Products extends Component {
  getCurrency = (product) => {
    const currentCurrency = this.props.currencies.currencies.find(
      (x) => x.selected
    ).label;
    const price = product.prices.find(
      (item) => item.currency.label === currentCurrency
    );

    return (
      <b>
        {price.currency.symbol + " "}
        {price.amount}
      </b>
    );
  };

  getHtmlDetails = (product) => {
    return (
      <>
        {!product.inStock ? (
          <div className="out-of-stock">
            <span>OUT OF STOCK</span>
          </div>
        ) : (
          ""
        )}
        <img src={product.gallery[0]} alt="" />
        <div className="caption">
          <p>
            {product.brand + " " + product.name}
            <span>{this.getCurrency(product)}</span>
          </p>
        </div>
      </>
    );
  };
  constructor() {
    super();
    this.state = {
      isFilter: false,
    };
  }
  render() {
    return (
      <div className="App">
        <img
          onClick={() => this.setState({ isFilter: true })}
          style={{
            cursor: "pointer",
            position: "sticky",
            top: "50%",
            marginLeft: "-194px",
            width: "70px",
          }}
          src={filter}
          alt="filter"
        />
        {this.state.isFilter ? <Filter /> : null}
        <header style={{ marginTop: "-70px" }}>
          <Header />
        </header>
        <h1 className="category-title">
          {this.props.category.categories
            .find((item) => item.selected)
            ?.name.toUpperCase() ?? ""}
        </h1>
        <div className="products">
          {this.props.products.products.map((product) => {
            console.log(product);
            return (
              <div className="product" key={product.id}>
                <div className="thumbnail">
                  <Link to={`/details/${product.id}`}>
                    {this.getHtmlDetails(product)}
                  </Link>
                  {product.inStock ? (
                    <button
                      className="add-product-btn"
                      onClick={() => this.props.addToBasket(product)}
                    >
                      <img
                        src={require("../assets/basket-hover.png")}
                        alt="basket"
                      />
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    products: state.products,
    currencies: state.currency,
  };
};

const mapDispatchToProps = () => {
  return {
    addToBasket,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Products);
