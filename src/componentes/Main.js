import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./Carrito";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer";

export const Main = () => {
  return (
    <>
    <Container>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route exact path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Container>
    </>
  );
};
