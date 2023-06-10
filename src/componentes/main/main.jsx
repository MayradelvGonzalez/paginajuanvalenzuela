import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import fotoPerfil from '../../assets/images/fotoPerfil.jpg';
import 'animate.css';
import "animate.css/animate.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import clarinete from '../../assets/images/clarinete.jpg';
import clarineteIns from '../../assets/images/clarineteIns.jpg';
import director from '../../assets/images/director.avif';

function Main() {
  return (
    <div className='contenido'>
        <div className="perfil">
        <h1><u> Juan Valenzuela</u></h1>
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
                <p>Clarinetista en la Orquesta xxx</p>
                <p>Docente de composición y lenguaje musical</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </Accordion>
      <Carousel className='carrusel'>
       <Carousel.Item interval={1000}>
         <img
           className="d-block w-100 imagenSlide"
           src={ director }
           alt="Info sobre la imagen"
         />
         <Carousel.Caption>
           <h3>Titulo imagen</h3>
           <p>Algo de informacion relacionada con la imagen</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={500}>
         <img
           className="d-block w-100 imagenSlide"
           src={ clarinete }
           alt="Inf adicional"
         />
         <Carousel.Caption>
           <h3>Titulo de la imagen</h3>
           <p>Algo de informacion relacionada con la imagen</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100 imagenSlide"
           src={ clarineteIns }
           alt="Info interesante"
         />
         <Carousel.Caption>
           <h3>Titulo de la imagen</h3>
           <p>
           Algo de informacion relacionada con la imagen
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
  </div>
  )
}

export default Main