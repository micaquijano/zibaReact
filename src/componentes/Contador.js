import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContadorSimplificado } from "./ContadorSimplificado";

export const Contador = ({ initial, stock, onAdd }) => {
  let [estado, setEstado] = useState(initial);

  const handleAgregar = () => {
    onAdd(estado);
  };

  return (
    <Container>
      <ContadorSimplificado
        stock={stock}
        initial={initial}
        onAdd={setEstado}
      ></ContadorSimplificado>
      <Row className="justify-content-md-center">
        <button className="btn draw-border" onClick={handleAgregar}>
          Agregar al carito
        </button>
      </Row>
    </Container>
  );
};
