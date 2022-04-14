import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import Producto from "./Productos.json"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
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