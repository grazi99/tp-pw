import React from 'react';
import './noticias.css';
import img from './messi.jpg';
function NoticiaD1() {
    return (
        <>
            <div className="central">
                <div className="aver">
                    <div className="titulo">
                        <h2>Messi triunfó en Manchester</h2>
                        <h4 style={{width: "900px"}}>El París Saint-Germain sufrió, pero se impuso por 2-0 al equipo de Guardiola, por la segunda fecha del Grupo A. La Pulga marcó su primer tanto en su nuevo club.</h4>
                    </div>
            <div className="imagen">
                <img src={img} width="500"/>
            </div>
            <div className="textoNoticiaD1">
                <p style={{width: "800px"}}>
                    El PSG sufrió, pero se quedó con un triunfazo. Con un golazo de Lionel Messi, el conjunto de Mauricio Pochettino se impuso por 2-0 al Manchester City, en la segunda fecha del Grupo A de la Champions League. La Pulga marcó su primer tanto en su nuevo club. <br/>
                    El conjunto local golpeó desde el vestuario. A los 7 minutos, Achraf Hakimi envió un centro hacia atrás, Neymar le erró y la pelota le quedó a Idrissa Gueye: marcó el primero con un bombazo al ángulo.
                    <br/>De ahí en adelante, todo fue de la visita: dominaron la posesión del balón y crearon las situaciones más peligrosas en lo que quedó del primer tiempo. Entre ellas, una chance increíble: dos tiros en el travesaño, en un cabezazo de Raheem Sterling y luego un remate de Bernardo Silva.
                    <br/>Al equipo de Mauricio Pochettino le costó llegar al área rival, pero tuvo otra oportunidad clara: un remate de Ander Herrera que Ederson salvó con lo justo.
                    <br/>El City continuó dominando en la segunda mitad. Y casi logró empatarlo con un remate de Kevin De Bruyne, que tapó Gianluigi Donnarumma, una de las grandes figuras del partido.
                </p>
            </div>
        </div>
    </div>
        </>
    )
}

export default NoticiaD1
