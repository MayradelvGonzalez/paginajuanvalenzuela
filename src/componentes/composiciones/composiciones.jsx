import React from "react";
import './composiciones.css';
import Carousel from 'react-bootstrap/Carousel';
import clarinete from '../../assets/images/clarinete.jpg';
import clarineteIns from '../../assets/images/clarineteIns.jpg';
import director from '../../assets/images/director.avif';

function Composiciones() {
    return (
        <div className="composiciones">
            <h1>Composiciones y arreglos</h1>
            <Carousel className='carrusel'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imagenSlide"
                        src={director}
                        alt="Info sobre la imagen"
                    />
                    <Carousel.Caption className="info">
                        <h3>Titulo imagen</h3>
                        <p>Algo de informacion relacionada con la imagen</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 imagenSlide"
                        src={clarinete}
                        alt="Inf adicional"
                    />
                    <Carousel.Caption className="info">
                        <h3>Titulo de la imagen</h3>
                        <p>Algo de informacion relacionada con la imagen</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenSlide"
                        src={clarineteIns}
                        alt="Info interesante"
                    />
                    <Carousel.Caption className="info">
                        <h3>Titulo de la imagen</h3>
                        <p>
                            Algo de informacion relacionada con la imagen
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

    )
}
export default Composiciones;