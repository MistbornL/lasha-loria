import "./currency.scss";

const CurrencyPop = ({ item }) => {
  return (
    <div className="pop">
      <div>
        <h1 key={item.index}>
          {item.symbol} {item.label}
        </h1>
      </div>
    </div>
  );
};

export default CurrencyPop;
