import React from "react";
import { GET_CLOTHES_CATEGORIES } from "../../../GraphQL/Queries";

export const Clothes = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_CLOTHES_CATEGORIES);
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
