import { Card, Container, Row, Col } from "react-bootstrap";
import "rc-rate/assets/index.css";
import { useCart } from "../context/cartContext";
import { Precio } from "./Precio";
import { ContadorSimplificado } from "./ContadorSimplificado";
import { Link } from "react-router-dom";

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
        <Col>Subtotal</Col>
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
          <Link className="btn-card" to={`/producto/${item.itemId}`}>
            <h3>{item.name}</h3>
          </Link>
        </Col>
        <Col>
          <Precio price={item.price}></Precio>
        </Col>
        <Col>
          <Precio price={item.price * item.cantidad}></Precio>
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
