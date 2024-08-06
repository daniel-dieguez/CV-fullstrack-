import React from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Css from '../../img/css.png'
import Docker from '../../img/docker.png';
import Git from '../../img/github.png';
import Java from '../../img/java.png'
import Js from '../../img/js.png';
import Reactjs from '../../img/react.png';
import Csharp from '../../img/c-sharp.png'

export default function Cards() {
    return (
            <Container>
              <Carousel controls={false} interval={3000} pause='hover'>
                <Carousel.Item>
                  <Row className="justify-content-md-center">
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="dark" bg={'secondary'} text='white' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Java} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>Java</Card.Title>
                          <Card.Text>
                            Desarrollo de Java EE junto a ello, la utilización de Springboot como framework.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Js} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>JavaScript</Card.Title>
                          <Card.Text>
                            Desarrollo de interacción e interfaz con el usuario.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Reactjs} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>React Js</Card.Title>
                          <Card.Text>
                            Librería de trabajo para el desarrollo frontend de los proyectos.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row className="justify-content-md-center">
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="primary" style={{ width: '17rem' }}>
                        <Card.Img variant="top" src={Csharp} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>C Sharp</Card.Title>
                          <Card.Text>
                            Herramienta de trabajo para almacenar repositorios y códigos de proyectos.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="primary" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Css} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>Css</Card.Title>
                          <Card.Text>
                            Desarrollo de estilos y animaciones en CSS para captar la atención del usuario.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="primary" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Docker} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>Docker</Card.Title>
                          <Card.Text>
                            Herramienta para desarrollar APIs y desarrollar su entorno de trabajo.
                          </Card.Text>
                          <Button variant="info">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card border="primary" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={Git} style={{ height: '10rem', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>Github</Card.Title>
                          <Card.Text>
                            Herramienta de trabajo para almacenar repositorios y códigos de proyectos.
                          </Card.Text>
                          <Button variant="dark">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Container>
          );
        };
        
