import React from 'react';
import style from '../styles/inicio.module.css'//./inicio.module.css'
import fotoperfil from '../img/Foto pefil.jpg'
import GitHub from '../img/github.png'
import Instagram from '../img/instram.png'
import Correo from '../img/gmail.png'
import { Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom';







export default function Inicio() {

  const derecha = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Visualiza mis proyectos
    </Tooltip>
  );

  const abajo = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Conoce más de mi
    </Tooltip>
  );

  const izquierda = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Comunicate conmigo
    </Tooltip>
  );

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

          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={derecha}>
            <a href="https://github.com/daniel-dieguez">
              <img className={style.git} src={GitHub} alt="" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={abajo}>
          <a href="https://www.instagram.com/daniel_dieguez_">
            <img src={Instagram} className={style.instagram} alt="" />
          </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={izquierda}>
              
          <Link to='/contacto'>
            <img src={Correo} className={style.correo} alt="" />
            </Link>
          </OverlayTrigger>          
        </div>
      </div>

    </div>
  )
}
