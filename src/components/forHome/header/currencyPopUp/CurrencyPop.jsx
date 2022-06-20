import "./currency.scss";
import { useSelector } from "react-redux";

const CurrencyPop = ({ label, symbol, index, isSelected }) => {
  const currency = useSelector((state) => state.store.currencies);

  const handleSelection = () => {
    isSelected = true;
    console.log(isSelected);
  };
  return (
    <div className="pop">
      <div onClick={handleSelection}>
        <h1 key={index}>
          {symbol} {label}
        </h1>
      </div>
    </div>
  );
};

export default CurrencyPop;
