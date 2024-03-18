import React from 'react'
import Styel from '../styles/proyectos.module.css';


export default function Proyectos() {
  return (
    <div>
      <h1>Proyectos de desarrollo</h1>
      <p className=''>Bienvenido, aqui podras encontrar los distintos que he desarrollado de forma independiente, entre ello
        podras encontrar en formato imagen los proyectos que he realizado y tambien encontraras ejemplos dinamicos donde podras observar y ejecutar desde
        tu depositivo.
      </p>

      <h3> Calculadora </h3>
      <p>Porfavor ingrese los datos siguiente en la calculadora:</p>
      <ul>
        <li> 4 + 4 </li>
        <li>12*3</li>
        <li>11203/50</li>
        <li>Ahora ingrese la</li>
      </ul>


      <h3> Formulario de datos "api de desarrollo" </h3>
      <p>En el siguiente botton has click en "mostrar" para que se muestren un listado de una api</p>

      <h3>Listado de tarea</h3>
      <p>ingresa las tareas que desees agregar</p>
      <h3> Tarjeta de credito </h3>
      <p>Ingrese 12 digitos que desee en la barra imput, al terminar ingrese los la fecha de caducidad</p>
      <h3> Buqueda de api de pokemon</h3>
      <p>Si es fanatico de los pokemon ingrese el pokemon que mas le guste, de lo contrario aqui le dejo un listado donde puede
        buscar a su pokemon favorito
      </p>
      <ul>
        <li>pikachu</li>
        <li>Mew</li>
        <li>Mewto</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
