import React from 'react'
import './noticias.css';
function Noticias1(props) {
    return (
        <>
            <div className="central">
                <div className="aver">
                    <div className="titulo">
                        <h2>{props.titulo}</h2>
                        <h4 style={{width: "900px"}}>{props.subtitulo}</h4>
                    </div>
            <div className="imagen">
            <img src={props.url} width="500"/>
            </div>
            <div className="textoNoticiaD1">
                <p style={{width: "800px"}}>
                    {props.contenido}
                </p>
            </div>
            <h3>{props.autor}</h3>
            <h3>{props.fecha}</h3>
        </div>
    </div>
        </>
    );
}

export default Noticias1