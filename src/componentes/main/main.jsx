import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
// import fondo from '../../assets/images/fondo.jpg';
import calamardo from '../../assets/images/calamardo.png';
import 'animate.css';


function Main() {
  return (
    <div className="total">
    <div className='contenido'>
      <div className="perfil">
        <img src={calamardo} alt="fotoPerfil" class="animate__fadeInLeft"/>
        </div>
      <div className="contenidotexto" class="animate__animated animate__bounce">
        <h2>Juan Valenzuela</h2>
        <p>Compositor y clarinetista como Calamardo</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <h3>Debajo iran las composiciones y arreglos</h3>
      </div>
      </div>
    </div>
    
  )
}

export default Main