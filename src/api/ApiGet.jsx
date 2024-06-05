import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Item } from 'semantic-ui-react';


export default function ApiContact() {

    const [dato, setDato] = useState([]);

    const URL = 'http://localhost:9000/registro/v1/cv';

    useEffect(() => {

        axios.get(URL).then(response => {
            console.log(response.data);
            setDato(response.data);
        }).catch(error =>{
            console.error("error en la peticion", error);
        });

    },[]);

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {dato.map((item,index)=>(
                    <div key={index}>
                    <li>{item.nombre_usuario}</li>
                    <li>{item.comentario_usuario}</li>
                    </div>
                ))}
               
            </ul>
            
        </div>
    )
}

