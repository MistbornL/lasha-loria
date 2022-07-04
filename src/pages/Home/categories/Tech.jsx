import React, { useEffect } from "react";
import { GET_TECH_CATEGORIES } from "../../../GraphQL/Queries";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import Header from "../../../components/forHome/header/Header";
import { storeProduct } from "../../../state/reducer";
import ProdCard from "../../../components/forHome/prodCard/ProdCard";
export const Tech = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_TECH_CATEGORIES);
  const selecteds = useSelector((state) => state.store);
  const products = useSelector((state) => state.store.product);

  useEffect(() => {
    if (data) {
      dispatch(storeProduct(data.category.products));
    }
  }, [data, loading, error, dispatch]);
  return (
    <div className="App">
      <Header />
      <div className="category-name">
        <div className="category-name">
          <h1>{selecteds.name}</h1>
        </div>
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
