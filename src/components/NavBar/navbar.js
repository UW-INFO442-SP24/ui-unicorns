import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import './navbar.css';

export default function CustomNavbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar bg="#E07EC0" expand="lg" style={{ padding: '10px 0', marginBottom: '20px' }}>
            <Container className="navbar-container">
                <img className="menu-icon" src="/img/website-icon.png" alt="menu icon" onClick={toggleMenu} />
                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/findhelp">Find Help</Link>
                        <Link className="nav-link" to="/identify">Identify Abuse</Link>
                        <Link className="nav-link" to="/connect">Connect</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



