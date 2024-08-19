import React from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Docker from '../../img/docker.png';
import Git from '../../img/sombra Githuv.png';
import Java from '../../img/java.png'
import Js from '../../img/js.png';
import Reactjs from '../../img/react.png';
import Csharp from '../../img/c-sharp.png'
import Mysql from '../../img/Mysql.png'
import sqlServer from '../../img/sql-server.png'
import Style from '../../styles/lenguaje.module.css';

export default function LenguajesCard() {
  return (
  <Container>
    <Carousel controls={false} interval={2500} pause='hover'>
      <Carousel.Item>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={6} md={3} lg={3} variant="top" className="mb-4">
            <div border="dark" bg={'dark'}  style={{ width: '18rem' }}>
              <img variant="top" src={Java} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>Java</h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}    style={{ width: '18rem' }}>
              <img variant="top" src={Js} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>Javascrip</h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}    style={{ width: '18rem' }}>
              <img variant="top" src={Reactjs} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>React Js</h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}    style={{ width: '19rem' }}>
              <img variant="top" src={Csharp} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>C-Sharp</h3>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}    style={{ width: '18rem' }}>
              <img variant="top" src={sqlServer} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>SQL - Server</h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}   style={{ width: '18rem' }}>
              <img variant="top" src={Docker} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>Docker</h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}    style={{ width: '18rem' }}>
              <img variant="top" src={Git} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>GitHub</h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
            <div border="dark" bg={'dark'}    style={{ width: '18rem' }}>
              <img variant="top" src={Mysql} style={{ height: '10rem', width: 'auto', objectFit: 'contain' }} />
              <h3>Mysql</h3>
            </div>
          </Col>          
        </Row>
      </Carousel.Item>
    </Carousel>
  </Container>
        );
      };
