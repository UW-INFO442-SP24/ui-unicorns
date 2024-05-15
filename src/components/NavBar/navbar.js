import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="navbar-container">
            <img className="menu-icon"src="/img/website-icon.png"/>

            <div className="navbar-links">
                <Link to="/home">Home</Link>
                <Link to="/findhelp">Find Help</Link>
                <Link to="/identify">Identify Abuse</Link>
                <Link to="/connect">Connect</Link>
            </div>
        </div>
    );
}
