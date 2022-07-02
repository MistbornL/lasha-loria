import { setSelectedCurrencies } from "../../../../state/reducer";
import "./currency.scss";
import { useDispatch } from "react-redux/es/exports";

const CurrencyPop = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedCurrencies(item.symbol));
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
