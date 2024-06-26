import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
    <Navbar bg="danger" variant="dark">
    <Container>
          <Navbar.Brand as={NavLink} to='/inicio' href="#inicio">Inicio</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/proyecots'>Proyectos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to='/experiencia'> Experiencia</Nav.Link>
            <Nav.Link as={NavLink} to='/contacto'> Contactamé</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Más" id="main-menu">
            <NavDropdown.Item as={NavLink} to='/sobreMi' >Sobre Mi</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/lenguaejes'>Lenguajes</NavDropdown.Item>

          </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}