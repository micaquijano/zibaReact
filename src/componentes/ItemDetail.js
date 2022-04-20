import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Link } from "react-router-dom";
import { Contador } from "./Contador";
import { ARS_SYMBOL, useMoney } from "../context/money";
import { useCart } from "../context/cartContext";

export const ItemDetail = ({ item }) => {
  const { dolarValue, symbol } = useMoney();
  const { agregar } = useCart();
  const onAdd = (cantidad) => {
    agregar(cantidad, item);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card
            id="card-detail"
          >
            <Card.Img className="responsive" variant="top" src={item.img} />
          </Card>
        </Col>

        <Col md="auto">
          <Card>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {symbol === ARS_SYMBOL ? item.price * dolarValue : item.price}
              </Card.Text>
              <Card.Text>{item.sizes}</Card.Text>
              <div>
                <Rate count={5} value={item.rating} />
              </div>
              <Button variant="outline-dark">Comprar</Button>
              <div>
                <Contador stock={item.stock} initial={1} onAdd={onAdd} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
