import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300,
  },
];
export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    toast.warning("cargando productos...");

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });
    pedido
      .then((resultado) => {
        toast.dismiss();
        setProductos(resultado);
      })
      .catch((error) => {
        toast.error("error al cargar productos");
      })
      .finally(() => {
        setLoading(false);
      });
  });
  if (loading) {
    return <h2>cargando...</h2>;
  } else {
    return <ItemList productos={productos} />;
  }
};
