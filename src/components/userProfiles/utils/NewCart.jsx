 import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ModalProfile from './ModalProfile';
import FotoP from '../../../img/Foto pefil.jpg';
import Register from '../utils/Register';

export default function NewCart() {
 
    
  const [perfil, setPerfil] = useState([]);

  
  const url = "http://52.72.3.107:9000/file/view";
  


  useEffect(()  => {
    imagesPerfil();

    


  },  [1000]);

  
  

  const imagesPerfil = async () => {
    try {
      const response = await axios.get(url);
      const datos = response.data.map(item => ({
        ...item,
        data: `data:image/png;base64,${item.data}`
      }));
      console.log(response.data);
      setPerfil(datos);
    } catch (error) {
      console.error("Error en la petición", error);
    }
  };

 



  const deleteCart = async (index, id) => {

    const urlDelete = 'http://52.72.3.107:9000/file/deliteImages/';
    
    try {
      const response = await fetch(`${urlDelete}${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log("Se ha borrado:", id);
     
      console.log("Se ha borrado:", id);
      const upPerfiles = perfil.filter((_, i) => i !== index);
      setPerfil(upPerfiles);


    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };


return (
  <Container className="mb-4">
    <Row className="justify-content-md-center">
      <Col xs={12} sm={6} md={4} className="mb-4">
        <Card border="light" bg={'dark'} text='white' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={FotoP} />
          <Card.Body>
            <Card.Title>Daniel Dieguez</Card.Title>
            <Card.Text>Agradezco su tiempo al revisar mi CV. A continuación, puede 
              realizar pruebas como subir, eliminar y actualizar datos </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  
  </Row>
  <Row className="justify-content-md-center">
    {perfil.map((item, index) => (
      <Col key={index} xs={12} sm={6} md={4} className="mb-4">
        <Card border="light" bg={'dark'} text='white' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={item.data} />
          <Card.Body>
            <Card.Title>{item.nombre_Completo}</Card.Title>
            <Card.Text>{item.comentario_user}</Card.Text>
            <ModalProfile id={item.id} fotoPerfil={item.name} />
            <Button variant="danger" onClick={() => deleteCart(index, item.id)}>Eliminar datos</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

</Container>

);

}
