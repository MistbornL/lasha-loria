import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    const colors = ["black", "white", "green", "cyan", "blue"];
    return (
      <div
        className="w3-sidebar w3-bar-block w3-border-right"
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
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            In Stock
          </label>
        </div>
        <select
          class="form-select form-select-sm mt-3"
          aria-label=".form-select-sm example"
        >
          <option selected>size for boots</option>
          <option value="1">40</option>
          <option value="2">41</option>
          <option value="3">42</option>
          <option value="4">43</option>
          <option value="4">44</option>
        </select>
        <select
          class="form-select form-select-sm mt-3"
          aria-label=".form-select-sm example"
        >
          <option selected>size for jackets</option>
          <option value="1">small</option>
          <option value="2">medium</option>
          <option value="3">large</option>
          <option value="4">extra large</option>
        </select>
        <select
          class="form-select form-select-sm mt-3"
          aria-label=".form-select-sm example"
        >
          <option selected>capacity</option>
          <option value="1">512G</option>
          <option value="2">1T</option>
        </select>
        <div className="colors d-flex gap-2 align-items-center mt-3">
          {colors.map((color, index) => {
            return (
              <div
                style={{
                  background: color,
                  border: "1px solid black",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                }}
                key={index}
                className="color"
              />
            );
          })}
        </div>
      </div>
    );
  }
}
