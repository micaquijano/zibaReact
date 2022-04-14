import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Productos from "./Productos.json"


export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (loading) {
      toast.warning("cargando productos...");
      const pedido = new Promise((res, rej) => {
        setTimeout(() => {
          console.log(Productos.listado)
          res(Productos.listado); 
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
