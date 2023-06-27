import React from "react";
import './composiciones.css';
import Carousel from 'react-bootstrap/Carousel';
import clarinete from '../../assets/images/clarinete.jpg';
import clarineteIns from '../../assets/images/clarineteIns.jpg';
import director from '../../assets/images/director.avif';

function Composiciones() {
    return (
        <div className="composiciones">
            <h1>Composiciones</h1>
            <Carousel className='carrusel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenSlide"
                        src={director}
                        alt="Info sobre la imagen"
                    />
                    <Carousel.Caption className="info">
                        <h3>Orquestal</h3>
                        {/* <p>Que va a ir aqui, o lo dejo vacio?</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenSlide"
                        src={clarinete}
                        alt="Inf adicional"
                    />
                    <Carousel.Caption className="info">
                        <h3>Cámara</h3>
                        {/* <p>QUE QUERES QUE VAYA AQUI</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenSlide"
                        src={clarineteIns}
                        alt="Info interesante"
                    />
                    <Carousel.Caption className="info">
                        <h3>Arreglos</h3>
                        {/* <p>
                           dale que iria aqui
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      
        </div>

    )
}
export default Composiciones;