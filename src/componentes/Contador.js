import { useState } from "react";
import { Container } from "react-bootstrap";
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
    
      <button className="btn draw-border" onClick={handleSumar}>sumar : {estado}</button>
      <button className="btn draw-border" onClick={handleAgregar}>Agregar al carito</button>
      <button className="btn draw-border" onClick={handleRestar}>restar</button>
    
    </Container>
  );
};
