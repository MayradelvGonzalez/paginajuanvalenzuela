import './header.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function header() {
  return (
    <div id='abc'>
      
       <nav>
       {/* <div>
       <img src={calamardo} alt="avatar" /></div> */}
        <ul>
            <li><a href="#">Sobre mi</a></li>
            <li><a href="#">Composiciones y arreglos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default header