import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Productos from "./Productos.json";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (loading) {
      toast.info("Ofertas exclusivas");
      const pedido = new Promise((res, rej) => {
        setTimeout(() => {
          console.log(Productos.listado);
          if (!!idCategoria) {
            const listadoPorCategoria = Productos.listado.filter(
              (item) => item.categoryitemId == idCategoria
            );
            console.log(listadoPorCategoria, idCategoria);
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, idCategoria]);
  return (
    <>
      <ToastContainer />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="../imagenes/banner.jpg" />
        </Carousel.Item>
      </Carousel>
      {loading ? (
        <Container>
          <Row className="justify-content-md-center m-5">
            <Spinner animation="border" variant="danger" />
          </Row>
        </Container>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};
