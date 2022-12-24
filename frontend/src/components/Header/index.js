// import { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";
import logo from './waterbnb_logo.png'


function Header( props ) {
    return (
        <div id='header-bar-7'>
        <Link id='logo' to='/'>
            <img id='logo-img' src={logo} />
            <span id='span-logo'>waterbnb</span>
        </Link>
        <a href="https://github.com/dtkalla" target="_blank">
            <img class="icons-header" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        </a>
        <br/>
        <a href="https://www.linkedin.com/in/daniel-kalla-496aa7234/" target="_blank">
            <img class="icons-header" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
        </a>
        </div>
        )
    }

export { Header }