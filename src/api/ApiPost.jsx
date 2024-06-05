import { useState, useEffect } from 'react';
import axios from 'axios';

export const apiPost = async (data) => {
    const URL = 'http://localhost:9000/registro/v1/cv';
    
    try {
        const response = await axios.post(URL, data);
        return response.data; // Puedes retornar los datos si necesitas manejarlos después
    } catch (error) {
        console.error("Error en el POST", error.response ? error.response.data : error.message);
        throw error; // Lanza el error para que pueda ser manejado donde se llama esta función
    }
};





/*export const apiPost =() =>{


const [dato, setDato] = useState([]);

const URL = 'http://localhost:9000/registro/v1/cv';

useEffect(() => {

    peticion = async() =>{

    await axios.post(URL).then(response => {
        setDato(response.data);
    }).catch(error =>{
        console.error("error en el put", error);
    });
    
}

},[]);

}*/