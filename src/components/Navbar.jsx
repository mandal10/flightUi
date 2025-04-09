
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Import Hamburger icon and close icon

function Navbar() {

    // States to manage dropdown visibility and mobile menu visibility
    const [isHotelOpen, setIsHotelOpen] = useState(false);
    const [isFlightOpen, setIsFlightOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle mobile menu visibility

    // Toggle dropdown visibility on hover
    const toggleHotelMenu = () => setIsHotelOpen(!isHotelOpen);
    const toggleFlightMenu = () => setIsFlightOpen(!isFlightOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
    return (
        <div className="relative flex justify-between items-center  px-4 sm:px-6 md:px-12 lg:px-[50px] h-[80px]">
            {/* Left: Logo */}
            <div className="flex items-center">
                <img src="./image/flight.png" alt="logo" className="w-[30px] h-[30px]" />
                <h1 className="text-2xl font-bold ml-2">FlightApp</h1>
            </div>

            {/* Center: Navigation links */}
            <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:flex gap-10 hidden lg:block`}>
                <nav>
                    <ul className="flex flex-col md:flex-row space-x-0 md:space-x-8">
                        <li className="py-7 text-gray-800 hover:text-blue-500">
                            <Link to="/" className="text-lg">Home</Link>
                        </li>

                        {/* Hotels Dropdown */}
                        <li
                            onMouseEnter={toggleHotelMenu}
                            onMouseLeave={toggleHotelMenu}
                            className="relative py-7 text-gray-800 hover:text-blue-500"
                        >
                            <span className="flex items-center text-lg">
                                Hotels
                                <FaChevronDown className={`ml-2 mt-1 text-[16px] transition-transform ${isHotelOpen ? 'rotate-180' : ''}`} />
                            </span>
                            {isHotelOpen && (
                                <ul className="absolute left-0 top-full space-y-2 bg-white p-4 shadow-lg w-48 z-10">
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/hotel/1">Hotel 1</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/hotel/2">Hotel 2</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/hotel/3">Hotel 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Flights Dropdown */}
                        <li
                            onMouseEnter={toggleFlightMenu}
                            onMouseLeave={toggleFlightMenu}
                            className="relative py-7 text-gray-800 hover:text-blue-500"
                        >
                            <span className="flex items-center text-lg">
                                Flights
                                <FaChevronDown className={`ml-2 mt-1 text-[16px] transition-transform ${isFlightOpen ? 'rotate-180' : ''}`} />
                            </span>
                            {isFlightOpen && (
                                <ul className="absolute top-full left-0 space-y-2 bg-white p-4 shadow-lg w-48 z-10">
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/flights/1">Flight 1</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/flights/2">Flight 2</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/flights/3">Flight 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="py-7 text-gray-800 hover:text-blue-500">
                            <Link to="/reviews" className="text-lg">Reviews</Link>
                        </li>
                        <li className="py-7">
                            <Link to="/contact" className="text-lg text-gray-800 hover:bg-blue-500 hover:text-white rounded-full py-2 border border-gray-400 px-3">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Right: Sign In / Sign Up */}
            <div className="hidden lg:flex space-x-6 items-center">
                <Link to="/login" className="text-lg text-gray-800 hover:text-blue-500 py-5">Sign In</Link>
                <Link to="/signup" className="text-lg text-white bg-blue-500 px-[20px] py-2 rounded-sm hover:bg-blue-400 hover:text-white">Sign Up</Link>
            </div>

            {/* Hamburger Icon for Medium Screens and Below */}
            <div className="lg:hidden flex items-center" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaTimes className="text-2xl text-gray-800 text-[30px]" />
                ) : (
                    <FaBars className="text-2xl text-gray-800 text-[30px]" />
                )}
            </div>

            {/* Mobile Menu (Positioned to the left) */}
            <div
                className={`lg:hidden absolute top-full left-0 w-[100%] bg-white z-50 transition-transform ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
                style={{ height: '100vh' }}
            >
                <nav>
                    <ul className="flex flex-col items-center  py-10">
                        <li className="py-3 text-gray-800 hover:text-blue-500">
                            <Link to="/" className="text-lg">Home</Link>
                        </li>

                        {/* Hotels Dropdown */}
                        <li
                            onMouseEnter={toggleHotelMenu}
                            onMouseLeave={toggleHotelMenu}
                            className="relative py-3 text-gray-800 hover:text-blue-500"
                        >
                            <span className="flex items-center text-lg ">
                                Hotels
                                <FaChevronDown className={`ml-2 mt-1 text-[16px] transition-transform ${isHotelOpen ? 'rotate-180' : ''}`} />
                            </span>
                            {isHotelOpen && (
                                <ul className="absolute left-0 top-full space-y-2 bg-white p-4 shadow-lg w-48 z-10">
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/hotel/1">Hotel 1</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/hotel/2">Hotel 2</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/hotel/3">Hotel 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Flights Dropdown */}
                        <li
                            onMouseEnter={toggleFlightMenu}
                            onMouseLeave={toggleFlightMenu}
                            className="relative py-3 text-gray-800 hover:text-blue-500"
                        >
                            <span className="flex items-center text-lg ">
                                Flights
                                <FaChevronDown className={`ml-2 mt-1 text-[16px] transition-transform ${isFlightOpen ? 'rotate-180' : ''}`} />
                            </span>
                            {isFlightOpen && (
                                <ul className="absolute top-full left-0 space-y-2 bg-white p-4 shadow-lg w-48 z-10">
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/flights/1">Flight 1</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/flights/2">Flight 2</Link>
                                    </li>
                                    <li className="text-gray-800 hover:text-blue-500">
                                        <Link to="/flights/3">Flight 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="py-3 text-gray-800 hover:text-blue-500">
                            <Link to="/reviews" className="text-lg">Reviews</Link>
                        </li>
                        <li className="py-3">
                            <Link to="/contact" className="text-lg text-gray-800 hover:bg-blue-500 hover:text-white rounded-full py-2 border border-gray-400 px-3">
                                Contact Us
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link to="/login" className="text-lg text-gray-800 hover:text-blue-500 py-5">
                                Sign In
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link to="/signup" className="text-lg text-white bg-blue-500 px-[20px] py-2 rounded-sm hover:bg-blue-400 hover:text-white">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar