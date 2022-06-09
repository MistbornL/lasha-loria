import Header from "../../components/forHome/header/Header";
import ProdCard from "../../components/forHome/prodCard/ProdCard";
import "./home.scss";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="category-name">
          <h1>Category Name</h1>
        </div>

        <main>
          <section className="prod-card">
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
          </section>
        </main>
      </div>
    );
  }
}
