import "./currency.scss";
import React, { useState } from "react";

const CurrencyPop = ({ label, symbol, index }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div key={index} className="pop">
      <div>
        <h1 onClick={() => setIsSelected(true)}>
          {symbol} {label}
        </h1>
      </div>
    </div>
  );
};

export default CurrencyPop;
