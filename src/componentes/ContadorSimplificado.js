import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const ContadorSimplificado = ({ initial, stock, onAdd }) => {
  let [estado, setEstado] = useState(initial);

  const handleRestar = () => {
    setEstado(estado - 1);
    onAdd(estado - 1);
  };

  const handleSumar = () => {
    setEstado(estado + 1);
    onAdd(estado + 1);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <button
          className="btn draw-border"
          disabled={estado <= 1}
          onClick={handleRestar}
        >
          -
        </button>
      </Col>
      <Col md="auto">
        <button className="btn draw-border"> {estado}</button>
      </Col>
      <Col md="auto">
        <button
          className="btn draw-border"
          disabled={estado >= stock}
          onClick={handleSumar}
        >
          +
        </button>
      </Col>
    </Row>
  );
};
