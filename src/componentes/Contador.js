import { useState } from "react";
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
    <div>
      <button onClick={handleAgregar}>Agregar al carito</button>
      <button onClick={handleSumar}>sumar : {estado}</button>
      <button onClick={handleRestar}>restar</button>
    </div>
  );
};
