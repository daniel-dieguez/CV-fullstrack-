import React from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Css from '../../img/css.png'
import Docker from '../../img/docker.png';
import Git from '../../img/sombra Githuv.png';
import Java from '../../img/java.png'
import Js from '../../img/js.png';
import Reactjs from '../../img/react.png';
import Csharp from '../../img/c-sharp.png'
import Mysql from '../../img/Mysql.png'
import Oracle from '../../img/oracle.png'

export default function Cards() {
    return (
    <Container>
      <Carousel controls={false} interval={2500} pause='hover'>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'} text='white' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Java} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title className="text-center font-weight-bold">Java</Card.Title>
                
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Js} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">JavaScript</Card.Title>
                
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Reactjs} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">React Js</Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Csharp} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">C Sharp</Card.Title>
                
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Oracle} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">Oracle base de datos</Card.Title>
                
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Docker} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">Docker</Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Git} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">Github</Card.Title>
                </Card.Body >
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Mysql} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title  className="text-center">Mysql</Card.Title>
                </Card.Body >
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
              <Card border="dark" bg={'dark'}  text='white' style={{ width: '16rem' }}>
                <Card.Body>
                  <Card.Title  className="text-center font-weight-bold">Entre otras tecnologías</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
          );
        };
        
