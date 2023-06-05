import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
// import fondo from '../../assets/images/fondo.jpg';
import calamardo from '../../assets/images/calamardo.png';
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Main() {
  
  const [open, setOpen] = useState(false);
  return (
    <div className='contenido'>
      <div className="perfil">
        <img src={calamardo} alt="fotoPerfil" class="animate__fadeInLeft"/>
        </div>
      <div className="contenidotexto">
        <h2><u> Juan Valenzuela</u></h2>
        <h3>Compositor y arreglista</h3>
        <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Ver más
      </Button>
 
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p>Egresado del <strong>Conservatorio Provincial de música</strong></p>
      <p>Clarinetista en la Orquesta xxx</p>
      <p>Docente de composición y lenguaje musical</p>
        </div>
      </Collapse>
    
  

      </div>
      </div>



      
 
    






  


    </div>
    
  )
}

export default Main