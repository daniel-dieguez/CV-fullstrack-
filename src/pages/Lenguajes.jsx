import React from 'react';
import Cards from '../components/leguajes/Cards'
import Style from '../styles/lenguaje.module.css';



export default function Lenguajes() {

  return (
    <div className={Style.cuerpoproyecto}>
      <h1>Herramientas de tecnologia</h1>
        <Cards></Cards>
    </div>
  )
}
