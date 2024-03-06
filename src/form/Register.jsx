import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';

export default function Register( {errores, onSubmitCallback}) {


    const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ email, text }); /*Aqui se realiza la evaluacion de los datos*/
  }


  return (
    <Form onSubmit={submitForm}>
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

    

    <Button className='mt-3' variant='primary' type='submit'>Inicia Sesion</Button>
  </Form>

)
  
}
