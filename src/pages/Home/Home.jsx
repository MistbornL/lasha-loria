import React from "react";
import { Header } from "../../components/forHome/header/Header";
import { ProdCard } from "../../components/forHome/prodCard/ProdCard";
import "./home.scss";
export const Home = () => {
  return (
    <div className="App">
      <Header />
      <h1 className="category-name">Category Name</h1>

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
};
