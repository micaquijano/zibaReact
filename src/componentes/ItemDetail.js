import {
  Button,
  Card,
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Contador } from "./Contador";
import { ARS_SYMBOL, useMoney } from "../context/money";
import { useCart } from "../context/cartContext";
import parse from "html-react-parser";
import { useState } from "react";
import { Precio } from "./Precio";

export const ItemDetail = ({ item }) => {
  const { agregar } = useCart();
  const [talle, setTalle] = useState(3);
  const onAdd = (cantidad) => {
    agregar(cantidad, item);
  };

  const description = parse(item.description);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={4}>
          <Card id="card-detail" className="m-0 p-0">
            <Card.Img
              className="responsive detailImg"
              variant="top"
              src={item.img}
            />
          </Card>
        </Col>

        <Col sm={8}>
          <Card id="card-detail-info" className="m-0">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Precio price={item.price}></Precio>
              <Card.Text>Talles disponibles:</Card.Text>

              <ButtonGroup className="mb-2">
                {item?.sizes?.map((size, i) => (
                  <ToggleButton
                    key={i}
                    id={`size-${i}`}
                    type="radio"
                    className={talle === size ? "btn-dark" : null}
                    variant="secondary"
                    name="radio"
                    value={size}
                    checked={talle === size}
                    onChange={(e) => setTalle(size)}
                  >
                    {size}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <div>
                <Rate disabled count={5} value={item.rating} />
              </div>
              <Button variant="outline-dark">Comprar</Button>
              <div>
                <Contador stock={item.stock} initial={1} onAdd={onAdd} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Card>
          <Card.Body>{description}</Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
