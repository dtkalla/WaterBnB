// import { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";


function Header( props ) {
    return (
        <Link id='logo' to='/'>
            <img id='logo-img' src="https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992" />
            <span id='span-logo'>waterbnb</span>
        </Link>
    )
}

export { Header }