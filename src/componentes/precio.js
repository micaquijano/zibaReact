import { ARS_SYMBOL, useMoney } from "../context/money";

export const Precio = ({ price }) => {
  const { dolarValue, symbol } = useMoney();
  const value = symbol === ARS_SYMBOL ? price * dolarValue : price;
  return (
    <span className="h1">
      ${value} <span className="h5">{symbol}</span>
    </span>
  );
};
