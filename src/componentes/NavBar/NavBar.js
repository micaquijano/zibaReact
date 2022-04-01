import { Link } from "react-router-dom";
import "./NavBar.css";


export const NavBar = () => {
  return (
    <>
    
      <div id="layout-header" className="header-bg">
        <Link to="./">
          <h1>Tienda Online</h1>
          <img src="..." class="img-fluid" alt="..."></img>
        </Link>
        <Link to="./carrito">
          <span className="material-icons">shopping_cart</span>
        </Link>
        <div>
          <Link to="/categoria/1" className="menu-Link">cat1</Link>
          <Link to="/categoria/2" className="menu-Link">cat2</Link>
          <Link to="/categoria/3" className="menu-Link">cat3</Link>
        </div>
      </div>
    </>
  );
};
