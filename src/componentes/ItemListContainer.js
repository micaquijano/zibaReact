import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Productos from "../data/Productos.json";
import { Carousel, Container, Row } from "react-bootstrap";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);

  const { idCategoria } = useParams();

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        if (!!idCategoria) {
          const listadoPorCategoria = Productos.listado.filter(
            (item) => item.categoryitemId == idCategoria
          );
          res(listadoPorCategoria);
        } else {
          res(Productos.listado);
        }
      }, 2000);
    });
    pedido
      .then((resultado) => {
        toast.dismiss();
        setProductos(resultado);
      })
      .catch((error) => {
        toast.error("error al cargar productos");
      });
  }, [idCategoria]);
  return (
    <>
      <ToastContainer />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="../imagenes/banner.jpg" />
        </Carousel.Item>
      </Carousel>
      {!productos ? (
        <Container>
          <Row className="justify-content-md-center m-5">
            <Spinner animation="border" variant="danger" />
          </Row>
        </Container>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-light centerMessage">
              Ups Sin resultados para esta categoría :(
            </h1>
          </Row>
        </Container>
      )}
    </>
  );
};
