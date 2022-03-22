import { Card, Button } from "react-bootstrap";
export const Item = ({ producto }) => {
  console.log(producto);
  return (
    <Card className="card">
      <Card.Img
        className="img"
        variant="top"
        src={producto.imgUrl}
      />
      <Card.Body>
        <Card.Title>
          <h1>{producto.precio}</h1>
        </Card.Title>
        <Card.Text>{producto.nombre}</Card.Text>
        <Button variant="outline-dark">Comprar</Button>
      </Card.Body>
    </Card>
  );
};
