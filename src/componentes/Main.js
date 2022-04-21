import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { CarritoContainer } from "./CarritoContainer";
import { Formulario } from "./Formulario";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer";
import { SobreNosotros } from "./SobreNosotros";

export const Main = () => {
  return (
    <>
      <Container id="main">
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/Categoria/:idCategoria"element={<ItemListContainer />}/>
          <Route exact path="/Producto/:idProducto"element={<ItemDetailContainer />}/>
          <Route exact path="/Carrito" element={<CarritoContainer />} />
          <Route exact path="/SobreNosotros" element={<SobreNosotros/>}/>
          <Route exact path="/Contactos" element={<Formulario/>}/>
        </Routes>
      </Container>
    </>
  );
};
