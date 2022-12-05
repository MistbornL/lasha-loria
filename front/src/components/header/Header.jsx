import React, { Component } from "react";
import Currency from "./Currency";
import Category from "./Category";
import "./header.scss";
class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Category />
          <img src={require("../../../src/assets/logo.png")} alt="logo" />
          <Currency />
        </div>
      </>
    );
  }
}

export default Header;
