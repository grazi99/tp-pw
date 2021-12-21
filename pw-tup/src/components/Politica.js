import React from 'react'
import './noticias1.css'
import { Link, Route } from 'react-router-dom'
import Noticias1 from './Noticias1'
import img1 from './casarosada.jpg'
import img2 from './atentado.jpg'
import img3 from './politica-genero.jpg'
import img4 from './turismo.jpg'
function Politica() {
    return (
        <div className="margen">
        <div className="titulos">
        <h4><Link to="/politica/n1" className='p3'>La Casa Rosada fija nuevo rumbo a la política con el acuerdo con el FMI como eje</Link></h4>
        <h4><Link to="/politica/n2" className='p3'>Tras el ataque a Clarín, denuncian otro acto vandálico contra un canal de noticias de Vicente López</Link></h4>
        <h4><Link to="/politica/n3" className='p3'>Intentan que noticias falsas sean consideradas violencia política de género</Link></h4>
        <h4><Link to="/politica/n4" className='p3'>Buscan que el programa Previaje se convierta en una política de Estado</Link></h4>
        </div>
        <Route path='/politica/n1'>
            <Noticias1 
            url={img1}
            titulo="La Casa Rosada fija nuevo rumbo a la política con el acuerdo con el FMI como eje" 
            subtitulo='En Balcarce 50 se está produciendo un "intercambio de ideas entre compañeros". Afirman que esas conversaciones son para ordenar el "rumbo" del gobierno y que el punto central es el acuerdo con el organismo multilateral.'
            contenido='En Casa Rosada anticipan que "se viene un interesante proceso de discusión para definir la política del Frente de Todos", de cara a lo que será la "segunda etapa" del gobierno de Alberto Fernández.

 

            "Por ahora se está produciendo un intercambio de ideas entre compañeros, para ir viendo el rumbo de los próximos años de gestión. Hace falta organizarse para poder ordenar el rumbo", resaltaron fuentes con despacho en Balcarce 50.
            
             
            
            En esa línea, definieron al peronismo como "un proceso vivo", por lo que se producen "mesas de conversación con idas y vueltas, donde se llega a puntos de acuerdo".
            
             
            
            "Se viene un cambio de época. La esencia es tener un proyecto de país", enfatizaron a Noticias Argentinas, y consideraron que "parte de la solución de la crisis de la Argentina es cambiar la mirada externa y darle suma importancia a la política exterior".
            
             
            
            Al respecto, afirmaron "llegar a un acuerdo con el Fondo Monetario Internacional es algo así como un certificado de normalidad", que es lo que el país "necesita para darle valor al sistema financiero y comercial".
            
             
            
            "Para que se normalice el país, en el marco de los negocios, la Argentina necesita acuerdo con el Fondo. Somos un país que parece estar sumergido en sus problemas internos. Es necesario que dejemos de mirarnos el ombligo y empecemos a mirar al mundo", puntualizaron.
            
             
            
            En ese marco, confiaron que "la previsibilidad en el mundo de los negocios es necesaria y vital", por lo que "para incrementar el números de puestos laborales se necesitan inversiones, por eso es tan importante normalizar la macroeconomía".
            
             
            
            "Hay un conjunto de planes de trabajo y de asistencia, pero la aspiración es que esos argentinos se integren a la vida productiva", señalaron.
            
             '/>
        </Route>
        <Route path='/politica/n2'>
            <Noticias1
            url={img2}
            titulo="Tras el ataque a Clarín, denuncian otro acto vandálico contra un canal de noticias de Vicente López"
            subtitulo="Durante la madrugada del sábado cortaron los cables de alimentación eléctrica de la señal Chacra TV."
            contenido='Luego del ataque al edificio de Clarín con bombas molotov, cuya investigación avanza y ya se produjo una detención, se conoció un nuevo ataque vandálico contra un medio de comunicación.
            Se trata de Chacra TV, una señal de noticias agropecuarias ubicada en Vicente López, que en horas de la madrugada del sábado le cortaron la alimentación eléctrica y así impidieron impidió que la señal pudiera continuar con la emisión de sus contenidos.
            “Vemos con preocupación el incremento de acciones delictivas que sólo pretenden acallar a un grupo que tiene más de 90 años en el país”, argumentaron las autoridades del canal en un comunicado.
            Además, destacaron la intervención de la firma Edenor ante el reclamo luego del episodio, que constató el "hecho vandálico" ocurrido en la emisora televisiva. '/>
        </Route>
        <Route path='/politica/n3'>
            <Noticias1
            url={img3}
            titulo="Intentan que noticias falsas sean consideradas violencia política de género"
            subtitulo="La diputada del PAN, Aurora Sierra Rodríguez presentó esta iniciativa ante el Congreso del Estado"
            contenido='La diputada local del PAN, Aurora Sierra Rodríguez, presentó una iniciativa ante el Congreso del Estado para establecer que la difusión de “noticias falsas” sobre una precandidata o candidata en Puebla es violencia política de género y que esta puede ser perpetrada por familiares, parejas o exparejas.

            En el documento expone que ha sufrido violencia política por parte de su expareja —Víctor Hugo Islas Hernández—, no solo durante la campaña en la cual la amenazó y divulgó información de la relación sentimental con la intención de dañar su imagen, sino que continuó amenazándola con denunciarla hasta que lo hizo y fue detenida por unas horas; además señala que la opinión pública la ha violentado al llamarla “la esposa” o “la exesposa de” y no por su nombre.
            Por ello, Aurora Sierra propone reformar la Ley para el Acceso de las Mujeres a una Vida Libre de Violencia del Estado de Puebla, con el fin de establecer que la violencia política contra las mujeres en razón de género también puede ser perpetrada por familiares, parejas o exparejas y no solo por agentes federales, estatales y municipales, superiores jerárquicos, colegas de trabajo, dirigentes de partido, militantes, personas precandidatas o candidatas, medios de comunicación y sus integrantes, por un particular o por un grupo de personas particulares.'/>
        </Route>
        <Route path='/politica/n4'>
            <Noticias1
            url={img4}
            titulo="Buscan que el programa Previaje se convierta en una política de Estado"
            subtitulo="El ministro Matías Lammens adelantó que presentará un proyecto de ley"
            contenido='El ministro de Turismo y Deportes, Matías Lammens, afirmó que el Gobierno presentará esta semana un proyecto de ley para incentivar las inversiones en el sector turístico y establecer el programa del Previaje como "una política de Estado", al tiempo que subrayó que esta industria será "uno de los grandes protagonistas del desarrollo de la Argentina en los próximos años".

            "Creemos que el turismo puede alcanzar 3 ó 4 puntos más de Producto Bruto Interno (PBI) y generar 250.000 más de puestos de empleo", destacó Lammens en declaraciones por Radio 10, tras celebrar nuevamente que el Programa Previaje II quintuplicó el monto vendido respecto a la primera edición.
            
            El ministro adelantó que el proyecto de ley que se enviará esta semana al Congreso incluirá "eximiciones impositivas y la posibilidad de la devolución en un bono fiscal de una parte de las inversiones que se hagan en turismo".
            También buscará establecer el Programa Previaje como "una política de Estado para sostener la demanda en el tiempo", precisó Lammens, quien recordó que la industria turística del país participa en casi 10 puntos del PBI y genera actualmente 1 millón de puestos de trabajo.'/>
        </Route>
    
    </div>
    )
}

export default Politica
