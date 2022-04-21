import { ARS_SYMBOL, useMoney } from "../context/money";

export const Precio = ({ price }) => {
  const { dolarValue, symbol } = useMoney();
  return symbol === ARS_SYMBOL ? price * dolarValue : price;

  <>
  <h1 className="symbol"> {symbol} </h1>
  </>
  

  
                
};

/*                 <Badge className="small_text" bg="info">
                  {symbol}
                </Badge>
                 */