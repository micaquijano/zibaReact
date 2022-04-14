import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./Carrito";
import { Contactos } from "./Contactos";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer";
import { SobreNosotros } from "./SobreNosotros";



export const Main = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:idCategoria"element={<ItemListContainer />}/>
          <Route exact path="/producto/:idProducto"element={<ItemDetailContainer />}/>
          <Route exact path="/Carrito" element={<Carrito />} />
          <Route exact path="/SobreNosotros" element={<SobreNosotros/>}/>
          <Route exact path="/Contactos" element={<Contactos/>}/>
        </Routes>
      </Container>
    </>
  );
};
