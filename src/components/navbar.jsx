import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from './motorinc_logo.jpg';

function Navbar(){
    return(
        <>
        <nav className='navbar'>
        {/* Make logo a link that refreshes the page */}
        <Link to='/' className='navlink'>
            <img src={logo} className='logo' alt='MotorInc Logo'></img>
        </Link>

        <Link to="/about" className='navlink'>About</Link>
        <Link to="/forums" className='navlink'>Forums</Link>
        <Link to="/rides" className='navlink'>What we drive</Link>
        <Link to="/shows" className='navlink'>Our shows</Link>
        <Link to="/contact" className='navlink'>Contact</Link>
        <Link to="/gallery" className='navlink'>Gallery</Link>

        {/* Add a search bar too, I want to learn how to do that as well. */}
        <input type="text" placeholder="Search..." className="searchbar" />
        </nav>
        </>
     
    );
}

export default Navbar;