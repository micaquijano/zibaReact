import { Button, Card } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Link } from "react-router-dom";
import { Contador } from "./Contador";

export const ItemDetail = ({ Item }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log('Añadir al carrito', cantidadSeleccionada)
  }
    
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src=""/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        <Rate count={5} value={Item} />
        <div>
          <Link className="menu-Link" to="/carrito">carrito</Link>
          <Contador stock={5} initial={1} onAdd={onAdd} />
        </div>
      </Card.Body>
    </Card>
  );
};
