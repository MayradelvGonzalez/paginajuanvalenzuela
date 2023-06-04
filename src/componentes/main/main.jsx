import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import fondo from '../../assets/images/fondo.jpg';

function Main() {
  return (
    <div className='contenido'>
    
    <div className="overlay"></div>
   <img src={fondo} alt="imagenFondo" />




    </div>
  )
}

export default Main