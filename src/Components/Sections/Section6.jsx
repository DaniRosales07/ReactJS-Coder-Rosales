import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom"
import Swal from 'sweetalert2';



function Section6() {
  const handleButtonClick = (buttonId) => {}

    
  return (
    <section className="fondo-blanco centrar-contenido">
    
    <h2 className="titulosh1">Formulario de Datos de CV</h2>
    <h3 className="centrar-texto espacio-texto">¿Tu primer CV? No hay problema te indicamos todos los datos necesarios</h3>

    <div className="card-principal">
                <img src="./images/5_1.png" alt="" className="imagen-redonda"/>
                <h3 className="titulosh1">Tus Datos de CV en Simples pasos</h3>
                <p className="centrar-texto">Hace click en el botón de abajo para llenar tus datos.</p>
                <a href="https://igcoc9io.forms.app/formulario-de-cvs" target='_blank' title="formulario-formasapp">
                <button className="BotonesP"> <h3>Llenar Formulario</h3> </button>
                </a>

</div>
  <div className='centrar-contenido espacio-texto'>
  <NavLink to="/"><button className="BotonesS"> <h3>Volver</h3> </button> </NavLink> 
  </div>
  </section>

);

  }
  


export default Section6;

