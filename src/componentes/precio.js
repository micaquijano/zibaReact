import { ARS_SYMBOL, useMoney } from "../context/money";

export const Precio = ({ price }) => {
  const { dolarValue, symbol } = useMoney();
  return symbol === ARS_SYMBOL ? price * dolarValue : price;
};

/*                 <Badge className="small_text" bg="info">
                  {symbol}
                </Badge>
                 */
