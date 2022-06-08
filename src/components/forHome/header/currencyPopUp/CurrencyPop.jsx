import React from "react";
import "./currency.scss";
export const CurrencyPop = () => {
  return (
    <div className="pop">
      <div className="usd">
        <h1>$ USD</h1>
      </div>
      <div className="euro">
        <h1>€ EUR</h1>
      </div>
      <div className="jpy">
        <h1>¥ JPY</h1>
      </div>
    </div>
  );
};
