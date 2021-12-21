import React from 'react';
import './noticias.css'
import img from './covid.jpg';
function NoticiaD2() {
    return (
        <>
            <div className="central">
                <div className="aver">
                    <div className="titulo">
                        <h2>70 nuevos casos de COVID-19 en Rosario</h2>
                        <h4>Hasta la fecha hay 461.732 pacientes recuperados y 8.617 víctimas fatales en la jurisdicción</h4>
            </div>
            <div className="imagen">
                <img src={img} width="500"/>
            </div>
            <div className="textoNoticiaD2">
                <p className='p1' style={{width: "800px"}}>
                    El Ministerio de Salud de Santa Fe informó este sábado 42 casos de coronavirus en todo el territorio provincial, de los cuales 25 fueron registrados en Rosario.

                    Con estos números, desde el comienzo de la pandemia los infectados en la provincia ascienden a 470.924.
                    
                    Del total de casos desde el comienzo de la pandemia, 41.944 fueron confirmados por criterio clínico-epidemiológico y 428.980 por laboratorio. Hay 461.732 pacientes recuperados.
                    
                </p>
            </div>
        </div>
    </div>
        </>
    )
}

export default NoticiaD2
