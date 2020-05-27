import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">LaraReact Crud</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                          <Link to="/" className="nav-link">Home</Link>
                          <Link to="/data" className="nav-link">Data</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavComponent
