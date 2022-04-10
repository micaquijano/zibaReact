import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

export const productosIniciales = [
  {
    id: 1,
    nombre: "Sailor Moon",
    precio: 6,
    imgUrl:
      "https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/AB/rBVaWF6ZeUOACvfmAAE3pWJ3kGM967.jpg/tights-fashion-female-clothing-cartoon-cat.jpg",
  },
  {
    id: 2,
    nombre: "Rick and Morty",
    precio: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4o6Wwe5hkictTdCCKwVkvEDliLzXa8BMWA&usqp=CAU",
  },
  {
    id: 3,
    nombre: "Attack on Tita",
    precio: 3.5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10YEFem3v8GD2HA2GWMtjfsk-iTZIVALzOQ&usqp=CAU",
  },
];
export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

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
  }, [loading, idCategoria]);
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
