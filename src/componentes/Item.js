import { Card, Button, Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMoney } from "../context/money";
import { Precio } from "./Precio";

export const Item = ({ producto }) => {
  const { dolarValue, symbol } = useMoney();

  return (
    <Container>
      <Link className="btn-card" to={`/producto/${producto.itemId}`}>
        <Card className="card">
          <Card.Img className="img" variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>
              <Precio price={producto.price}></Precio>
            </Card.Title>
            <Card.Text>{producto.name}</Card.Text>
            <Button variant="outline-dark">Comprar</Button>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
};
