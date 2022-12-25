import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from '../Navigation';
import "./Dropdown.css";
import { useSelector } from 'react-redux';


function Dropdown( props ) {
    const [ display, setDisplay ] = useState( 'none' )
    const sessionUser = useSelector(state => state.session.user);
    function handleClick() {
        if ( display === 'none' ) {
            setDisplay( 'block' )
        } else {
            setDisplay( 'none' )
        }
    }

    function handleClick2() {
        setDisplay( 'none' )
    }

    return (
        <div>
            <div className='dropdown-button' onClick={handleClick}>
                    <img id='hamburger' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" />
                    <img id='profile-dropdown-pic' src={sessionUser ? sessionUser.profilePic : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'} />
                </div>
            <div className='dropdown-menu' onClick={handleClick2} style={{display:display}}>
                <div id="modal2-background" />
                <Navigation />
            </div>

        </div>

    )

}

export { Dropdown }