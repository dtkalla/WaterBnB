// import { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";


function Header( props ) {
    return (
        <Link id='logo' to='/'>
            <img id='logo-img' src="http://clipart-library.com/img/1699067.png" />
            <span id='span-logo'>waterbnb</span>
        </Link>
    )
}

export { Header }