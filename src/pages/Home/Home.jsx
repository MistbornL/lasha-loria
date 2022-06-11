import Header from "../../components/forHome/header/Header";
import "./home.scss";
import React from "react";
import ProdCard from "../../components/forHome/prodCard/ProdCard";
import { useSelector } from "react-redux";

export const Home = () => {
  const reduxData = useSelector((state) => state);
  return (
    <div className="App">
      <Header />
      <div className="category-name">
        <h1>Category Name</h1>
      </div>

      <main>
        <section className="prod-card">
          <ProdCard />
        </section>
      </main>
    </div>
  );
};
