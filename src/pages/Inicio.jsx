import React from 'react';
import style from '../styles/inicio.module.css'//./inicio.module.css'
import fotoperfil from '../img/Foto pefil.jpg'
import Css from '../img/css.png'
import Docker from '../img/docker.png';
import Git from '../img/github.png';
import Java from '../img/java.png'
import Js from '../img/js.png';
import Reactjs from '../img/react.png'; 
import Mysql from '../img/Mysql.png'


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
      <div>
      <img src={Reactjs} alt="" />
      <img src={Js} alt="" />
      <img src={Java} alt="" />
      <img src={Mysql} alt="" />
      
      </div>
    </div>
  )
}
