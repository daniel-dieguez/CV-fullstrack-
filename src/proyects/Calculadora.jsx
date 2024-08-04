import React, { useState } from 'react'
import style from '../styles/calculadora.module.css'

export default function Calculadora() {const [value, setValue] = useState('');

const handle =( e) =>{
  setValue(value + e.target.innerHTML)
}

const equal = ()=>{
  setValue(eval(value));

}

const delet = ()=>{
  setValue("");
}

const deletPart = () =>{
  setValue(value.toString().slice(0,-1))
}

  return (
    <div>
      <p className={style.titulo}>Realiza tus calculos </p>
      <div className={style.Calculadora}>
    <div className={style.output}>
      <div className={style.previos}> </div>
      
      <div className={style.currento}> {value} </div>
    </div>

    
    <button className={style.ac} onClick={delet}>AC</button>
    <button onClick={deletPart}>DEL</button>
    <button onClick={handle}>1</button>
    <button onClick={handle} >2</button>
    <button onClick={handle}>3</button>
    <button onClick={handle}>4</button>
    <button onClick={handle}>5</button>
    <button onClick={handle}>6</button>
    <button onClick={handle}>7</button>
    <button onClick={handle}>8</button>
    <button onClick={handle}>9</button>
    <button onClick={handle}>0</button>
    <button onClick={handle}>+</button>
    <button onClick={handle}>-</button>
    <button onClick={handle}>/</button>
    <button onClick={handle}>.</button>
    <button onClick={equal}>=</button>


    </div>
  </div>

  )
}
