import React from 'react'
import './navbar.css'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='empty'></div>
 
            <div className='desktopMenu'>
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt= "Contact Me" className="desktopMenuImg"/>Contact Me
            </button>
        </nav>
    )
}

export default Navbar;