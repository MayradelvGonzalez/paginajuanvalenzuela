import './header.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import calamardo from '../../assets/images/calamardo.png';

function Header() {
  return (
    <div className='cabecera'>
      <div>  <img src={calamardo} alt="avatar" /></div>
    
         <nav className="navbar">
     
            <Button variant="outline-warning" className='botonenlace'>Inicio</Button>{' '}
            <Button variant="outline-warning" className='botonenlace'>Proyectos</Button>{' '}
            <Button variant="outline-warning" className='botonenlace'>Contacto</Button>{' '}

      </nav>
    </div>
  )
}

export default Header