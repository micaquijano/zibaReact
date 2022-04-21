import React from "react";
import { ItemCarrito } from "./ItemCarrito";
import { useCart } from "../context/cartContext";
import { Container, Row } from "react-bootstrap";

export const CarritoContainer = () => {
  const { productosAgregados } = useCart();
  return (
    <>
      {productosAgregados.length > 0 ? (
        <>
          <h1 className="text-light">Carrito</h1>
          <Container className="mt-5">
            <Row className="g-4">
              {productosAgregados.map((item) => {
                return (
                  <ItemCarrito key={item.itemId} item={item}></ItemCarrito>
                );
              })}
            </Row>
          </Container>
        </>
      ) : (
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-light centerMessage">
              No hay productos agregados al carrito :(
            </h1>
          </Row>
        </Container>
      )}
    </>
  );
};
