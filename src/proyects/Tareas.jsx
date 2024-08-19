import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import style from '../styles/task.module.css'
import { isObjEmpty } from '../components/form/helper/Object';
import validator from 'validator';
import Swal from 'sweetalert2';

export default function Tareas() {

  const [task, SetTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [id, setId] = useState("");

    
  const [errores, setErrores] = useState("");

    const URLGet = 'http://localhost:9000/task/viewAll';






  useEffect(() => {
        axios.get(URLGet)
            .then(response => {
                console.log(response.data);
                SetTask(response.data);
            })
            .catch(error => {
                console.log("error en la peticion", error);
            });
    }, [1000]);


    const handleInput = (e,{newTask}) => {
        e.preventDefault();
        setNewTask(e.target.value)

       
        
    };

    const addTask = async () => {

        const urlAdd = 'http://localhost:9000/task/create';

        if (newTask.trim() !== "") {

            const data = {
                notas: newTask,
            }

            try {
                const response = await fetch(urlAdd, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                


                const result = await response.json();
                SetTask(t => [...t, { ...result, notas: result.notas || newTask }]);
                setNewTask(''); // Limpia el campo de entrada

                /*const result = await response.json();
                console.log("la peticion fue un exito ", result);
                SetTask(t => [...t, { ...result, notas: result.notas || newTask }]);
            setNewTask('');*/

         } catch (error) {
                console.log("error en la peticion")
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Debes de agregar una tarea",
                showConfirmButton: false,
                timer: 1500
              });
        }
    };

    const deleteTask = async (index, id_listado) => {

        if (!id_listado) {
            console.error("Error: El id_listado de la tarea es undefined");
            return;
        }

        const urlDele = 'http://localhost:9000/task/delete';
        try {
            const response = await fetch(`${urlDele}/${id_listado}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            console.log("Se ha borrado:", id_listado);
            const updatedTasks = task.filter((_, i) => i !== index);
            SetTask(updatedTasks);
        } catch (error) {
            console.error("Error al eliminar la nota:", error);
        }
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updateTastk = [...task];
            [updateTastk[index], updateTastk[index - 1]] =
                [updateTastk[index - 1], updateTastk[index]];
            SetTask(updateTastk);
        }

    }

    const moveTaskDown = (index) => {
        if (index < task.length - 1) {
            const updateTastk = [...task];
            [updateTastk[index], updateTastk[index + 1]] =
                [updateTastk[index + 1], updateTastk[index]];
            SetTask(updateTastk);
        }

    }





  return (
    <div className={style.body}>
    <div className={style.lista}>
    <h1 className={style.titulo}>Tareas</h1>
    <div>
        <input type="text"
        className={style.inputTask}
            placeholder='Ingresa la tarea que deses'
            value={newTask}
            onChange={handleInput}
        />
        <button className={style.agregar} onClick={addTask}>Agregar</button>
    </div>

    <ol>
        {task.map((item, index) =>
            <li className={style.bineta} key={item.id_listado || index}>
                <span className={style.texto}>{item.notas}</span>
                <button className={style.eliminarTarea} onClick={() => deleteTask(index, item.id_listado)}>Eliminar</button>
                <button className={style.subirTarea} onClick={() => moveTaskUp(index)}>subir</button>
                <button className={style.bajarTarea} onClick={() => moveTaskDown(index)}>bajar</button>
            </li>  
        )}
    </ol>
</div>
</div>
  )
}
