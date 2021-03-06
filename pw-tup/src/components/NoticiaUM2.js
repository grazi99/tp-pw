import React from 'react';
import './noticias.css';
import img from './kiosquero.jpg';
function NoticiaUM2() {
    return (
        <>
            <div className="central">
                <div className="aver">
                    <div className="titulo">
                        <h2>El kiosquero asesinado en Ramos Mejía recibió cuatro impactos de bala en el tórax</h2>
                        <h4 style={{width: "800px"}}>Roberto Sabo fue asesinado el pasado domingo durante un asalto en su comercio de la localidad bonaerense de Ramos Mejía. El acusado, Leandro Daniel Suárez, está detenido por el delito que cometió junto a una joven de 15 años, quien por su edad es inimputable.</h4>
                    </div>
            <div className="imagen">
                <img src={img} width="500"/>
            </div>
            <div className="textoNoticiaUM2">
                <p className='p1' style={{width: "800px"}}>El kiosquero Roberto Sabo, asesinado el pasado domingo durante un asalto en su comercio de la localidad bonaerense de Ramos Mejía, partido de La Matanza, recibió cuatro disparos en el tórax que le provocaron la muerte, según el resultado preliminar de autopsia, informaron fuentes judiciales.

                    El informe sobre el estudio forense practicado al cuerpo de Sabo (45) indica que el kiosquero recibió “por lo menos el impacto de cuatro proyectiles”, dijo a Télam un vocero con acceso a la investigación.
                    
                    “No quiere decir -agregó- que los impactos hayan quedados alojados, sino que pueden tener orificio de entrada o salida. Todos los impactos fueron en la zona del tórax”.
                    
                    El fiscal Federico Medone, de la Unidad Funcional de Instrucción (UFI) de Homicidios de La Matanza, aguarda para este mediodía la conclusión de la autopsia para agregar al expediente y avanzar con el pedido de prisión preventiva del acusado del crimen, Leandro Daniel Suárez 
                </p>
            </div>
        </div>
    </div>
        </>
    )
}

export default NoticiaUM2
