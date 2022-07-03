import Header from "../../components/forHome/header/Header";
import "./cart.scss";

import { CartItem } from "./cartITem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.store.cart);
  const selectedCurrencies = useSelector(
    (state) => state.store.selectedCurrencies
  );

  // const cartData = [
  //   ...useSelector((state) => state.store.cart)
  //     .reduce((map, obj) => map.set(obj.id, obj), new Map())
  //     .values(),
  // ];

  var tax = 0;
  var total = 0;
  cartData.map((item) => {
    item.prices.map((price) => {
      if (price.currency.symbol === selectedCurrencies) {
        return (tax += Math.round(
          price.amount * item.count * 0.21,
          (total += Math.round(price.amount * item.count + tax))
        ));
      }
      return undefined;
    });
    return undefined;
  });

  return (
    <div className="App">
      <Header />
      <h1 className="cart-head">cart</h1>

      <div className="section-wrapper">
        {cartData.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>

      <div className="cart-footer">
        <p>
          Tax 21%: <strong>{tax}$</strong>
        </p>

        <p>
          Quantity:{" "}
          <strong>
            {cartData.reduce((prev, item) => prev + item.count, 0)}
          </strong>
        </p>

        <p>
          total: <strong>{total}$</strong>
        </p>
      </div>
    </div>
  );
};

export default Cart;
