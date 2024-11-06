import React, {useRef,  useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navRef=useRef();
    const [navOpen, setNavOpen] = useState(false);

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
        setNavOpen(!navOpen);
    };

  return (
    <header>
        <div className="logo">
            <img src="/assets/Visa-Bridge-logo.webp" alt='logo' />
        </div>
        <Link to="/login" className='login-button'>
            Login
        </Link>
        <nav ref={navRef} >
            <div className="links">
                <div className="menu-links">
                    <Link className='link' to="/">
                        Home
                    </Link>
                    <Link className='link' to="/our-story/">
                        Our Story
                    </Link>
                    <Link className='link' to="/the-need/" >
                        The Need
                    </Link>
                    <Link className='link' to="/countries/">
                        Countries
                    </Link>
                    <Link className='link' to="/videos/">
                        Videos
                    </Link>
                    <Link className='link' to="/blogs/">
                        Blogs
                    </Link>
                </div>
            </div>
            
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
                {navOpen ? <FaTimes /> : <FaBars />}
        </button>
    </header>
  )
}

export default Navbar
