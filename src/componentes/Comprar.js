import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useCart } from "../context/cartContext";
import { regexEmail } from "../data/Regex";
import { Precio } from "./Precio";

export const Comprar = ({ items, precioFinal }) => {
  const [codigoDeCompra, setCodigoDeCompra] = useState(
    (Math.random() * 1000000).toFixed()
  );
  const [emailValidate, setEmailValidate] = useState(false);
  const [show, setShow] = useState(false);
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [confirmBuy, setConfirmBuy] = useState(false);
  const { eliminarTodo } = useCart();

  const handleClose = () => {
    setShow(false);
    setCodigoDeCompra((Math.random() * 1000000).toFixed());
    setEmailValidate(false);
    setConfirmBuy(false);
    cambiarInputCorreo("");
  };
  const handleShow = () => setShow(true);

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
    validateEmail();
  };

  const validateEmail = () => {
    setEmailValidate(inputCorreo.match(regexEmail));
  };
  const handleBuy = () => {
    setConfirmBuy(true);
  };
  const finalizeBuy = () => {
    eliminarTodo();
    handleClose();
  };

  return (
    <>
      <Container>
        <Button variant="dark" className="w-100" onClick={handleShow}>
          Comprar
        </Button>
      </Container>

      <Modal show={show} backdrop={false} onHide={handleClose}>
        <Modal.Header closeButton={!confirmBuy}>
          <Modal.Title>
            {confirmBuy ? "Pedido de compra confirmado!" : "Finalizar Pedido"}
          </Modal.Title>
        </Modal.Header>
        {confirmBuy ? (
          <>
            <Modal.Body>
              <div className="info">
                <h3>Pedido Nº #{codigoDeCompra}</h3>
                <p>
                  Recibira un email con las instrucciones para finalizar la
                  compra. Confirmando medio de pago y forma de entrega.
                </p>
                <p>
                  Por cualquier consulta o inconveniente con su pedido,
                  comunicarse a{" "}
                  <a href="mailto:compras@valkyryaproductos.org">
                    compras@valkyryaproductos.org
                  </a>{" "}
                </p>
                <p>Resumen de compra:</p>
                {items.map(
                  (item) =>
                    `Producto: ${item.name}. Cantidad: ${item.cantidad}. Talle: ${item.size} \n`
                )}
                <p>
                  Precio final: <Precio price={precioFinal}></Precio>
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" type="submit" onClick={finalizeBuy}>
                Finalizar
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Body>
              <label className="form-label mb-1">
                Dirección de Correo Electronico
              </label>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                isInvalid={!emailValidate}
                value={inputCorreo}
                onChange={handleInputCorreo}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="dark"
                disabled={!emailValidate}
                type="submit"
                onClick={handleBuy}
              >
                Confirmar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};
