import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ContadorSimplificado } from "./ContadorSimplificado";

export const Contador = ({ initial, stock, onAdd, onCantidad }) => {
  const [estado, setEstado] = useState(initial);

  useEffect(() => {
    onCantidad(estado);
  }, [estado]);

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
