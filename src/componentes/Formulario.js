import React, { useState } from "react";

export const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");

  // validacion de los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion del formulario, Si es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  // cambia el estado del inputCorreo 
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  return (
    <>
      <section
        action="" onSubmit={handleSubmit} className="customer p-3 formulario">
        <main id="customer">
          <h1>INGRESE SUS DATOS</h1>
          <div class="contact-card">
            <div id="form">
              <div class="column-1"></div>
              <div class="column-2">
                <label class="form-label mb-1" for="name">
                  Nombre y Apellido
                </label>
                <input class="form-control name"
                 type="text"
                  name="name"
                  id="name"
                  value={inputNombre}
                  onChange={handleInputNombre}
                />

                <label class="form-label mb-1" for="phone">
                  Teléfono
                </label>
                <input
                  class="form-control name"
                  type="phone"
                  name="phone"
                  id="phone"
                />

                <label class="form-label mb-1" for="adress">
                  Dirección
                </label>
                <input
                  class="form-control"
                  type="adress"
                  name="adress"
                  id="adress"
                  value={inputCorreo}
                  onChange={handleInputCorreo}
                />
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Comentario
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <button class="btn mt-3" id="enviarInfo">
                  Enviar Info
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
