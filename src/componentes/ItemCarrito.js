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
import { useCart } from "../context/cartContext";
import parse from "html-react-parser";
import { Precio } from "./precio";

export const ItemCarrito = ({ item }) => {
  const { agregar } = useCart();
  const onAdd = (cantidad) => {
    agregar(cantidad, item);
  };

  return (
        <Container className="m-0 p-3 bg-white text-uppercase">
          <Row className="fix100h">
            <Col>
              <Card.Img
                className="responsive detailImg w-50"
                variant="top"
                src={item.img}
              />
            </Col>
            <Col>
              <h1>{item.name}</h1>
            </Col>
            <Col>
              <Precio price={item.price}></Precio>
            </Col>
            <Col>{item.size}</Col>
            <Col>
              <Contador stock={item.stock} initial={item.cantidad} onAdd={onAdd} />
            </Col>
          </Row>
        </Container>
  );
};
