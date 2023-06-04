import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
// import fondo from '../../assets/images/fondo.jpg';
import calamardo from '../../assets/images/calamardo.png';


function Main() {
  return (
    <div className="total">
    <div className='contenido'>
      <div className="perfil"><img src={calamardo} alt="fotoPerfil" /></div>
      <div className="contenidotexto">
        <h2>dfdfdsfdsf</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ad?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

  
      </div>
    </div>
    
  )
}

export default Main