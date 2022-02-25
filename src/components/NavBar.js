import logo from '../logo.svg';
import './NavBar.css';

import { CartWidget } from './CartWidget';
import { useState } from 'react';
function NavBar() {
    const [count, setCount] = useState(Number(0));
    return (
        <div className="navbar">
            <div className="left_side">
            <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="navbar_menu">
                <li>inicio</li>
                <li>productos</li>
                <li><CartWidget CantProd={count}/></li>
            </ul>
        </div>
    );
}

export default NavBar;