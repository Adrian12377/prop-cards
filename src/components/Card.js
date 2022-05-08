import React, { useState } from 'react'
import './Card.css'

function Card(){

    const [Nombre, setName] = useState('Adrian Keith Duran');
    const [Ubicacion,setLocation] = useState('Hermosillo | Sonora');
    const [Acerca,setAbout] = useState('Estudiante Universidad Kino')

    return(
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="C:\Users\Adrian Keith\Desktop\reactproject\prop-cards\src\imagenes" alt= "rio" height= "100px" width= "100px"/>
                </div>
            </div>
            <div className='lower-container'>
                <h3> {Nombre} </h3>
                <h4> {Ubicacion} </h4>
                <p> {Acerca} </p>
                <button> Perfil </button>
            </div>

        </div>
    )
}

export default Card