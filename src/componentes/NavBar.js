import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Monedas } from "./Monedas";

export const NavBar = () => {
  const { cantidadTotalDeProductos } = useCart();

  return (
    <>
      <div id="layout-NavBar" className="NavBar-bg">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="container-fluid">
            <Navbar.Brand href="#home">
              <Link to="./">
                <img
                  className="imgLogo"
                  alt="#"
                  src="https://d3ugyf2ht6aenh.cloudfront.net/stores/227/495/themes/common/logo-680984998-1603467733-51b38fe7dbfe694f31ab0198426ff6471603467734-320-0.png?0"
                />
              </Link>
              <Link to="/Carrito" className="text-light">
                <span className="material-icons text-light">shopping_cart</span>
                {cantidadTotalDeProductos}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav menu">
              <Nav className="me-auto">
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
          </Container>
        </Navbar>
      </div>
    </>
  );
};
