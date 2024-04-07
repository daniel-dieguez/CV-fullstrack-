import React from 'react';
import style from '../styles/inicio.module.css'//./inicio.module.css'
import fotoperfil from '../img/Foto pefil.jpg'
import GitHub from '../img/github.png'
import Instagram from '../img/instram.png'
import Correo from '../img/gmail.png'
import { Tooltip } from 'react-bootstrap';


export default function Inicio() {







  return (
    <div className={style.cuerpoproyecto}>
      <div className={style.contenedorimagen}>
        <div className={style.titulos}>
          <h1 className={style.titulo}>Daniel Dieguez</h1>
          <h4 className={style.nombre}>Desarrollador Fullstrack</h4>
        </div>

        <img className={style.fotopergil} src={fotoperfil} alt="" srcset="" />
      </div>
      <div className={style.contactos}>

        <a href="https://github.com/daniel-dieguez">
          <img src={GitHub} alt="" />
        </a>
        <a href="https://www.instagram.com/daniel_dieguez_">
        <img src={Instagram} alt="" />
        </a>
        <a href="">
          <img src={Correo} alt="" />
        </a>
      </div>

    </div>
  )
}
