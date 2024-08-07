import React from 'react'

import Style from '../styles/proyec.module.css';
import Calculadora from '../proyects/Calculadora';
import Tareas from '../proyects/Tareas';
import ComentariosUsers from '../proyects/ComentariosUsers'





export default function Proyectos() {
  return (
    <div className={Style.cuerpoproyecto}>
      <h1 className={Style.titulo}>Proyectos de desarrollo</h1>
      
      <p className={Style.principal}>Bienvenido. Aquí podrás explorar los distintos proyectos
         que he desarrollado de forma independiente. Encontrarás imágenes de estos proyectos, 
         así como ejemplos dinámicos que podrás observar y ejecutar desde tu dispositivo.
      </p>
      <hr />

      <Calculadora></Calculadora>
      <Tareas></Tareas>
      <ComentariosUsers></ComentariosUsers>
      

     


      

      
    </div>
  )
}
