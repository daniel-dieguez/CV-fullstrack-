 import React, {useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Register from './utils/Register';
import Swal from 'sweetalert2';
import validator from 'validator';


export default function Forms() {

  const [errores, setErrores] = useState("");

  return (

    <div>
    <Container className='mt-5' >
      <Row >
        <Col ms="12" md={4} className="mb-4" >
          <Card body >
            <h1>
           Registro de perfil
            </h1>
            <h4>Agrega tu nombre y un comentario contando tu experiencia en mi CV, ademas si deseas puedes agregar una imagen.</h4>
            <hr></hr>
            <Register errores={errores} ></Register>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>

  )
}
