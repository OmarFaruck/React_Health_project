import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Navber/Navber.css'
import Input from '../Input/Input';
const Navber = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <NavLink className= "nav-link" to="/">
                        <p className='health'><span className='one'>One</span>-Health</p>
                    </NavLink>
                    <NavLink className= "nav-link" to="/">
                        <Input/>
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className= "nav-link" to="/">Home</NavLink>
                            <NavLink className= "nav-link" to="/about">About Us</NavLink> 
                            <NavLink className= "nav-link" to="/doctor">Doctors </NavLink>
                            <NavLink className= "nav-link" to="/news">News </NavLink>
                            <NavLink className= "nav-link" to="/contact">Contact </NavLink> 
                            <button className='navber_btn'>Login / Register</button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navber;