import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { productosIniciales } from "./ItemListContainer";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { idProducto } = useParams();

  useEffect(() => {
    const pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });
    pedido
      .then((resultado) => {
        const producto = resultado.find((p) => p.id === Number(idProducto));
        if (producto !== undefined) setItem(producto);
      })
      .catch((error) => {
        toast.error("error al cargar productos");
      });
  }, [idProducto]);
  return !!item ? (
    <ItemDetail item={item} />
  ) : (
    <Spinner animation="border" variant="danger" />
  );
};