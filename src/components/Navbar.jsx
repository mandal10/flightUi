import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <h1 className='logo'>
                    <img src='./image/flight.png' alt='flight image' />
                    <p className='r_fly'>Ready to Fly</p>
                </h1>

                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>

                <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Hotels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Flight"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Flights
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/developers"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Developers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/documentation"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Documentation
                        </NavLink>
                    </li>
                    <button className='loginBtn'>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Login
                        </NavLink>
                    </button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
