import {
  Button,
  Card,
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Contador } from "./Contador";
import { useCart } from "../context/cartContext";
import parse from "html-react-parser";
import { useState } from "react";
import { Precio } from "./precio";
import { ToastContainer, toast } from "react-toastify";

export const ItemDetail = ({ item }) => {
  const { agregar } = useCart();
  const [talle, setTalle] = useState(3);
  const onAdd = (cantidad) => {
    agregar(cantidad, item);
    toast.success(`Producto: ${item.name} agregado al carrito`);

  };

  const description = parse(item.description);

  return (
    <Container>
      <ToastContainer />
      <Row className="justify-content-md-center">
        <Col sm={4}>
          <Card id="card-detail" className="m-0 p-0">
            <Card.Img
              className="responsive detailImg"
              variant="top"
              src={item.img}
            />
          </Card>
        </Col>

        <Col sm={8}>
          <Container
            id="card-detail-info"
            className="m-0 p-0 bg-white text-uppercase"
          >
            <Card.Body>
              <Card.Title>
                <h1>{item.name}</h1>
              </Card.Title>
              <Row className="fix200h">
                <Col>
                  <Precio price={item.price}></Precio>
                </Col>
                <Col>
                  <Card.Text>Calificaciones del producto:</Card.Text>
                  <Rate disabled count={5} value={item.rating} /> <span className="h1">{item.rating}</span>
                </Col>
              </Row>
              <Row className="justify-content-md-right mb-3">
                <Col sm={{ span: 6, offset: 6 }}>
                  <Container>
                    <Button variant="dark" className="w-100">Comprar</Button>
                  </Container>
                </Col>
              </Row>
              <Row className="fix200h">
                <Col>
                  <Card.Text>Talles disponibles:</Card.Text>
                  <ButtonGroup className="mb-2">
                    {item?.sizes?.map((size, i) => (
                      <ToggleButton
                        key={i}
                        id={`size-${i}`}
                        type="radio"
                        className={talle === size ? "btn-dark" : null}
                        variant="secondary"
                        name="radio"
                        value={size}
                        checked={talle === size}
                        onChange={(e) => setTalle(size)}
                      >
                        {size}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Col>
                <Col>
                  <Contador stock={item.stock} initial={1} onAdd={onAdd} />
                </Col>
              </Row>
            </Card.Body>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Card>
          <Card.Body>{description}</Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
