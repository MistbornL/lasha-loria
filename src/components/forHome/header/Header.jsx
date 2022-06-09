import React from "react";
import "./header.scss";
import greenPack from "../../../assets/greenpack.png";
import down from "../../../assets/downarrow.png";
import up from "../../../assets/uparrow.png";
import cart from "../../../assets/cart.png";
import CurrencyPop from "../../../components/forHome/header/currencyPopUp/CurrencyPop";
import { GetCurrency } from "../../../GraphQL/fetches/GetCurrency";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { toggleArrow: false };
  }
  handleArrow = () => {
    this.setState({ toggleArrow: !this.state.toggleArrow });
  };

  render() {
    return (
      <header>
        <GetCurrency />;
        <nav>
          <ul className="header-top-right">
            <li>WOMEN</li>
            <li>MEN</li>
            <li>
              <span>KIDS</span>
            </li>
          </ul>

          <div style={{ display: "flex" }}>
            <img className="header-middle" src={greenPack} alt="logo" />
          </div>

          <div className="currency">
            <p>$</p>
            <span onClick={this.handleArrow}>
              <img src={!this.state.toggleArrow ? down : up} alt="arrow" />
            </span>
            {this.state.toggleArrow ? <CurrencyPop /> : null}
            <img src={cart} alt="cart" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
