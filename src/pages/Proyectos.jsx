import React from 'react'
import Styel from '../styles/proyectos.module.css';
import Calculadora from '../proyects/Calculadora';
import ListaNames from '../proyects/ListaNames';
import ListaPokemon from '../proyects/ListaPokemon';
import Tareas from '../proyects/Tareas';
import TarjetaCredito from '../proyects/TarjetaCredito'
import Style from '../styles/proyectos.module.css';


export default function Proyectos() {
  return (
    <div className={Styel.cuerpoproyecto}>
      <h1>Proyectos de desarrollo</h1>
      <p className=''>Bienvenido, aqui podras encontrar los distintos que he desarrollado de forma independiente, entre ello
        podras encontrar en formato imagen los proyectos que he realizado y tambien encontraras ejemplos dinamicos donde podras observar y ejecutar desde
        tu depositivo.
      </p>

      <Calculadora></Calculadora>
      <ListaNames></ListaNames>
      <Tareas></Tareas>
      <TarjetaCredito></TarjetaCredito>
      <ListaPokemon></ListaPokemon>

     


      

      
    </div>
  )
}
