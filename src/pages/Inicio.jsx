import React from 'react';
import style from '../styles/inicio.module.css'//./inicio.module.css'
import fotoperfil from '../img/Foto pefil.jpg'

export default function Inicio() {







  return (
    <div className={style.cuerpoproyecto}>
      
      <h1>Desarrollador Fullstrack</h1>
      <h3>Un ambiente de desarrollo profecional </h3>
      <h4>Daniel Dieguez</h4>

      <img src={fotoperfil} alt="" srcset="" />

      <p>En este proyecto, destaco la importancia de tener metas y objetivos claros como piedra 
        angular para alcanzar el éxito. Más allá de depender únicamente de la motivación, pongo 
        énfasis en la consistencia diaria en la ejecución de tareas. Explora mi portafolio para no 
        solo conocer mis habilidades técnicas en desarrollo frontend y backend, sino también para 
        entender mi enfoque hacia el logro sostenible de metas profesionales.</p>   
      
      
      
      </div>
  )
}
