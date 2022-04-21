import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Precio } from "./Precio";

export const Item = ({ producto }) => {
  return (
      <Link className="btn-card" to={`/producto/${producto.itemId}`}>
        <Card className="card p-0 fixHeight">
          <Card.Img className="img p-1 fixHeight" variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>
              <Precio price={producto.price}></Precio>
            </Card.Title>
            <Card.Text>{producto.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
  );
};
