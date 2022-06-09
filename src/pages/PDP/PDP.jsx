import React, { Component } from "react";
import Header from "../../components/forHome/header/Header";
import "./pdp.scss";
import shirt from "../../assets/shirt.png";
export default class PDP extends Component {
  render() {
    return (
      <div className="APP">
        <Header />
        <main>
          <div className="pdp-wrap">
            <div className="pdp-left">
              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={shirt}
                  alt="item"
                />
              </div>
              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={shirt}
                  alt="item"
                />
              </div>

              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={shirt}
                  alt="item"
                />
              </div>
            </div>

            <div className="pdp-middle">
              <img
                style={{ width: "610px", height: "511px" }}
                src={shirt}
                alt="shirt"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
