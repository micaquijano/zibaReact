import { ItemCount } from "./ItemCount";
import { item } from "../data-fake/items";
import { Grid } from "@mui/material";

export const ItemListContainer = ({ count, toAdd }) => {



  return (
    <>
      <h1>Catalogo de productos</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              asd
            </Grid>
          ))}
        </Grid>
        <span>Aca se visualizaran los catalogos</span>
        <ItemCount stock={item.stock} initial="1" toAdd={toAdd} />
        {count}
    </>
  );
};
