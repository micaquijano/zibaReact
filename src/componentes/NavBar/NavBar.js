import { Link } from "react-router-dom";
import "./NavBar.css";


export const NavBar = () => {
  return (
    <>
      <div id="layout-header" className="header-bg">
        <Link to="./">
          <h1>Mi e commerce</h1>
        </Link>
        <Link to="./carrito">
          <span className="material-icons">shopping_cart</span>
        </Link>
        <div>
          <Link to="cat1" className="menu-Link">
            cat1
          </Link>
          <Link to="cat2" className="menu-Link">
            cat2
          </Link>
          <Link to="cat3" className="menu-Link">
            cat3
          </Link>
        </div>
      </div>
    </>
  );
};
