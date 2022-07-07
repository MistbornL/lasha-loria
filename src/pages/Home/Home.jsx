import Header from "../../components/forHome/header/Header";
import "./home.scss";
import React from "react";
import ProdCard from "../../components/forHome/prodCard/ProdCard";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../GraphQL/Queries";
import { storeProduct } from "../../state/reducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.store.product);
  const params = useParams();

  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  useEffect(() => {
    if (data) {
      if (params.category === "clothes") {
        dispatch(
          storeProduct(
            data.category.products.filter((item) => item.category === "clothes")
          )
        );
      } else if (params.category === "tech") {
        dispatch(
          storeProduct(
            data.category.products.filter((item) => item.category === "tech")
          )
        );
      } else {
        dispatch(storeProduct(data.category.products));
      }
    }
  }, [data, loading, error, dispatch, params.category]);

  return (
    <div className="App">
      <Header />
      <div className="category-name">
        <h1>{params.category}</h1>
      </div>
      <main>
        <section className="prod-card">
          {products.map((item, index) => {
            return (
              <ProdCard
                item={item}
                key={index}
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
