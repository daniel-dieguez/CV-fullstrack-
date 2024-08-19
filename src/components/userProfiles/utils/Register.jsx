import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


export default function Register({ errores }) {

  const [perfil, setPerfil] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setErrores] = useState({});






  const submitForm = async (e) => {
    e.preventDefault();

    if (!perfil) {
      setErrores({ perfil: 'Selecciona una foto' });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Agrega una imagen",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (!nombreUsuario) {
      setErrores({ nombreUsuario: 'Agrega un nombre' });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Agrega un nombre",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    
    if (!comentario) {
      setErrores({ comentario: 'Agrega un comentario ' });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debes de agregar un comentario",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }



    try {
      const formData = new FormData(); //se contruye esta funcion para que sea apta en body
      formData.append('file', perfil);
      formData.append('nombre_completo', nombreUsuario);
      formData.append('comentario_user', comentario);

      const urlPost = 'http://localhost:9000/file/Upfile';
      const response = await fetch(urlPost, {
        method: 'POST',
        body: formData,
      });

     


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      


      Swal.fire({
        icon: "success",
        title: "Carga exitosa",
        text: "Se agrego nueva carta",
      });


      setComentario("");
      setNombreUsuario("");
      setPerfil(null);
      console.log("vacio de datos formularios");



    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <Form onSubmit={submitForm} className="mt-4">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Sube una imagen</Form.Label>
        <Form.Control
          type="file"
          
          onChange={(e) => setPerfil(e.target.files[0])}
          isInvalid={errores.perfil}
        />
        <Form.Control.Feedback className="control-feedback" type="invalid">
          {errores.perfil}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Agrega tu nombre</Form.Label>
        <Form.Control
          type='text'
          value={nombreUsuario}
          placeholder='Agrega el nombre nuevo'
          onChange={e => setNombreUsuario(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Realiza tu comentario</Form.Label>
        <Form.Control
          as="textarea"
          value={comentario}
          placeholder='Agrega tu comentario'
          onChange={e => setComentario(e.target.value)}
          rows={3} />
      </Form.Group >

      <Button className="mt-3" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );

}
