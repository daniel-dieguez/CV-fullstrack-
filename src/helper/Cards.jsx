import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import Css from '../img/css.png'
import Docker from '../img/docker.png';
import Git from '../img/github.png';
import Java from '../img/java.png'
import Js from '../img/js.png';
import Reactjs from '../img/react.png'; 

export default function Cards() {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
            <Card border="primary" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Java} />
                <Card.Body>
                    <Card.Title>Java</Card.Title>
                    <Card.Text>
                        Desarrollo de Java EE junto a ello, la utilizacion de Springboot como fraemwork
                    </Card.Text>
                    <Button variant="danger">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Js} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Card.Text>
                        Desarrollo de interaccion e interfas con el usuario.
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Reactjs} />
                <Card.Body>
                    <Card.Title>React Js</Card.Title>
                    <Card.Text>
                        Libreria de trabajo para el desarrollo frontend de los proyectos. 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                  
            <h2>Herramientas de tecnologia</h2>



            <Card border="primary" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Css} />
                <Card.Body>
                    <Card.Title>Css</Card.Title>
                    <Card.Text>
                        Desarrollo de estilos y animaciones en Css para captar la atencion del usuario.
                    </Card.Text>
                    <Button variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
  

            <Card border="primary" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Docker} />
                <Card.Body>
                    <Card.Title>Docker</Card.Title>
                    <Card.Text>
                        Herramienta para desarrollar APIs y desarrollar su entorno de trabajo.
                    </Card.Text>
                    <Button variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Git} />
                <Card.Body>
                    <Card.Title>Github</Card.Title>
                    <Card.Text>
                        Herramienta de trabajo para almacenar repositorios y codigos de proyectos.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
            
            </Row>
        </div>
    )
}
