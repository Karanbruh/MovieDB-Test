import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/search/${searchQuery}`);
        }
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                MovieDB
            </Link>
            <div className="nav-link">
                <NavLink to="/popular" activeclassname="active-link">Popular</NavLink>
                <NavLink to="/top-rated" activeclassname="active-link">Top Rated</NavLink>
                <NavLink to="/upcoming" activeclassname="active-link">Upcoming</NavLink>
            </div>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
}

export default Navbar;