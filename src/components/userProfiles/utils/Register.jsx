import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';


export default function Register({errores, onSubmitCallback}) {
    const [perfil, setPerfil] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [comentario, setComentario] = useState ('');
  const [error, setErrores] = useState({});


  
  
  

  const submitForm = async (e, index) => {
    e.preventDefault();

    if (!perfil) {
      setErrores({ perfil: 'Please select a file' });
      return;
    }

    try {
      const formData = new FormData(); //se contruye esta funcion para que sea apta en body
      formData.append('file', perfil);
      formData.append('nombre_completo',nombreUsuario);
      formData.append('comentario_user', comentario);

      const urlPost = 'http://localhost:9000/file/Upfile';
      const response = await fetch(urlPost, {
        method: 'POST',
        body: formData,
      });

      setPerfil(response.data);

      Swal.fire({
        icon: "success",
        title: "Carga exitosa",
        text: "Se agrego nueva carta",
      });
      

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }


      
      const data = await response.json();
      console.log('Success:', data);
      setPerfil(t => [...t, {...data, nombre_completo: nombreUsuario}]) 
      console.log("Se agrego una nueva imagen de forma actualizada de inmediata");
      

      
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
      <Form  onSubmit={submitForm} className="mt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentarios</Form.Label>
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
              <Form.Label>Actualiza tu nombre</Form.Label>
                <Form.Control 
                type='text'
                placeholder='Agrega el nombre nuevo'
                onChange={e => setNombreUsuario(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Actualiza tu nombre</Form.Label>
                <Form.Control 
                as="textarea"
                placeholder='Agrega tu comentario'
                onChange={e => setComentario(e.target.value)}
                rows={3}/>
            </Form.Group >
  
        <Button className="mt-3" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );

}
