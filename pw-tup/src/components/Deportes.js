import React from 'react'
import './noticias1.css'
import { Link, Route } from 'react-router-dom'
import Noticias1 from './Noticias1'
import img1 from './djokovic.jpg'
import img2 from './river.jpg'
import img3 from './williams.jpg'
import img4 from './chapecoense.jpg'

function Deportes() {
    return (
        <div className="margen">
            <div className="titulos">
            <h4><Link to="/deportes/n1">Djokovic campéon de Wimbledon 2021</Link></h4>
            <h4><Link to="/deportes/n2">River gana el torneo 2021</Link></h4>
            <h4><Link to="/deportes/n3">Falleció Sir Frank Williams</Link></h4>
            <h4><Link to="/deportes/n4">Así se conmemoraron los cinco años de la tragedia del Chapecoense</Link></h4>
            </div>
            <Route path='/deportes/n1'>
                <Noticias1 
                url={img1}
                titulo="Djokovic campéon de Wimbledon 2021" 
                subtitulo="Wimbledon 2021: Djokovic gana su sexto Wimbledon y logra igualar el record histórico de Federer y Nadal con 20 Grand Slam"
                contenido="Novak Djokovic logró igualar el récord histórico de Roger Federer y Rafael Nadal al obtener su triunfo número 20 en el Grand Slam maculino.
                Tras un largo y emocionante partido, el tenista serbio de 34 años venció al italiano Matteo Berrettini en la final del torneo de Wimbledon 2021, que comenzó a las dos de la tarde (hora local) de este domingo en Londres.
                'Triste y vacío': las disculpas de Novak Djokovic tras ser descalificado del US Open
                Es la sexta vez que Djokovic gana un torneo en Wimbledon y la tercera vez que triunfa en un Grand Slam en el año, después de haber obtenido los títulos del Abierto de Australia y el Abierto de Francia."/>
            </Route>
            <Route path='/deportes/n2'>
                <Noticias1
                url={img2}
                titulo="River gana el torneo 2021"
                subtitulo="El conjunto de Núñez ganó 4-0 con goles de Palavecino, Álvarez y Romero (2) y recuperó un cetro que no obtenía desde 2014."
                contenido="River es el nuevo campeón del fútbol argentino. Logró uno de los pocos títulos que le faltaba a la exitosísima Era Gallardo. 
                El equipo del Muñeco aplastó a Racing y dio la vuelta olímpica en su estadio, con su gente. Con la derrota de Talleres ante Gimnasia, al conjunto Millonario le alcanzaba con un empate ante la Academia para coronarse campeón del torneo local por primera vez desde 2014, pero los de Núñez no sacaron el pie del acelerador ni especularon y destrozaron a su rival .F
                Fue 4-0 con goles de Palavecino, Álvarez y Romero (2)."/>
            </Route>
            <Route path='/deportes/n3'>
                <Noticias1
                url={img3}
                titulo="Falleció Sir Frank Williams"
                subtitulo="El mundo del deporte motor rinde homenaje a Frank Williams"
                contenido='Sir Frank Williams, fundador y antiguo director de la escudería Williams, ha fallecido hoy. A la edad de 79 años el mundo perdió a uno de los pilares de la Fórmula 1, una figura fundamental que ha marcado la historia de este deporte. La noticia ha conmocionado a todo el paddock, que se reúne en torno al equipo y a la familia. Los mensajes de condolencia y pésame llegaron de parte de equipos y pilotos, que recordaron a Sir Frank Williams en las redes sociales. 
                La cuenta de la Fórmula 1 escribe: "Nos invade la más profunda e inmensa tristeza por el fallecimiento de Sir Frank Williams. Su vida fue impulsada por la pasión por el automovilismo; su legado es inconmensurable y formará parte para siempre de la F1. Conocerlo fue una inspiración y un privilegio. Le echaremos mucho, mucho de menos".'/>
            </Route>
            <Route path='/deportes/n4'>
                <Noticias1
                url={img4}
                titulo="Así se conmemoraron los cinco años de la tragedia del Chapecoense"
                subtitulo="En la vereda Pantalio, La Unión, se reunieron autoridades colombianas, del Brasil y la comunidad."
                contenido="Con una misa, ofrendas florales y sentidos discursos de recordación, se realizó en esta mañana del domingo la conmemoración de los cinco años de la tragedia aérea del Chepecoense, ocurrida el 28 de noviembre de 2016.
                En la sede de la escuela rural de Pantalio, ubicada en la vereda en donde ocurrió el siniestro, se reunieron miembros de la alcaldía de La Unión, bomberos, representantes del gobierno brasilero y además miembros de la comunidad de ese municipio del Oriente antioqueño, entre otras personas."/>
            </Route>

        </div>
    )
}

export default Deportes
