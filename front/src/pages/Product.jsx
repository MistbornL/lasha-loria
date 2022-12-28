import React, { Component } from "react";
import { addToBasket } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import "./product.scss";
import filter from "../assets/filter.png";
import Filter from "../components/Filter/Filter";

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
      filter: window.location.href.split("/")[3].split(","),
      id: window.location.href.split("/")[3],
    };
  }

  render() {
    // var price = this.state.filter[0];
    // var inStock = this.state.filter[1];
    // var color = this.state.filter[2];
    // var size = this.state.filter[3];
    // var sizeUpper = this.state.filter[4];
    // var cap = this.state.filter[5];

    return (
      <div className="App">
        <img
          onClick={() => this.setState({ isFilter: !this.state.isFilter })}
          style={{
            cursor: "pointer",
            position: "sticky",
            top: "50%",
            marginLeft: "-160px",
            width: "51px",
          }}
          src={filter}
          alt="filter"
        />
        <Filter isFilter={this.state.isFilter} />
        <header style={{ marginTop: "-70px" }}>
          <Header />
        </header>
        <h1 className="category-title">
          {this.props.category.categories
            .find((item) => item.selected)
            ?.name.toUpperCase() ?? ""}
        </h1>

        <div className="products">
          {this.props.products.products
            .filter((val) => {
              if (
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                window.location.href.split("/")[3].split(",")[2] === "" &&
                window.location.href.split("/")[3].split(",")[0] === "" &&
                window.location.href.split("/")[3].split(",")[3] === "" &&
                window.location.href.split("/")[3].split(",")[4] === "" &&
                window.location.href.split("/")[3].split(",")[5] === ""
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                window.location.href.split("/")[3].split(",")[2] === "" &&
                window.location.href.split("/")[3].split(",")[3] === "" &&
                window.location.href.split("/")[3].split(",")[4] === "" &&
                window.location.href.split("/")[3].split(",")[5] === "" &&
                parseInt(window.location.href.split("/")[3].split(",")[0]) <
                  500 &&
                val.prices[0].amount < 500
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[0] !== "" &&
                parseInt(window.location.href.split("/")[3].split(",")[0]) <
                  500 &&
                val.prices[0].amount < 500 &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                window.location.href.split("/")[3].split(",")[2] === "" &&
                window.location.href.split("/")[3].split(",")[3] === "" &&
                window.location.href.split("/")[3].split(",")[4] === "" &&
                window.location.href.split("/")[3].split(",")[5] === ""
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[0] !== "" &&
                parseInt(window.location.href.split("/")[3].split(",")[0]) >
                  500 &&
                val.prices[0].amount > 500
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                window.location.href.split("/")[3].split(",")[2] === "" &&
                window.location.href.split("/")[3].split(",")[0] !== "" &&
                parseInt(window.location.href.split("/")[3].split(",")[0]) >
                  500 &&
                val.prices[0].amount > 500
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[1] !==
                  undefined &&
                val.inStock === true &&
                window.location.href.split("/")[3].split(",")[2] === "" &&
                window.location.href.split("/")[3].split(",")[0] !== "" &&
                parseInt(window.location.href.split("/")[3].split(",")[0]) ===
                  val.prices[0].amount
              ) {
                return val;
              } else if (!window.location.href.split("/")[3].includes(",")) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[2] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                val.attributes.length >= 1 &&
                val.attributes[0] !== undefined &&
                val.attributes.length >= 1 &&
                val.attributes[0].id === "Color"
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[2] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                val.attributes.length >= 1 &&
                val.attributes[0] !== undefined &&
                val.attributes.length >= 1 &&
                val.attributes[0].id === "Color"
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[2] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                val.attributes[1] !== undefined &&
                val.attributes.length >= 1 &&
                val.attributes[1].id === "Color"
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[2] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                val.inStock === true &&
                val.attributes.length >= 1 &&
                val.attributes[1] !== undefined &&
                val.attributes[1].id === "Color"
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[3] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                val.attributes.length >= 1 &&
                ((val.attributes[1] !== undefined &&
                  val.attributes[1].id === "Size") ||
                  val.attributes[0].id === "Size")
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[3] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                val.attributes.length >= 1 &&
                ((val.attributes[1] !== undefined &&
                  val.attributes[1].id === "Size") ||
                  val.attributes[0].id === "Size")
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[5] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                val.attributes.length >= 1 &&
                ((val.attributes[1] !== undefined &&
                  val.attributes[1].id === "Capacity") ||
                  val.attributes[0].id === "Capacity")
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[5] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                val.attributes.length >= 1 &&
                ((val.attributes[1] !== undefined &&
                  val.attributes[1].id === "Capacity") ||
                  val.attributes[0].id === "Capacity")
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[4] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "true" &&
                val.inStock === true &&
                val.attributes.length >= 1 &&
                ((val.attributes[1] !== undefined &&
                  val.attributes[1].id === "Size") ||
                  val.attributes[0].id === "Size")
              ) {
                return val;
              } else if (
                window.location.href.split("/")[3].split(",")[4] !== "" &&
                window.location.href.split("/")[3].split(",")[1] === "false" &&
                val.attributes.length >= 1 &&
                ((val.attributes[1] !== undefined &&
                  val.attributes[1].id === "Size") ||
                  val.attributes[0].id === "Size")
              ) {
                return val;
              }
            })
            .map((product) => {
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
