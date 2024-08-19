import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/inicio">
            Inicio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to='/proyecots'>Proyectos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/experiencia">Experiencia</Nav.Link>
              <Nav.Link as={NavLink} to="/contacto">Contactamé</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                style={{ fontSize: '14px' }}
                title="Más"
                id="main-menu"
               >
                <NavDropdown.Item
                  as={NavLink}
                  to="/sobreMi"
                  style={{ padding: '2px 4px', fontSize: '14px' }}
                >
                  Sobre Mi
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink} to='/lenguaejes'
                  style={{ padding: '2px 4px', fontSize: '14px' }}
                >
                  Lenguajes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}