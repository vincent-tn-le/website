import React from 'react'
import './navbar.css'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='empty'></div>
 
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} offset={-70} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>
            <button className='desktopMenuBtn' onClick={()=> {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
            }}>
            <img src={contactImg} alt= "Contact Me" className="desktopMenuImg"/>Contact Me
            </button>
        </nav>
    )
}

export default Navbar;