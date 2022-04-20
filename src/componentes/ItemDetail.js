import { Button, Card } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Link } from "react-router-dom";
import { Contador } from "./Contador";
import { ARS_SYMBOL, useMoney } from "../context/money";
import { useCart } from "../context/cartContext";

export const ItemDetail = ({ item }) => {
  const { dolarValue, symbol } = useMoney();
  const { agregar } = useCart();
  const onAdd = (cantidad) => {
    agregar(cantidad, item);
  };

  return (
    <Card id="card-detail" style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {symbol === ARS_SYMBOL ? item.price * dolarValue : item.price}
        </Card.Text>
        <Card.Text>{item.sizes}</Card.Text>
        <Button variant="outline-dark">Comprar</Button>
        <div>
          <Rate count={item.rating} value={item} />
        </div>
        <div>
          <Link className="material-icons" to="/carrito">
            shopping_cart
          </Link>
          <Contador stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
      </Card.Body>
    </Card>
  );
};
