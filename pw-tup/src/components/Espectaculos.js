import React from 'react'
import './noticias1.css'
import { Link, Route } from 'react-router-dom'
import Noticias1 from './Noticias1'
import img1 from './n1.jpg'
import img2 from './n2.jpg'
import img3 from './n3.jpg'
import img4 from './n4.jpg'

function Espectaculos() {
    return (
        <div className="margen">
            <div className="titulos">
            <h4><Link to="/espectaculos/n1">LOLLAPALOOZA: ¡COMENZÓ LA VENTA DE TICKETS!</Link></h4>
            <h4><Link to="/espectaculos/n2">Murió el periodista de espectáculos Guillermo Blanc</Link></h4>
            <h4><Link to="/espectaculos/n3">Francia prohibirá el uso de animales en circos y otros espectáculos en vivo</Link></h4>
            <h4><Link to="/espectaculos/n4">La Ciudad de Buenos Aires restringe los eventos públicos</Link></h4>
            </div>
            <Route path='/espectaculos/n1'>
                <Noticias1 
                url={img1}
                titulo="LOLLAPALOOZA: ¡COMENZÓ LA VENTA DE TICKETS!" 
                subtitulo="El 18, 19 y 20 de marzo en el Hipódromo de San Isidro. Más de 100 bandas y solistas."
                contenido='La espera terminó. Comenzó la venta de tickets para cada uno de los días para disfrutar de la séptima edición de Lollapalooza Argentina y, sobre todo, revivir la magia que, durante cada marzo, se apodera del Hipódromo de San Isidro a través de un mega encuentro cultural donde la música, el arte, el diseño, la gastronomía y las nuevas tendencias artísticas convocan a 300.000 fanáticos de todas las edades.

                Con headliners como Foo Fighters, The Strokes, Miley Cyrus, Doja Cat, A$AP Rocky y Martin Garrix, el festival, que se llevará a cabo el viernes 18, sábado 19 y domingo 20 de marzo de 2022, habilita la venta para los tres días.
               
               De los más de 100 artistas que participarán del regreso, muchos pisarán suelo argentino por primera vez: Doja Cat, A$AP Rocky, Machine Gun Kelly, Jack Harlow, Phoebe Bridgers, Idles, Jhay Cortez, Kehlani, Alessia Cara, Turnstile, Idles, Remi Wolf, Channel Tres, King Gizzard the Lizard Wizard, Boombox Cartel, Ashnikko, JXDN, The Wombats, Natanael Cano, 070 Shake, Marc Seguí, Bruses, Paula Cendejas, Sen Senra, Derby Motoretas Burrito Kachimba, Girl Ultra y Ghetto Kids, entre otros.'/>
            </Route>
            <Route path='/espectaculos/n2'>
                <Noticias1 
                url={img2}
                titulo="Murió el periodista de espectáculos Guillermo Blanc" 
                subtitulo="Tenía 75 años y una larga trayectoria en medios gráficos y TV, donde se especializó principalmente en el mundo de la farándula. Estaba internado por una infección urinaria"
                contenido='El periodista Guillermo Blanc, dedicado al mundo de la farándula y el espectáculo desde la revista Radiolandia 2000, de la que fue director en la década de 1980, y creador de programas televisivos como “Yo amo a la TV”, junto a Andrés Percivale y Juan Carlos Vilches en 1998, falleció en la localidad de Adrogué a los 75 años, donde estaba internado por una infección urinaria, confirmó su hijo Patricio en redes.
                Miembro de la Asociación de Periodistas de la Televisión y Radio Argentinas (Aptra) desde su fundación, según versiones de sus familiares difundidas por las redes, habría sufrido una infección en la sala donde se encontraba internado, aunque no se puede afirmar que se tratara de covid-19.'/>
            </Route>
            <Route path='/espectaculos/n3'>
                <Noticias1 
                url={img3}
                titulo="Francia prohibirá el uso de animales en circos y otros espectáculos en vivo" 
                subtitulo=""
                contenido='Los circos con tigres, leones, elefantes u otros animales salvajes tienen los días contados en Francia. Una nueva ley, impulsada en el congreso y recién firmada por el presidente del gobierno francés, Emmanuel Macron, prohibe los espectáculos en vivo con animales pero con una notable excepción: los toros.

                La nueva ley entra en vigor en 2023 y no solo afecta a los circos. Además incluye a los delfines o a los visones, lo que supone el cierre de las granjas que crían estos animales para pieles. También especifica que no se pueden emplear animales vivos para otros espectáculos, sean programas de televisión, shows en directo en clubes nocturnos o fiestas privadas. Además, las penas por maltratar a un animal han aumentado. El que viole la nueva ley se enfrenta a multas de hasta 75.000 euros y penas de hasta cinco años en prisión.
                
                Los espectáculos con animales estarán prohibidos en dos años, pero en cinco años más la ley prohíbe la tenencia de animales exóticos y restringe severamente el comercio con ciertas especies.'/>
            </Route>
            <Route path='/espectaculos/n4'>
                <Noticias1 
                url={img4}
                titulo="La Ciudad de Buenos Aires restringe los eventos públicos" 
                subtitulo="Más de 15 mil personas pasaron por el Festival La Nueva Generación, en Ciudad de Córdoba"
                contenido='Mediante un decreto y siguiendo las recomendaciones de la Organización Mundial de la Salud (OMS), que ha declarado al coronavirus (COVID-19) como una pandemia, el Gobierno de la Ciudad de Buenos Aires ha dispuesto una serie de medidas de prevención y control "tendientes a reducir el riesgo de propagación del contagio en la población", señala el decreto.

                "En virtud de las recomendaciones de La Organización Mundial de la Salud deviene necesario restringir todo acto, reunión o acontecimiento de carácter eventual cuyo objeto sea artístico, musical o festivo mayor a doscientos (200) asistentes".
                Con relación al teatro y al cine, se reduce la "capacidad de ocupación en un cincuenta por ciento (50%), la que no podrá superar los doscientos (200) asistentes".
                En lo que respecta a los boliches, el decreto señala: "Resulta necesario suspender las actividades que se desarrollen en todos los establecimientos inscriptos y autorizados bajo el rubro "local de baile clase C".'/>
            </Route>
        </div>
    )
}

export default Espectaculos
