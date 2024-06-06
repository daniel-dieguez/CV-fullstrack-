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
       <div className={style.contenedorCuerpo}>
         <div className={style.titulos}>
           <h1 className={style.nombre}>Daniel <span className={style.span}>Dieguez</span></h1>
           <h4 className={style.dessarrollo}>Desarrollador Fullstrack</h4>
         </div>
 
         <img className={style.fotopergil} src={fotoperfil} alt="" srcset="" />
       </div>
       <div className={style.contactos}>
         <div className={style.imges}>
 
         <a href="https://github.com/daniel-dieguez">
           <img className={style.git} src={GitHub} alt="" />
         </a>
         <a href="https://www.instagram.com/daniel_dieguez_">
         <img src={Instagram} className={style.instagram} alt="" />
         </a>
         <a href="">
           <img src={Correo} className={style.correo} alt="" />
         </a>
         </div>
       </div>
 
     </div>
  )
}
