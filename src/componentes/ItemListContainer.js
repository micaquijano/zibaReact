import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

let productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    imgUrl:
      "https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/AB/rBVaWF6ZeUOACvfmAAE3pWJ3kGM967.jpg/tights-fashion-female-clothing-cartoon-cat.jpg",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
    imgUrl:
    "https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/AB/rBVaWF6ZeUOACvfmAAE3pWJ3kGM967.jpg/tights-fashion-female-clothing-cartoon-cat.jpg",

  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300,
    imgUrl:
    "https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/AB/rBVaWF6ZeUOACvfmAAE3pWJ3kGM967.jpg/tights-fashion-female-clothing-cartoon-cat.jpg",

  },
];
export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (loading) {
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
    }
  }, [loading]);
  return (
    <>
      <ToastContainer />
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};
