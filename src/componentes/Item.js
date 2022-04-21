import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Precio } from "./Precio";

export const Item = ({ producto }) => {
  return (
      <Link className="btn-card" to={`/producto/${producto.itemId}`}>
        <Card className="card p-0 fixHeight img-with-zoom">
          <Card.Img className="img p-1 fixHeight" variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>
              <h1 className="precio"><Precio price={producto.price}></Precio></h1>
            </Card.Title>
            <Card.Text>{producto.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
  );
};
