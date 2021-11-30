import React from 'react';
import './noticias.css';
import img from './alberto2.jpg';
function NoticiaUM1() {
    return (
        <>
            <div className="central">
                <div className="aver">
                    <div className="titulo">
                        <h2>El Presidente Alberto Fernandez se reunió en la quinta de Olivos</h2>
                        <h4>El mandatario se reunió con los referentes porteños y bonaerenses, quienes tienen el desafío de revertir la dura derrota del Gobierno en las PASO</h4>
                    </div>
            <div className="imagen">
                <img src={img} width="500"/>
            </div>
            <div className="textoNoticiaUM1">
                <p style={{width: "800px"}}>
                    Un Presidente activo, dinámico, en el centro de la escena y enfocado en la gestión es la imagen con la que Alberto Fernández buscará dejar atrás un escándalo que detonó once días atrás cuando se hizo pública la foto de la celebración del cumpleaños de su pareja, Fabiola Yañez. Pero esto solo no alcanza: también deberá salir de lo que fue su búnker de gestión durante la pandemia y que hoy se convirtió en un emblema de la irresponsabilidad y ruptura de la cuarentena. La Quinta de Olivos quedará cerrada hasta nuevo aviso para las actividades oficiales y el Presidente se prepara para aparecer en escenarios que lo mantengan lo más alejado posible de la polémica.
                    La sola mención a la Quinta de Olivos remite al escándalo. Allí el Presidente participó del cumpleaños de Yañez junto a nueve invitados, una imagen que aunque lo acompañará durante el resto de su gestión buscará dejar atrás. Las visitas al interior, la agenda en Rosada y actividades en el Conurbano serán claves para alejarse de la residencia oficial.
                </p>
            </div>
        </div>
    </div>
        </>
    )
}

export default NoticiaUM1
