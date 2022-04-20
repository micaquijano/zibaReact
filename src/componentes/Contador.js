import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../context/cartContext";

export const Contador = ({ initial, stock, onAdd }) => {
  let [estado, setEstado] = useState(initial);

  const handleSumar = () => {
    if (estado < stock) {
      setEstado(estado + 1);
    }
  };

  const handleRestar = () => {
    if (estado > initial) {
      setEstado(estado - 1);
    }
  };

  const handleAgregar = () => {
    onAdd(estado);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <button className="btn draw-border" onClick={handleRestar}>
            -
          </button>
        </Col>
        <Col md="auto">
          <button className="btn draw-border"> {estado}</button>
        </Col>
        <Col md="auto">
          <button className="btn draw-border" onClick={handleSumar}>
            +
          </button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <button className="btn draw-border" onClick={handleAgregar}>
          Agregar al carito
        </button>
      </Row>
    </Container>
  );
};
