import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Monedas } from "./Monedas";

export const NavBar = () => {
  const { cantidadTotalDeProductos } = useCart();

  return (
    <>
      <Navbar collapseOnSelect expand="xl" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <Link to="./">
              <img
                className="imgLogo"
                alt="#"
                src="https://d3ugyf2ht6aenh.cloudfront.net/stores/227/495/themes/common/logo-680984998-1603467733-51b38fe7dbfe694f31ab0198426ff6471603467734-320-0.png?0"
              />
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link to="/Carrito" className="text-light nav-link-carrito">
              <span className="material-icons text-light">shopping_cart</span>
              {cantidadTotalDeProductos}
            </Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav menu"
            className="flex-lg-grow-0"
          >
            <Nav className="me-auto float-end">
              <Nav.Link className="nav-Link" href="/SobreNosotros">
                {" "}
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link className="nav-Link" href="/Contactos">
                Contactanos
              </Nav.Link>
              <NavDropdown
                title="Productos"
                className="nav-Link"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="link" href="/Categoria/4">
                  Remeras de mujer
                </NavDropdown.Item>
                <NavDropdown.Item className="link" href="/Categoria/3">
                  remeras de hombre
                </NavDropdown.Item>
                <NavDropdown.Item className="link" href="/Categoria/2">
                  remeras de niños
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Monedas></Monedas>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
