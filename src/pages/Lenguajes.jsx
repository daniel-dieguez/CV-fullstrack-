import React from 'react';
import Cards from '../components/leguajes/Cards'
import LenguajeCard from '../components/leguajes/LenguajesCard'
import Style from '../styles/lenguaje.module.css';



export default function Lenguajes() {

  return (
    <div className={Style.cuerpoproyecto}>
      <div className={Style.divLengujae}>
      <h1 className={Style.titulo}>Lenguajes de programación y tecnologías </h1>

      <h3 className={Style.subtitulo}>A continuación, se muestran algunas de las tecnologías y
        lenguajes de programación que utilizo. Las imágenes 
        correspondientes aparecerán a continuación.</h3>
      
      
      <LenguajeCard></LenguajeCard>
      </div>

    </div>
  )
}
