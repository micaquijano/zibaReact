import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (

    <Card className="card">
      <Card.Img className="img" variant="top" src={producto.imgUrl} />
      <Card.Body>
        <Card.Title>
          <h1>{producto.precio}</h1>
        </Card.Title>
        <Card.Text>{producto.nombre}</Card.Text>
        <Button variant="outline-dark">Comprar</Button>
          <Link className="bi bi-eye-fill" to={`/producto/${producto.id}`}>
            ver
          </Link>
      </Card.Body>
    </Card>
  );
};
