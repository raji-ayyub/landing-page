import React from 'react';
import logo from '../Images/logo.png';

function Navbar() {
    return(
        <div className= "navbar">
            <div className='container'>
                <div className='nav-menu'>
                    <img src={logo} alt="logo" className='h-logo' />
                </div>
            </div>
        </div>
    )
    
}

export default Navbar;