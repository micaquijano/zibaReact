import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";
import Carrito from "./carrito.js";

export const Main = () => {
  return (
    <>
    <Container>
      <h2 id="h2">Nuestros Productos</h2>
      <ItemListContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/id" element={<ItemListContainer/>}/>
        <Route path="/producto/id" element={<ItemListContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Container>
    </>
  );
};
