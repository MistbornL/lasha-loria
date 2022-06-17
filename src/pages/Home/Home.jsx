import Header from "../../components/forHome/header/Header";
import "./home.scss";
import React from "react";
import ProdCard from "../../components/forHome/prodCard/ProdCard";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_CATEGORIES,
  GET_TECH_CATEGORIES,
  GET_CLOTHES_CATEGORIES,
} from "../../GraphQL/Queries";
import { storeProduct } from "../../state/reducer";

export const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);
  const { tech } = useQuery(GET_TECH_CATEGORIES);
  const { clothes } = useQuery(GET_CLOTHES_CATEGORIES);
  const selecteds = useSelector((state) => state.store);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  dispatch(storeProduct(data.category.products));

  return (
    <div className="App">
      <Header />
      <div className="category-name">
        {selecteds.selectAll ? (
          <h1>all</h1>
        ) : selecteds.selectTech ? (
          <h1>tech</h1>
        ) : selecteds.selectCloth ? (
          <h1>clothes</h1>
        ) : (
          <h1>all</h1>
        )}
      </div>

      <main>
        <section className="prod-card">
          {data.category.products.map((item) => {
            return (
              <ProdCard
                name={item.name}
                price={item.prices[0].amount}
                symbol={item.prices[0].currency.symbol}
                img={item.gallery[0]}
                id={item.id}
                inStock={item.inStock}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};
