import { Button, Card } from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Link } from "react-router-dom";
import { Contador } from "./Contador";

export const ItemDetail = ({ item }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log('Añadir al carrito', cantidadSeleccionada)
  }
  console.log(item)
    
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={item.imgUrl}/>
      <Card.Body>
        <Card.Title>Sailor Moon</Card.Title>
        <Card.Text>
        Medias Bucaneras Con Lineas Y Anime Sailor Moon
        </Card.Text>
        <Button variant="outline-dark">Comprar</Button>
        <div>
        <Rate count={5} value={item} />
        </div>
        <div>
          <Link variant="bi bi-cart-check-fill" to="/carrito">carrito</Link>
          <Contador stock={5} initial={1} onAdd={onAdd} />
        </div>
      </Card.Body>
    </Card>
  );
};