import './header.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from 'react-router-dom';
import '../informacion/info';

function header() {
  return (
    <div id='abc'>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="../informacion/info.jsx">Composiciones y Arreglos</a></li>
          <li><a href="../footer/footer.jsx">Contacto</a></li>
        </ul>
        </nav>
    

    </div>
  )
}

export default header