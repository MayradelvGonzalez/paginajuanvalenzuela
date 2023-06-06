import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import fotoPerfil from '../../assets/images/fotoPerfil.jpg';
import 'animate.css';
// import Embed from 'react-embed';
import "animate.css/animate.min.css";
import Accordion from 'react-bootstrap/Accordion';

function Main() {
  return (
    <div className='contenido'>
        <div className="perfil">
          <img src={fotoPerfil} alt="fotoPerfil" />
          {/* <Embed url='https://www.youtube.com/watch?v=soICQ3B2kEk' /> */}
        </div>
      <Accordion defaultActiveKey="0">

        <div className="contenidotexto">
          <h2><u> Juan Valenzuela</u></h2>
          <h3>Compositor, arreglista y profesor</h3>
          <Accordion.Item eventKey="0" >
            <Accordion.Header></Accordion.Header>
            <Accordion.Body>
              <div id="example-collapse-text">
                <p>Egresado del <strong>Conservatorio Provincial de música</strong></p>
                <p>Clarinetista en la Orquesta xxx</p>
                <p>Docente de composición y lenguaje musical</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

        </div>

      </Accordion>


    </div>

  )
}

export default Main