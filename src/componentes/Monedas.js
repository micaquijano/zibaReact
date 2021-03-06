import { Badge } from "react-bootstrap";
import Select from "react-select";
import { useMoney } from "../context/money";

export const Monedas = () => {
  const { symbols, setSymbol, dolarValue } = useMoney();

  return (
    <>
      <h3 className="mt-2">
        <Badge bg="info">${dolarValue}</Badge>
      </h3>

      <Select
        className="mt-2 nav-link-select"
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
