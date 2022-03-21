import { Container } from "react-bootstrap";
import { ItemListContainer } from "./ItemListContainer";

export const Main = () => {
  return (
    <>
    <Container>
      <h2 id="h2">Nuestros Productos</h2>
      <ItemListContainer />
    </Container>
    </>
  );
};
