import { ItemCarrito } from "./ItemCarrito";
import { useCart } from "../context/cartContext";
import { Container, Row } from "react-bootstrap";
import { Comprar } from "./Comprar";
import { Precio } from "./Precio";

export const CarritoContainer = () => {
  const { productosAgregados, precioTotalDeProductos } = useCart();

  return (
    <>
      {productosAgregados.length > 0 ? (
        <>
          <h1 className="text-light">Carrito</h1>
          <Container className="mt-5">
            <Row className="g-4">
              {productosAgregados.map((item) => {
                return (
                  <ItemCarrito key={item.itemId} item={item}></ItemCarrito>
                );
              })}
            </Row>
            <Row className="bg-white flex-lg-row-reverse">
              <div className="w-25 p-2">
                <div className="p-3">
                <span className="h3">Precio final: </span>
                <Precio price={precioTotalDeProductos}></Precio>
                </div>
                <Comprar
                  items={productosAgregados}
                  precioFinal={precioTotalDeProductos}
                ></Comprar>
              </div>
            </Row>
          </Container>
        </>
      ) : (
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-light centerMessage">
              No hay productos agregados al carrito :(
            </h1>
          </Row>
        </Container>
      )}
    </>
  );
};
