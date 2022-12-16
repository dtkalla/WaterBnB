// import { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";
import logo from './waterbnb_logo.png'


function Header( props ) {
    return (
        <Link id='logo' to='/'>
            <img id='logo-img' src={logo} />
            <span id='span-logo'>waterbnb</span>
        </Link>
    )
}

export { Header }