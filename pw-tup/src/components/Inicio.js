import React from 'react';
import img1 from './alberto.jpg'
import img2 from './messi.jpg'
import img3 from './covid.jpg'
import img4 from './kiosquero.jpg'
import NoticiaUM1 from './NoticiaUM1';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    
  } from "react-router-dom";

function Inicio() {
    return (
        <><div>
            
            <div className="caja-titulo titulo">
                <div className="centrar">
                    <div className="alineacion-titulo">
                        <h1 style={{color:"brown"}} className="centrar">Nino Noticias</h1>
                </div>
            </div>
            <div style={{color:"brown"}} className="margen">
                <b> Te damos las bienvenidas a Nino Noticias ¡En este sitio podrás encontrar todas las noticias de la actualidad!</b>
            </div>
        </div><div>
                <div className="display-menu">
                    
                    <div className="caja-menu1">
                        <div className="titulo-caja1">
                            <h3 className="alinear-caja1">Noticias de ultimo momento</h3>
                        </div>
                        <div className="alinear-caja1">
                                <Link to="/noticiaUM1">
                                    <button className="button boton-caja1-ofertas margen">
                                        <div className="caja1-ofertas display-ofertas">
                                            <b>El presidente se reunio en la quinta de Olivos</b>
                                            <img src={img1} alt="" width="250"/>
                                        </div>
                                    </button>
                                </Link>
                            <Link to="/noticiaUM2">
                            <button className="button boton-caja1-ofertas margen">
                                <div className="caja1-ofertas display-ofertas">
                                    <b>El homicidio del kiosquero</b>
                                    <img src={img4} width="250"/>
                                </div>
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="caja-menu2">
                        <div className="titulo-caja1">
                            <h3 className="alinear-caja1">Destacadas del dia</h3>
                        </div>
                        <div className="alinear-caja1">
                            <Link to="/noticiaD1">    
                            <button className="button boton-caja1-ofertas margen">
                                <div className="caja1-ofertas display-ofertas">
                                    <b>El PSG de Messi triunfó en Manchester</b>
                                    <img src={img2} width="250"/>
                                </div>
                            </button>
                            </Link>
                            <Link to="/noticiaD2">
                            <button className="button boton-caja1-ofertas margen">
                                <div className="caja1-ofertas display-ofertas">
                                    <b>70 nuevos casos de COVID-19 en Rosario</b>
                                    <img src={img3} width="250"/>
                                </div>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="caja-menu3">
                    <div className="lista">
                        <h4>Categorias</h4>
                        <ul className="separacion-lista">
                            <li>Deportes</li>
                            <li>Economia</li>
                            <li>Salud</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>       
    </>
    )
}

export default Inicio
