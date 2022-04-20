import { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { Monedas } from "../Monedas";
import "./NavBar.css";

export const NavBar = () => {
  const { cantidadTotalDeProductos } = useCart();

  return (
    <>
      <div id="layout-NavBar" className="NavBar-bg">
        <Link to="./">
          <img
            className="imgLogo"
            alt="#"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/227/495/themes/common/logo-680984998-1603467733-51b38fe7dbfe694f31ab0198426ff6471603467734-320-0.png?0"
          />
        </Link>
        <Link to="/Carrito">
          <span className="material-icons">shopping_cart</span>
          {cantidadTotalDeProductos}
        </Link>
        <Nav>
          <Nav.Item>
            <Nav.Link className="nav-Link" href="/SobreNosotros">
              Sobre Nosotros
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-Link" href="/Contactos">
              Contactanos
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Productos" className="nav-Link">
          <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.Item href="/Categoria/4">
              Remeras de mujer
            </NavDropdown.Item>
            <NavDropdown.Item href="/Categoria/3">
              remeras de hombre
            </NavDropdown.Item>
            <NavDropdown.Item href="/Categoria/2">
              remeras de niños
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Item>
            <Monedas></Monedas>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};
