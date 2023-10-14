import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import image from '../../images/logo.png';
const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-white shadow-sm p-2 fs-5">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={image}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo">
                        </img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/pages">Pages</Nav.Link>
                            <Nav.Link as={Link} to="/news">News</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <span className='mt-2'><FontAwesomeIcon icon={faUser} /></span>
                            <Nav.Link href="#deets"> Sign in</Nav.Link>
                            <span className='mt-2'>/</span>
                            <Nav.Link href="#memes">
                                Register
                            </Nav.Link>
                            <span className='mt-1 fs-4'>|</span>
                            <Nav.Link href="#memes">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} />
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;