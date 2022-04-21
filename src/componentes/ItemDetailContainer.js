import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { toast } from "react-toastify";
import { Container, Row, Spinner } from "react-bootstrap";
import Producto from "../data/Productos.json";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { idProducto } = useParams();

  useEffect(() => {
    const pedido = new Promise((res) => {
      setTimeout(() => {
        res(Producto.listado);
      }, 2000);
    });
    pedido
      .then((resultado) => {
        const producto = resultado.find((p) => p.itemId === Number(idProducto));
        setItem(producto);
      })
      .catch((error) => {
        toast.error("error al cargar productos");
      });
  }, [idProducto]);
  return !!item ? (
    <ItemDetail item={item} />
  ) : item !== undefined ? (
    <Container>
      <Row className="justify-content-md-center m-5">
        <Spinner animation="border" variant="danger" />
      </Row>
    </Container>
  ) : (
    <Container>
      <Row className="justify-content-md-center">
        <h1 className="text-light centerMessage">
          Ups Producto no encontrado :(
        </h1>
      </Row>
    </Container>
  );
};
