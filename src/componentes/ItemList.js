import { Row } from "react-bootstrap";
import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <Row xs={1} md={2} className="g-4">
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
    </Row>
  );
};
