import React from 'react';
import '../hojas-de-estilo/testimonio.css';

function Testimonios() {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
                src={require('../imagenes/Emma.png')}
                alt='Foto Perfil 1' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostia en Suecia</p>
                <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
                <p className='texto-testimonio'>"Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
            </div>
        </div>
    );
}

export default Testimonios
