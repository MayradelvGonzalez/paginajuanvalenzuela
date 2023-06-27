import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import fotoPerfil from '../../assets/images/fotoPerfil.jpg';
import 'animate.css';
import "animate.css/animate.min.css";
import Accordion from 'react-bootstrap/Accordion';


function Main() {
  return (
    <div className='contenido'>
      <div className="perfil">
        <h1><strong> Juan Valenzuela</strong></h1>
        <img src={fotoPerfil} alt="fotoPerfil" />
      </div>
      <Accordion defaultActiveKey="0">
        <div className="contenidotexto">
          <h2>Compositor, arreglista y profesor</h2>
          <Accordion.Item eventKey="1" >
            <Accordion.Header></Accordion.Header>
            <Accordion.Body>
              <div id="example-collapse-text">
                <p>Egresado del <strong>Conservatorio Provincial de música</strong></p>
                <p>Clarinetista en la Orquesta <a href="https://fundacioncristian-zarb.jimdosite.com/" className="enlace">Fundación Cristian Zarb</a>
                  </p>
                <p>Profesor de composición y lenguaje musical</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </Accordion>
    </div>
  )
}

export default Main