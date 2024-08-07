import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiencia from './pages/Experiencia';
import Lenguajes from './pages/Lenguajes';
import Proyectos from './pages/Proyectos';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import Navigation from './VarControl/Navigation';
import Inicio from './pages/Inicio';

//


export default function App() {
  return (
    
    <Router className="navbarr">
    <div>
      <Navigation></Navigation>
    </div>
    <Routes>
    <Route excat path='/inicio' element={<Inicio/>}> </Route>
      <Route exact path="/SobreMi" element={<SobreMi/>}>sobre Mi</Route>
      <Route exact path="/experiencia" element={<Experiencia/>}>experiencia</Route>
      <Route exact path="/lenguaejes" element={<Lenguajes/>}>lenguajes</Route>
      <Route exact path="/proyecots" element={<Proyectos/>}>proyectos</Route>
      <Route exact path="/contacto" element={<Contacto/>}>Contacto</Route>
    </Routes>
   </Router>
  )
}
