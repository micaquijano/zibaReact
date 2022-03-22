import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

let productosIniciales = [
  {
    id: 1,
    nombre: "Sailor Moon",
    precio: 1200,
  },
  {
    id: 2,
    nombre: "Rick and Morty",
    precio: 700,
  },
  {
    id: 3,
    nombre: "the simpsons",
    precio: 700,
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
