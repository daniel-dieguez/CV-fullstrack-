import React from 'react'

import Style from '../styles/proyec.module.css';
import Calculadora from '../proyects/Calculadora';
import Tareas from '../proyects/Tareas';
import ComentariosUsers from '../proyects/ComentariosUsers'





export default function Proyectos() {
  return (
    <div className={Style.cuerpoproyecto}>
      <h1 className={Style.titulo}>Proyectos de desarrollo</h1>
      
      <p className={Style.principal}>Bienvenido. En esta sección podrás explorar 
        algunos mini proyectos  en los que he trabajado de manera independiente.
         A través de imágenes y ejemplos interactivos, podrás conocer más sobre mi 
         enfoque y habilidades tanto en el desarrollo frontend como backend, los cuales
          podrás ejecutar directamente desde tu dispositivo.</p>
      <hr />

      <Calculadora></Calculadora>
      <Tareas></Tareas>
      <ComentariosUsers></ComentariosUsers>
      

     


      

      
    </div>
  )
}
