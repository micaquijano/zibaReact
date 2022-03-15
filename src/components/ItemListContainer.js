import { Grid, CircularProgress } from "@mui/material";
import { Item } from "./materialUI/Item";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ count, toAdd }) => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setTimeout(() => setSpinner(false), 2000);
      });
  }, []);

  return (
    <>
      <h1 style={{textAlign: 'left', textTransform: 'uppercase'}}>Каталог товаров</h1>
      {spinner ? (
        <CircularProgress />
      ) : (
        <div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {items.map((item, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <Item features={item} toAdd={toAdd} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};
