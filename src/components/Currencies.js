import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

export const Currencies = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=2afae74bd53e236b9566e740b8120a589754ffe7&ids=BTC,ETH&interval=1h&per-page=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const _data = data.map((c) => {
          return { ...c, price: Number(c.price).toFixed(2) };
        });
        setCurrencies(_data);
      });
  }, []);

  return (
    <>
      {currencies.map((c, index) => (
        <Chip
          key={index}
          avatar={<Avatar src={c.logo_url} />}
          label={`$${c.price}`}
          alt={`$${c.price}`}
          tooltip={`$${c.price}`}
          sx={{ m: 1, color: '#fff' }}
        />
      ))}
    </>
  );
};
