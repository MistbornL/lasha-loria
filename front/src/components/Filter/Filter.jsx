import React, { Component } from "react";
import "./filter.scss";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: false,
      selected: "",
      price: "",
      size: "",
      upperSize: "",
      capacity: "",
    };
  }

  handleChange = (e) => this.setState({ inStock: e.target.checked });

  render() {
    console.log(this.state);
    const colors = ["black", "white", "green", "cyan", "blue"];
    return (
      <div
        className="w3-sidebar w3-bar-block w3-border-right p-2"
        style={
          this.props.isFilter
            ? {
                display: "block",
                transition: "left .3s ease",
                marginLeft: "-100px",
                borderRadius: "5px",
              }
            : { display: "none" }
        }
        id="mySidebar"
      >
        <h1 className="w3-bar-item w3-large">filter</h1>
        <div className="form-check">
          <input
            onChange={this.handleChange}
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            In Stock
          </label>
        </div>
        <select
          onChange={(e) => {
            this.setState({ size: e.target.value });
          }}
          class="form-select form-select-sm mt-3"
          aria-label=".form-select-sm example"
          value={this.state.size}
        >
          <option selected>size for boots</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
        </select>
        <select
          onChange={(e) => {
            this.setState({ upperSize: e.target.value });
          }}
          class="form-select form-select-sm mt-3"
          aria-label=".form-select-sm example"
          value={this.state.upperSize}
        >
          <option selected>size for jackets</option>
          <option value="S">small</option>
          <option value="M">medium</option>
          <option value="L">large</option>
          <option value="XL">extra large</option>
        </select>
        <select
          onChange={(e) => {
            this.setState({ capacity: e.target.value });
          }}
          className="form-select form-select-sm mt-3"
          aria-label=".form-select-sm example"
          value={this.state.capacity}
        >
          <option selected>capacity</option>
          <option value="256GB">512GB</option>
          <option value="512GB">512GB</option>
          <option value="1T">1T</option>
        </select>
        <div className="colors d-flex gap-2 align-items-center mt-3">
          {colors.map((color, index) => {
            return (
              <div
                style={
                  this.state.selected === color
                    ? {
                        background: color,
                        border: "1px solid black",
                        width: "42px",
                        height: "42px",
                        cursor: "pointer",
                      }
                    : {
                        background: color,
                        border: "1px solid black",
                        width: "32px",
                        height: "32px",
                        cursor: "pointer",
                      }
                }
                className="color"
                onClick={() => this.setState({ selected: color })}
                key={index}
              />
            );
          })}
        </div>
        <div className="form-group mt-3">
          <label for="formControlRange">Price</label>
          <input
            onChange={(e) => {
              this.setState({ price: e.target.value });
            }}
            type="text"
            className="form-control"
          />
        </div>
        <a
          href={`/${this.state.price},${this.state.inStock},${this.state.selected},${this.state.size},${this.state.upperSize},${this.state.capacity}`}
        >
          <button className="btn btn-primary mt-3">filter</button>
        </a>
      </div>
    );
  }
}
