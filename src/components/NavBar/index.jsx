// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    const categories = ['Bibliotecas', 'Camas', 'Escritorios', 'Sillas', 'Sillones']
    return (
        <Navbar sticky="top" expand="sm" bg="light" data-bs-theme="light" className="bg-body-tertiary">
            <Container>
                <Link to="/"><img src="https://tiendadeco.netlify.app/img/LogoTiendaDeco.jpg" height={50} /></Link>
                <Row>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto justify-content-around flex-grow-1">
                            {categories.map(category => (
                               <Link key={category} style={{textDecoration: 'none', padding: '5px 7px', color: '#c6c6c6'}} to={`/category/${category}`}>{category}</Link>
                            ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col>
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
