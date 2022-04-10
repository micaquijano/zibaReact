import { useState } from "react";
import { Badge, Form, Image } from "react-bootstrap";
import Select from "react-select";
import { USD_SYMBOL, useMoney } from "../context/money";

export const Monedas = () => {
  const { symbols, symbol, setSymbol, dolarValue } = useMoney();

  return (
    <>
      <h3>
        <Badge bg="info">${dolarValue}</Badge>
      </h3>

      <Select
        onChange={(m) => setSymbol(m.value)}
        options={symbols}
        defaultValue={symbols[0]}
        formatOptionLabel={(symbol) => (
          <div className="country-option">
            <img width={30} height={25} src={symbol.image} />
            <span>{symbol.value}</span>
          </div>
        )}
      />
    </>
  );
};
