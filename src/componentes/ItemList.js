import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <section>
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </section>
  );
};
