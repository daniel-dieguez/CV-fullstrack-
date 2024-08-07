import React, {useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Register from '../components/form/Register';
import validator from 'validator';
import Swal from 'sweetalert2';
import { isObjEmpty } from '../components/form/helper/Object';
import Style from '../styles/contacto.module.css';




export default function Contacto() {


  const [errores, setErrores] = useState("");

const create = ({email, text}) =>{

  const errores = {};
  setErrores(errores);
  
  if(!validator.isEmail(email)){
    errores.email = 'El correo electronico es invalido';
  }

  if(validator.isEmpty(text)){
    errores.text = 'Debes de agregar un comentario '
  }


  if(!isObjEmpty(errores)){ //si el objeto esta vacio este brindara un error
    setErrores(errores);
    return;

  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: "se a enviado de forma correcta",
    showConfirmButton: false,
    timer: 1500
  });


}

  return (
    <div className={Style.cuerpoproyecto}>
      <h1></h1>
    <Container className='mt-5'>
      <Row>
        <Col ms="12" md={{spna:8, offset: 2}} lg={{spna:6, offset:3}}>
          <Card body>
            <h2>
           Contactame
            </h2>
            <h4>Por favor, proporcione la siguiente información para poder establecer contacto con usted.</h4>
            <hr></hr>
            <Register errores={errores} onSubmitCallback={create}></Register>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
