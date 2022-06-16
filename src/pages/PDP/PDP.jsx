import Header from "../../components/forHome/header/Header";
import "./pdp.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useEffect, useState } from "react";
import { storeToCart } from "../../state/reducer";

const PDP = () => {
  const params = useParams();
  const [card, setCard] = useState({});
  const product = useSelector((state) => state.store.product);
  const cart = useSelector((state) => state.store.cart);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(storeToCart(card));
    console.log(cart);
  };

  useEffect(() => {
    setIsLoading(false);
    product.map((item) => {
      if (item.id.toString() === params.id) {
        setCard(item);
      }
      return item;
    });
  }, [params.id, product, cart]);

  return isLoading ? (
    <h1>"loading"</h1>
  ) : (
    <div className="APP">
      <Header />
      <main>
        <div className="pdp-wrap">
          {card.gallery ? (
            <div className="pdp-left">
              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={card.gallery[1]}
                  alt="item"
                />
              </div>
              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={card.gallery[2]}
                  alt="item"
                />
              </div>

              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={card.gallery[3]}
                  alt="item"
                />
              </div>
            </div>
          ) : null}
          <div className="pdp-middle">
            <img
              style={{ width: "610px", height: "511px" }}
              src={card.gallery[0]}
              alt="shirt"
            />
          </div>
          <div className="pdp-right">
            <div className="desc">
              <h1>{card.name}</h1>

              <h2>
                <div
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></div>
              </h2>
            </div>

            <div className="desc-midd">
              <h1>
                <strong>Size: </strong>
              </h1>

              <div className="size">
                {card.attributes
                  .map((item) => {
                    if (item.name === "Size") {
                      return item.items.map((size, index) => {
                        return (
                          <Fragment key={index}>
                            <div>{size.value} </div>
                          </Fragment>
                        );
                      });
                    } else if (item.name === "Capacity") {
                      return item.items.map((cap, index) => {
                        return (
                          <Fragment key={index}>
                            <div className="size">
                              <div>{cap.value} </div>
                            </div>
                          </Fragment>
                        );
                      });
                    }

                    return undefined;
                  })
                  .filter((item) => item !== undefined)}
              </div>

              <div className="color-wrap">
                <h1>color</h1>
                <div className="color">
                  {card.attributes.map((item) => {
                    if (item.name === "Color") {
                      return item.items.map((color, index) => {
                        const colorValue = color.value;
                        return (
                          <div
                            key={index}
                            style={{ background: colorValue }}
                          ></div>
                        );
                      });
                    }
                    return undefined;
                  })}
                </div>
              </div>
              <div className="price">
                <h1>Price:</h1>
                <h2>
                  {card.prices[0].currency.symbol}
                  {card.prices[0].amount}
                </h2>
                <button onClick={handleButton}>ADD TO CART</button>
              </div>

              <div className="desc-bottom">
                <p>
                  Find stunning women's cocktail dresses and party dresses.
                  Stand out in lace and metallic cocktail dresses and party
                  dresses from all your favorite brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PDP;
