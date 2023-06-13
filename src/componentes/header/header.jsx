import './header.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


function header() {
  return (
    <div id='abc'>

      <nav>
    
      <img src={ logo } alt="logo" className='logo' />

        <ul>
<li><NavLink to='/composiciones'>Composiciones</NavLink></li>
        </ul>
        </nav>
    
   
     
    
     
    </div>

  )
}

export default header