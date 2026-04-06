import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import icon100 from '../../images/icon100.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const closeMenu = () => setToggleMenu(false);

  const handleHomeClick = () => {
    closeMenu();
    if (location.pathname !== '/' || location.hash) {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    closeMenu();
    if (location.pathname !== '/' || location.hash !== '#about') {
      navigate({ pathname: '/', hash: '#about' });
      return;
    }

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    closeMenu();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {icon100} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Zlibary</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <button type='button' className='nav-link nav-link-btn text-uppercase text-white fs-22 fw-6 ls-1' onClick={handleHomeClick}>Home</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='nav-link nav-link-btn text-uppercase text-white fs-22 fw-6 ls-1' onClick={handleAboutClick}>About</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='nav-link nav-link-btn text-uppercase text-white fs-22 fw-6 ls-1' onClick={handleContactClick}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar