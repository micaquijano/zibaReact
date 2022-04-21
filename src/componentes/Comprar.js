import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Precio } from "./Precio";

export const Comprar = ({ items, precioFinal }) => {
  const [codigoDeCompra, setCodigoDeCompra] = useState(
    (Math.random() * 1000000).toFixed()
  );
  const [emailValidate, setEmailValidate] = useState(false);
  const [show, setShow] = useState(false);
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const regexEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const handleClose = () => {
    setShow(false);
    setCodigoDeCompra((Math.random() * 1000000).toFixed());
    setEmailValidate(false);
    cambiarInputCorreo("");
  };
  const handleShow = () => setShow(true);

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };
  const validateEmail = () => {
    if (regexEmail.test(inputCorreo)) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  };

  return (
    <>
      <Container>
        <Button variant="dark" className="w-100" onClick={handleShow}>
          Comprar
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {emailValidate
              ? "Pedido de compra confirmado!"
              : "Finalizar Pedido"}
          </Modal.Title>
        </Modal.Header>
        {emailValidate ? (
          <Modal.Body>
            <h3>Pedido Nº #{codigoDeCompra}</h3>
            <p>
              Recibira un email con las instrucciones para finalizar la compra.
              Confirmando medio de pago y forma de entrega.
            </p>
            <p>
              Por cualquier consulta o inconveniente con su pedido, comunicarse
              a {" "}
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
          </Modal.Body>
        ) : (
          <>
            <Modal.Body>
              <label className="form-label mb-1">
                Dirección de Correo Electronico
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required
                value={inputCorreo}
                onChange={handleInputCorreo}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" type="submit" onClick={validateEmail}>
                Confirmar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};
