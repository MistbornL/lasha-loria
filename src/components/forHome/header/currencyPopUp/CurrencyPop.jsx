import "./currency.scss";

const CurrencyPop = ({ item }) => {
  const handleClick = () => {
    console.log(item);
  };
  return (
    <div className="pop">
      <div onClick={handleClick}>
        <h1 key={item.index}>
          {item.symbol} {item.label}
        </h1>
      </div>
    </div>
  );
};

export default CurrencyPop;
