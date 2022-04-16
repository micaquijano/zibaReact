import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./Carrito";
import { Formulario } from "./Formulario";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer";
import { RemerasHombre } from "./RemerasHombre";
import { RemerasMujer } from "./RemerasMujer";
import { RemerasNene } from "./RemerasNene";
import { SobreNosotros } from "./SobreNosotros";

export const Main = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:idCategoria"element={<ItemListContainer />}/>
          <Route exact path="/producto/:idProducto"element={<ItemDetailContainer />}/>
          <Route exact path="/RemerasMujer" element={<RemerasMujer/>}></Route>
          <Route exact path="/RemerasHombre" element={<RemerasHombre/>}></Route>
          <Route exact path="/RemerasNene" element={<RemerasNene/>}></Route>
          <Route exact path="/Carrito" element={<Carrito />} />
          <Route exact path="/SobreNosotros" element={<SobreNosotros/>}/>
          <Route exact path="/Contactos" element={<Formulario/>}/>
        </Routes>
      </Container>
    </>
  );
};
