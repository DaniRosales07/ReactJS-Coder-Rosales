import React from 'react';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Carrousel from "../carrousel";
import { BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom"

function Section1() {
  return (
    <>
<div className="fondo-celeste">
<h1 className= "titulosh1 texto-resaltado">¡Trabajos en Mendoza!</h1>
  <ItemListContainer text= "Donde mejoramos la calidad de tu Trabajo"/>
</div>

<Carrousel/>

 <section className="fondo-blanco centrar-contenido">
    <h2 className="titulosh1">Nuestros Servicios</h2>
    <h3 className="centrar-texto">Brindamos las mejores soluciones para empresas, empleados, emprendedores y estudiantes</h3>
    <div className="card-container1">

    <div className="card-principal">
      <img src="./images/1_1.png" alt="" className="imagen-redonda"/>
    <h3 className="titulosh1">Búsqueda de Empleo</h3>
    <p className="centrar-texto">Todo lo que necesitas para encontrar tu nuevo trabajo</p>
    <NavLink to="section2"><button className="BotonesP"> <p>Entrar</p> </button> </NavLink> 
    </div>

    <div className="card-principal">
    <img src="./images/2_1.png" alt="" className="imagen-redonda"/>
    <h3 className="titulosh1">Community Manager</h3>
    <p className="centrar-texto">Crece en tus Redes Sociales. Y alcanza más ventas</p>
    <NavLink to="section3"><button className="BotonesP"> <p>Entrar</p> </button> </NavLink> 
    </div>

    <div className="card-principal">
    <img src="./images/3_1.png" alt="" className="imagen-redonda"/>
    <h3 className="titulosh1">Recursos Humanos</h3>
    <p className="centrar-texto">Tené el mejor equipo de trabajo a tu lado</p>
    <NavLink to="section4"><button className="BotonesP"> <p>Entrar</p> </button> </NavLink> 
    </div>

    <div className="card-principal">
    <img src="./images/4_1.png" alt="" className="imagen-redonda"/>
    <h3 className="titulosh1">Cursos y Webinars</h3>
    <p className="centrar-texto">Capacitate y dale un salto a tu carrera profesional</p>
    <NavLink to="section5"><button className="BotonesP"> <p>Entrar</p> </button> </NavLink> 
    </div>


    </div>
</section>
    </>
  );
}

export default Section1;