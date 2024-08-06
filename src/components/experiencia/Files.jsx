import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';

export default function Files() {

    const [open, setOpen] = useState(null);


    const handleTooger =(id) =>{
        setOpen(open === id ? null : id);
    }


    return (
        <div>
            <Container  md={{ span: 3, offset: 3 }}>
                <Row className="mb-100">
                    <Card className="mr-3 mb-3 mt-5 mx-auto" style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>Gimnasio Fitness</Card.Title>
                            <Card.Text>Desarrollador Backend</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted" >Abril 2023</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Junio 2023</Card.Subtitle>
                            <Card.Text>
                                Responsable de crear un software para un realizar un inventario,
                                para este software utilice java con el framework SpringBoot y
                                como base de datos MySQL.
                            </Card.Text>
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Nav className="me-auto">
                                        <NavDropdown title="Tecnologías utilizadas" id="basic-nav-dropdown" onClick={() => handleTooger(1)} 
                                            aria-controls="roll-text-1"
                                            aria-expanded={open === 1}
                                            show={open === 1}>
                                            <Collapse in={open}>
                                                <div id="roll-text">
                                                    <NavDropdown.Item >Java</NavDropdown.Item>
                                                    <NavDropdown.Item >Mysql</NavDropdown.Item>
                                                    <NavDropdown.Item >Docker</NavDropdown.Item>
                                                    <NavDropdown.Item >Github</NavDropdown.Item>
                                                </div>
                                            </Collapse>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>

                    <Card className="mr-3 mb-3 mt-5 mx-auto" style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>Recursos Humanos Antigua</Card.Title>
                            <Card.Text>Desarrollador Fulltract</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Agosto 2023</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Octubre 2023</Card.Subtitle>
                            <Card.Text>
                                Encargado de crear una aplicación web para una empresa, que
                                permitía a los candidatos responder preguntas y a las reclutadoras
                                acceder a esos datos, utilice la siguientes tecnologías: React.js para el
                                frontend, MySQL para la base de datos y Java con el framework
                                Spring Boot para el backend.
                            </Card.Text>
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Nav className="me-auto">
                                        <NavDropdown title="Tecnologías utilizadas" id="basic-nav-dropdown" onClick={() => handleTooger(2)}
                                            aria-controls="roll-text-2"
                                            aria-expanded={open === 2} 
                                            show={open === 2}>                                                
                                            <Collapse in={open}>
                                                <div id="roll-text">
                                                    <NavDropdown.Item >Java</NavDropdown.Item>
                                                    <NavDropdown.Item >React Js</NavDropdown.Item>
                                                    <NavDropdown.Item >Oracle</NavDropdown.Item>
                                                    <NavDropdown.Item >Github</NavDropdown.Item>
                                                    <NavDropdown.Item >Docker</NavDropdown.Item>
                                                </div>
                                            </Collapse>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>

                    <Card className="mr-3 mb-3 mt-5 mx-auto" style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>Vitalmed</Card.Title>
                            <Card.Text>Administrador de redes sociales y pagina web</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Febrero 2023</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Febrero 2024</Card.Subtitle>
                            <Card.Text>
                                Responsable del manejo de la pagina web, del SEO y SEM, ademas del
                                manejo de las redes sociales de la empresa..
                            </Card.Text>
                            <Card.Link href="https://vitalmed.com.gt/emergencias-antigua-guatemala/">Pagina Vitalmed</Card.Link>
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Nav className="me-auto">
                                        <NavDropdown title="Tecnologías utilizadas" id="basic-nav-dropdown" onClick={() => handleTooger(3)}
                                            aria-controls="roll-text-3"
                                            aria-expanded={open === 3}
                                            show={open === 3}>
                                            <Collapse in={open}>
                                                <div id="roll-text">
                                                    <NavDropdown.Item >Wordpress</NavDropdown.Item>
                                                    <NavDropdown.Item >Meta Bussiness</NavDropdown.Item>
                                                    <NavDropdown.Item >Google Bussiness</NavDropdown.Item>
                                                </div>
                                            </Collapse>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
