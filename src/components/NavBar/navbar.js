import React from 'react';
import './navbar.css';

export default function Navbar(props) {
    return (
        <div className="navbar-container">
            <div className="navbar-links">
                <div>Home</div>
                <div>Find Help</div>
                <div>Identify Abuse</div>
                <div>Connect</div>
            </div>
                <img className="menu-icon"src="/public/img/website-icon.png"/>
        </div>
    );
}
