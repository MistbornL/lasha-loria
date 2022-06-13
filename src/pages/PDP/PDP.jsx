import Header from "../../components/forHome/header/Header";
import "./pdp.scss";
import shirt from "../../assets/shirt.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const PDP = () => {
  const params = useParams();
  const [card, setCard] = useState({});
  const product = useSelector((state) => state.store.product);
  const [isLoading, seIsLoading] = useState(true);
  console.log(card);

  useEffect(() => {
    seIsLoading(false);
    product.map((item) => {
      if (item.id.toString() === params.id) {
        setCard(item);
      }
    });
  });

  return isLoading ? (
    <h1>"loading"</h1>
  ) : (
    <div className="APP">
      <Header />
      <main>
        <div className="pdp-wrap">
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
              <h2>{card.description}</h2>
            </div>

            <div className="desc-midd">
              <h1>
                <strong>size:</strong>
              </h1>
              <div className="size">
                {card.attributes[0].items.map((size) => {
                  return <div>{size.value}</div>;
                })}
              </div>

              <div className="color-wrap">
                <h1>Color</h1>
                <div className="color">
                  <div style={{ background: "#D3D2D5" }} className="grey"></div>
                  <div style={{ background: "black" }} className="black"></div>
                  <div style={{ background: "green" }} className="green"></div>
                </div>
              </div>
              <div className="price">
                <h1>Price:</h1>
                <h2>$50.00</h2>
                <button>ADD TO CART</button>
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
