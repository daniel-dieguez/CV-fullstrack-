import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BiSolidLandmark } from "react-icons/bi";
import { AiFillRobot } from "react-icons/ai";
import { AiOutlineJava } from "react-icons/ai";
import { AiTwotoneFile } from "react-icons/ai";
import style from '../../styles/sobremi.module.css'
import '../../styles/sobremi.module.css'

export default function LineTime() {
    return (
        <div className={style.experience}>
            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentStyle={{background: '#F6C3C3'}}
                    contentArrowStyle={{borderRight: "10px solid #F6C3C3"}}
                    date='Presente'
                    icon={<AiFillRobot />}
                >
                    <h2>Datos generales</h2>
                    <ul >
                        <li>23 Años</li>
                        <li>Resido en Antigua Guatemala</li>
                        <li>Cuarto año en la Universidad Mariano Galvez</li>
                        <li>Vehiculo propio y licencia vigente</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentStyle={{background: '#F6C3C3'}}
                    contentArrowStyle={{borderRight: "10px solid #F6C3C3"}}
                    date='2018 - 2018'
                    icon={<BiSolidLandmark/>}
                >
                    <h2>Colegio CAB</h2>
                    <p>Quinto Bachillerato en ciencias y letras</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentStyle={{background: '#F6C3C3'}}
                    contentArrowStyle={{borderRight: "10px solid #F6C3C3"}}
                    date='2019 - 2019'
                    icon={<BiSolidLandmark/>}
                >
                    <h2>Universidad Galileo </h2>
                    <p>Estudiante de ingenieria en mecatronica</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentStyle={{background: '#F6C3C3'}}
                    contentArrowStyle={{borderRight: "10px solid #F6C3C3"}}
                    date='2022 - 2023'
                    icon={<AiTwotoneFile />}
                >
                    <h2>Certificado FullStack </h2>
                    <ul>
                        <li>Certificado avalado por Fundacion Kinal</li>
                        <li>Desarrollo de sofware Java </li>
                        <li>Desarrollador frontEnd React js</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentStyle={{background: '#F6C3C3'}}
                    contentArrowStyle={{borderRight: "10px solid #F6C3C3"}}
                    date='2020 - 2024'
                    icon={<BiSolidLandmark/>}
                >
                    <h2>Universidad Mariano Galvez </h2>
                    <p>Estudiante de ingenieria en sistemas</p>
                    <ul>
                        <li>Cuarto Año de carrera</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>


    )
}
