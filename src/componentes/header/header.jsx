import './header.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {  NavLink } from 'react-router-dom';

function header() {
  return (
    <div id='abc'>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          {/* <li><NavLink  to="/" className="active">Sobre mi</NavLink></li>
          <li><NavLink  to="/info" className="active">Composiciones-Arreglos</NavLink></li>
          <li><NavLink  to="/contacto" className="active">Contacto</NavLink></li> */}

          <li><a href="#">Composiciones-Arreglos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default header