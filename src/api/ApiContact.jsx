import React, { useEffect } from 'react'

export default function ApiContact() {

    const url = 'http://localhost:8080/registro/v1/cv';

    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Mostrar datos en la consola
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchApi();




  return (
    <div>ApiContact</div>
  )
}
