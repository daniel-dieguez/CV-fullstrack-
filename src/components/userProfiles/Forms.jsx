import React, {useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Register from './utils/Register';

export default function Forms() {

    const [errores, setErrores] = useState("");

    const create = ({images}) =>{


  const errores = {};
  setErrores(errores);
    }




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
            <Register errores={errores} onSubmitCallback={create}></Register>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>

  )
}
