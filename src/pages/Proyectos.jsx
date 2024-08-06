import React from 'react'
import Styel from '../styles/calculadora.module.css';
import Calculadora from '../proyects/Calculadora';
import Tareas from '../proyects/Tareas';
import ComentariosUsers from '../proyects/ComentariosUsers'
import Tashbaord from '../proyects/dashbaord';



export default function Proyectos() {
  return (
    <div className={Styel.cuerpoproyecto}>
      <h1>Proyectos de desarrollo</h1>
      <p className=''>Bienvenido, aqui podras encontrar los distintos que he desarrollado de forma independiente, entre ello
        podras encontrar en formato imagen los proyectos que he realizado y tambien encontraras ejemplos dinamicos donde podras observar y ejecutar desde
        tu depositivo.
      </p>

      <Calculadora></Calculadora>
      <Tareas></Tareas>
      <ComentariosUsers></ComentariosUsers>
      <Tashbaord></Tashbaord>

     


      

      
    </div>
  )
}
