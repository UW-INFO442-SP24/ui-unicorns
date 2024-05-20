import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="navbar-container">
            <img className="menu-icon" src="/img/website-icon.png" />

            <div className="navbar-links">
                <Link to="/home">
                    <strong>Home</strong>

                </Link>

                <Link to="/findhelp">
                    <strong>Find Help</strong>
                </Link>

                <Link to="/identify">
                    <strong>Identify Abuse</strong>
                
                </Link>

                <Link to="/connect">
                    <strong>Connect</strong>
                
                </Link>
                
            </div>
        </div>
    );
}
