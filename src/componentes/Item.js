import { Card, Button,  Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ARS_SYMBOL, useMoney } from "../context/money";

export const Item = ({ producto }) => {
  const { dolarValue, symbol } = useMoney();

  return (
    <div className="container">
    <Link className="btn-card" to={`/producto/${producto.itemId}`}>
      <Card className="card">
        <Card.Img className="img" variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>
            <h1>
              {symbol === ARS_SYMBOL
                ? producto.price * dolarValue
                : producto.price}
              <Badge className="small_text" bg="info">
                {symbol}
              </Badge>
            </h1>
          </Card.Title>
          <Card.Text>{producto.name}</Card.Text>
          <Button variant="outline-dark">Comprar</Button>
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
};
