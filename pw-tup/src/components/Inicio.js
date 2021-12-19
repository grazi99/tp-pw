import React from 'react';
import img1 from './alberto.jpg'
import img2 from './messi.jpg'
import img3 from './covid.jpg'
import img4 from './kiosquero.jpg'

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
                    <div className="alineacion-titulo p2">
                        <h1 style={{color:"brown"}} className="centrar">Nino Noticias</h1>
                </div>
            </div>
            <div style={{color:"brown"}}  className="margen">
                <b> Te damos la bienvenida a Nino Noticias ¡En este sitio podrás encontrar todas las noticias de la actualidad!</b>
            </div>
        </div><div>
                <div className="display-menu">
                    
                    <div className="caja-menu1">
                        <div className="titulo-caja1">
                            <h3 className="alinear-caja1">Noticias de ultimo momento</h3>
                        </div>
                        <div className="alinear-caja1">
                                <Link to="/noticiaUM1">
                                    <button className="button boton-caja1-ofertas margen-caja1">
                                        <div className="caja1-ofertas display-ofertas">
                                            <b>El presidente se reunio en la quinta de Olivos</b>
                                            <img src={img1} alt="" width="250"/>
                                        </div>
                                    </button>
                                </Link>
                            <Link to="/noticiaUM2">
                            <button className="button boton-caja1-ofertas margen-caja1">
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
                            <button className="button boton-caja1-ofertas margen-caja1">
                                <div className="caja1-ofertas display-ofertas">
                                    <b>El PSG de Messi triunfó en Manchester</b>
                                    <img src={img2} width="250"/>
                                </div>
                            </button>
                            </Link>
                            <Link to="/noticiaD2">
                            <button className="button boton-caja1-ofertas margen-caja1">
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
                    <div className="lista p3">
                        <h4 style={{marginLeft:"50px"}}>Categorias</h4>
                        <ul className="separacion-lista p3">
                            <Link to="/deportes"><li>Deportes</li></Link>
                            <Link to="/politica"><li>Politica</li></Link>
                            <Link to="/espectaculos"><li>Espectaculos</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>       
    </>
    )
}

export default Inicio
