import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer";
import Carrito from "./carrito.js";

export const Main = () => {
  return (
    <>
    <Container>
      <h2 id="h2">Nuestros Productos</h2>
      <ItemListContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
        <Route path="/carrito.js" element={<Carrito/>}/>
      </Routes>
    </Container>
    </>
  );
};
