import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#updates">Updates</a>
                <a href="#tender">Tender</a>
                <a href="#cart">Cart</a>
                <a href="#benefits">Benefits</a>
                <a href="#account">Account</a>
            </div>
            <div className="navbar-right">
                <input type="text" placeholder="Search..." className="search-bar" />
                <button className="search">Search</button>
            </div>
        </nav>
    );
};

export default Navbar;
