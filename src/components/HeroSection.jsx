import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const HeroSection = () => {
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');
    const [search3, setSearch3] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search 1:", search1);
        console.log("Search 2:", search2);
        console.log("Search 3:", search3);
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Your Next Adventures Awaits!</h1>
                <p>Your journey starts here. Let's create something amazing together.</p>

                <form onSubmit={handleSearch} className="search-form">
                    <div className="search-bar">
                        <input
                            type="text"
                            value={search1}
                            onChange={(e) => setSearch1(e.target.value)}
                            placeholder="Where are you going?"
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={search2}
                            onChange={(e) => setSearch2(e.target.value)}
                            placeholder="Check-in-date check-out-date"
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={search3}
                            onChange={(e) => setSearch3(e.target.value)}
                            placeholder="2 Adults. 0 children. 1 Room"
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;
