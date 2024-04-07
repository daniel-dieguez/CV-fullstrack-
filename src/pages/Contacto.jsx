import React, {useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Register from '../form/Register';
import validator from 'validator';
import Swal from 'sweetalert2';
import { isObjEmpty } from '../helper/Object';
import Style from '../styles/contacto.module.css';
import ApiContact from '../api/ApiContact';



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
    <Container className='mt-5'>
      <Row>
        <Col ms="12" md={{spna:8, offset: 2}} lg={{spna:6, offset:3}}>
          <Card body>
            <h3>
           Nuevo usuario
            </h3>
            <hr></hr>
            <Register errores={errores} onSubmitCallback={create}></Register>
          </Card>
        </Col>
      </Row>
    </Container>
    <ApiContact></ApiContact>
  </div>
  )
}
