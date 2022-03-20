import { Card, Button, Row } from "react-bootstrap";
export const Item = ({ producto }) => {
  console.log(producto);
  return (
    <Card className="card">
      <Card.Img
        className="img"
        variant="top"
        src="https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/AB/rBVaWF6ZeUOACvfmAAE3pWJ3kGM967.jpg/tights-fashion-female-clothing-cartoon-cat.jpg"
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
