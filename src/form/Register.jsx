import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { apiPost } from '../api/ApiPost';


export default function Register( {errores, onSubmitCallback}) {


  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [nombre, setnombre] =useState("");

  const [dato, setDato] = useState([]);



 const submitForm = (e) => {
  e.preventDefault();
  onSubmitCallback({email, text, nombre});

  const data = {
    nombre_usuario: nombre,
    email_usuario: email,
    comentario_usuario: text
};

  const URL = "http://localhost:9000/registro/v1/cv/registro";
  fetch(URL,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },

  }).then((r) => {
    return r.json().then((data) =>({
      status: r.status,
      body:data,
    }));
  })


  
}


  


  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-2">
      <Form.Label> Ingrese su nombre y apellido</Form.Label>
      <Form.Control type='name' value={nombre} onChange={e => setnombre(e.target.value)} placeholder='Nombre y apellido' isInvalid={errores.nombre}></Form.Control>
      </Form.Group>

    <Form.Group className="mb-2">
      <Form.Label> Correo Electronico</Form.Label>
      <Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Correo' isInvalid={errores.email}></Form.Control>
      <Form.Control.Feedback type='invalid'>{errores.email}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} value={text} onChange={e => setText(e.target.value)} placeholder='Deja tu comentario' isInvalid={errores.text}/>
        <Form.Control.Feedback className="control Feedback" type='invalid'>{errores.text}</Form.Control.Feedback>
      </Form.Group>

    

    <Button className='mt-3' variant='primary' type='submit'>Enviar</Button>
  </Form>

)
  
}
