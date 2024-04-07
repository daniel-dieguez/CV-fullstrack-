import React from 'react'
import Style from '../styles/experiencia.module.css'

export default function Experiencia() {
  return (
    <div className={Style.cuerpoproyecto}>
      <h1>Experiencia</h1>
      <div>
        <div>
          <ul>
            <li>
              <h1>Desarrollador Backend </h1>
              <h5>Encargado del desarrollar una api para un aplicativo que funcionara como inventario digital</h5>
              <p>Como encargado del desarrollo de la API para un aplicativo de inventario digital, mi enfoque principal 
                fue establecer una conexión efectiva con la base de datos de la empresa. Para cumplir con este objetivo, 
                creé nuevas tablas que facilitaron la organización y captura eficiente de la información necesaria.

                Además de la estructura de la base de datos, implementé operaciones CRUD en la API. Este conjunto de 
                funciones permitió una comunicación fluida entre el frontend y la API, posibilitando al usuario interactuar 
                de manera efectiva con la plataforma. Mi contribución se centró en garantizar una experiencia de usuario sin 
                complicaciones y una gestión eficaz del inventario digital.</p>
            </li>
            <li>
              <h1>Desarrollador Fullstracl </h1>
              <h5>Encargado de desarrollar un formulario para una empresa de reclutamiento</h5>
              <p>
              Mi responsabilidad principal consistió en la creación de un formulario integral para una empresa de 
              reclutamiento. Esta tarea abarcó desde la configuración inicial de la base de datos hasta la implementación 
              de una API con operaciones CRUD. Un aspecto destacado de mi función fue la generación de identificadores 
              específicos para cada nuevo usuario, aportando así a la gestión eficiente de la información.

              Además de la labor técnica, también desempeñé un papel crucial al conectar la API con el frontend. Esto
              facilitó a los nuevos usuarios la capacidad de ingresar datos de manera intuitiva y eficaz, contribuyendo
               así a un proceso fluido y completo de recolección y almacenamiento de información.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
