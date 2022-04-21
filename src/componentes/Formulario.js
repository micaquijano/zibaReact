import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { regexEmail, regexPhone, regexText } from "../data/Regex";

export const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputTelefono, cambiarInputTelefono] = useState("");
  const [inputComentario, cambiarInputComentario] = useState("");
  const [telefonoValido, setTelefonoValido] = useState(false);
  const [nombreValido, setNombreValido] = useState(false);
  const [comentarioValido, setComentarioValido] = useState(false);
  const [correoValido, setCorreoValido] = useState(false);

  const [send, setSend] = useState(false);

  // validacion de los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    cambiarInputNombre("");
    cambiarInputCorreo("");
    cambiarInputTelefono("");
    cambiarInputComentario("");
  };


  // cambiar el estado del input...

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
    validarNombre();
  };
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
    validateEmail();
  };
  const handleInputTelefono = (e) => {
    cambiarInputTelefono(e.target.value);
    validarTelefono();
  };

  const handleInputComentario = (e) => {
    cambiarInputComentario(e.target.value);
    validarComentario();
  };

  const validarTelefono = () => {
    setTelefonoValido(inputTelefono.match(regexPhone));
  };

  const validarNombre = (input) => {
    setNombreValido(inputNombre.match(regexText));
  };

  const validarComentario = (input) => {
    setComentarioValido(inputComentario.match(regexText));
  };
  const validateEmail = () => {
    setCorreoValido(inputCorreo.match(regexEmail));
  };

  return (
    <>
      {send ? (
        <div className="text-light">
          <h1>Formulario enviado :)</h1>
          <h4>Gracias por tu comentario, te contestaremos a la brevedad</h4>
        </div>
      ) : (
        <form
          action=""
          onSubmit={handleSubmit}
          className="customer p-3 formulario"
        >
          <main id="customer">
            <h1>INGRESE SUS DATOS</h1>
            <div className="contact-card">
              <div id="form">
                <div className="column-1"></div>
                <div className="column-2">
                  <label className="form-label mb-1">Nombre y Apellido</label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre Apellido"
                    isInvalid={!nombreValido}
                    value={inputNombre}
                    onChange={handleInputNombre}
                  />

                  <label className="form-label mb-1">Teléfono</label>

                  <Form.Control
                    type="text"
                    placeholder="1512345678"
                    isInvalid={!telefonoValido}
                    value={inputTelefono}
                    onChange={handleInputTelefono}
                  />

                  <label className="form-label mb-1">
                    Dirección de Correo Electronico
                  </label>
                  <Form.Control
                    type="email"
                    placeholder="email@example.com"
                    isInvalid={!correoValido}
                    value={inputCorreo}
                    onChange={handleInputCorreo}
                  />

                  <div className="mb-3">
                    <label className="form-label">Comentario</label>
                    <Form.Control
                      isInvalid={!comentarioValido}
                      value={inputComentario}
                      onChange={handleInputComentario}
                      as="textarea"
                      rows={3}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={
                      !telefonoValido ||
                      !nombreValido ||
                      !comentarioValido ||
                      !correoValido
                    }
                    className="btn mt-3"
                    id="enviarInfo"
                  >
                    Enviar Info
                  </button>
                </div>
              </div>
            </div>
          </main>
        </form>
      )}
    </>
  );
};
