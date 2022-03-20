import { Row, Col } from "react-bootstrap";
import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </Col>
    </Row>
  );
};
