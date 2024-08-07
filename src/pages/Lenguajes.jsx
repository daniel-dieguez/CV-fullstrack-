import React from 'react';
import Cards from '../components/leguajes/Cards'
import Style from '../styles/lenguaje.module.css';



export default function Lenguajes() {

  return (
    <div className={Style.cuerpoproyecto}>
      <h1>Lenguajes de programación y tecnologías</h1>
      <hr></hr>
        <Cards></Cards>
    </div>
  )
}
