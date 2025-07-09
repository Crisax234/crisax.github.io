import React from "react";
import Dash from "../img/dash.png";

import { Link } from 'react-router-dom'


function Navbar() {
    return (
    <header >
        <a class="logo" href="/">
            <img class="logo"  src={Dash} alt="logo" />
        </a>
        <nav>
            <ul class="nav_links">
                <li><Link to='/aboutdash'>Sobre Dashve</Link></li>
                <li><Link to='/login'>Iniciar sesión</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;