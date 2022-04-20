import React, { useState } from "react";

export const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputTelefono, cambiarInputTelefono] = useState("");

  

  // validacion de los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion del formulario, Si es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // cambiar el estado del input...

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  }; 
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };
  const handleInputTelefono = (e) => {
    cambiarInputTelefono(e.target.value);
  };
  


  return (
    <>
      <form
        action="" onSubmit={handleSubmit} className="customer p-3 formulario">
        <main id="customer">
          <h1>INGRESE SUS DATOS</h1>
          <div className="contact-card">
            <div id="form">
              <div className="column-1"></div>
              <div className="column-2">
                <label className="form-label mb-1">
                  Nombre y Apellido
                </label>
                <input className="form-control name"
                 type="text"
                  name="name"
                  id="name"
                  value={inputNombre}
                  onChange={handleInputNombre}
                />

                <label className="form-label mb-1">
                  Teléfono
                </label>
                <input
                  className="form-control name"
                  type="phone"
                  name="phone"
                  id="phone"
                  value={inputTelefono}
                  onChange={handleInputTelefono}
                />

                <label className="form-label mb-1">
                  Dirección de Correo Electronico
                </label>
                <input
                  className="form-control"
                  type="adress"
                  name="adress"
                  id="adress"
                  value={inputCorreo}
                  onChange={handleInputCorreo}
                />
                <div className="mb-3">
                  <label className="form-label">
                    Comentario
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="commentary"
                    id="commentary"
                  ></textarea>
                </div>

                <button type="submit" className="btn mt-3" id="enviarInfo">
                  Enviar Info 
                </button>
              </div>
            </div>
          </div>
        </main>
      </form>
      </>
  );
}
