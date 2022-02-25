import logo from '../logo.svg';
import './NavBar.css';

import { CartWidget } from './CartWidget';
function NavBar() {
    return (
        <div className="navbar">
            <div className="left_side">
            <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="navbar_menu">
                <li>inicio</li>
                <li>productos</li>
                <li><CartWidget CantProd={5}/></li>
            </ul>
        </div>
    );
}

export default NavBar;