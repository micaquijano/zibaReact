import React, { useMemo, useState } from "react";
import bandera_argentina from "../imagenes/bandera_argentina.png";
import bandera_eeuu from "../imagenes/bandera_eeuu.png";
const MoneyContext = React.createContext();
export const ARS_SYMBOL = "ARS";
export const USD_SYMBOL = "USD";
export function MoneyProvider(props) {
  const symbols = [
    { value: USD_SYMBOL, image: bandera_eeuu },
    { value: ARS_SYMBOL, image: bandera_argentina },
  ];
  const [dolarValue, setDolarValue] = useState(0);
  const [symbol, setSymbol] = useState(USD_SYMBOL);

  fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((res) => res.json())
    .then((json) => {
      const response = json;
      console.log(response);
      return !!response && response?.blue?.value_sell
        ? setDolarValue(response.blue.value_sell)
        : null;
    });

  const value = useMemo(
    () => ({
      symbols,
      symbol,
      dolarValue,
      setSymbol,
    }),
    [symbol, dolarValue]
  );
  return <MoneyContext.Provider value={value} {...props} />;
}

export const useMoney = () => {
  const context = React.useContext(MoneyContext);
  if (!context) {
    throw new Error("Sin contexto de money");
  }
  return context;
};
