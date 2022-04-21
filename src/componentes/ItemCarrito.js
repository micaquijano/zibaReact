import { Card, Container, Row, Col } from "react-bootstrap";
import "rc-rate/assets/index.css";
import { useCart } from "../context/cartContext";
import { Precio } from "./Precio";
import { ContadorSimplificado } from "./ContadorSimplificado";

export const ItemCarrito = ({ item }) => {
  const { agregar, eliminar } = useCart();
  const onAdd = (cantidad) => {
    agregar(cantidad, item);
  };

  return (
    <Container className="m-0 p-3 bg-white text-uppercase">
      <Row>
        <Col></Col>
        <Col>Producto</Col>
        <Col>Precio</Col>
        <Col>Talle</Col>
        <Col>Eliminar</Col>
        <Col></Col>
      </Row>
      <Row className="fix100h">
        <Col>
          <Card.Img
            className="responsive detailImg w-50 max100h"
            variant="top"
            src={item.img}
          />
        </Col>
        <Col>
          <h3>{item.name}</h3>
        </Col>
        <Col>
          <Precio price={item.price}></Precio>
        </Col>
        <Col>
          <h3>{item.size}</h3>
        </Col>
        <Col>
          <span
            className="material-icons text-dark btn"
            onClick={() => eliminar(item)}
          >
            delete
          </span>
        </Col>
        <Col>
          <ContadorSimplificado
            stock={item.stock}
            initial={item.cantidad}
            onAdd={onAdd}
          />
        </Col>
      </Row>
    </Container>
  );
};
