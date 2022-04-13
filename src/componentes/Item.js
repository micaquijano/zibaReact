import { Card, Button,  Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ARS_SYMBOL, useMoney } from "../context/money";

export const Item = ({ producto }) => {
  const { dolarValue, symbol } = useMoney();

  return (
    <div className="container">
      <Card className="card">
        <Card.Img className="img" variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>
            <h1>
              {symbol === ARS_SYMBOL
                ? producto.precio * dolarValue
                : producto.precio}
              <Badge className="small_text" bg="info">
                {symbol}
              </Badge>
            </h1>
          </Card.Title>
          <Card.Text>{producto.nombre}</Card.Text>
          <Button variant="outline-dark">Comprar</Button>
          <Link className="bi bi-eye" to={`/producto/${producto.id}`}>
            ver
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
