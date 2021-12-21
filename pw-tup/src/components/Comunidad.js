import React from 'react';
import './comunidad.css';
import { Link, Route } from 'react-router-dom';
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunctions";
import Noticias2 from './Noticias2';
import Busqueda from './Busqueda';
const axios = require('axios');
export default function Comunidad() {
    
    const [filtered, setFiltered] = useState(false)
    const [news, setNews] = useState([])
    const [title, setTitle] = useState([])
    const [author, setAuthor] = useState([])
    const [body, setBody] = useState([])
    const [date, setDate] = useState([])

    const fetchNews = () => {
        httpGet('api/news/')
          .then((res) => setNews(res.data))
      }


    const createNews = () => {
        httpPost('api/news/', { title: title, author:author, body:body, date:date})
          .then(fetchNews)
    }

      useEffect(fetchNews, [])

    return (
        <div>
        <div className='boton-buscar'>
            <Link to="/busqueda" className="button boton-navbar p1">Buscar noticias</Link>
            <Route path="/busqueda">
                <Busqueda/>
            </Route>
        </div>
            <div class="caja">
                <div class="caja-central-comunidad">
                    <div class="caja-central-titulo">
                        <h3>Crear noticias</h3>
                    </div>
                <form onSubmit={createNews}>
                    <div class="ingreso-datos-comunidad">
                        <div>
                            <label htmlFor="disabledTextInput">Titulo</label>
                            <input type="text" id="disabledTextInput" value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="disabledTextInput">Autor</label>
                            <input type="text" id="disabledTextInput" value={author}
                                   onChange={(e) => setAuthor(e.target.value)}
                                   />
                        </div>
                        <div>
                            <label htmlFor="disabledTextInput">Fecha</label>
                            <input type="text" id="disabledTextInput" value={date}
                                   onChange={(e) => setDate(e.target.value)}
                                   placeholder="Ej: 2021-11-30"
                            />
                        </div>
                        <div>
                            <label htmlFor="TextInput">Cuerpo</label>
                            <textarea type="text" id="TextInput" value={body}
                                   onChange={(e) => setBody(e.target.value)}>
                            </textarea>
                        </div>
                    </div>
                        <button type="submit" className="btn btn-primary">CREAR NOTICIA</button>
                </form>
            </div>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="displayNoticias">
                    {
                        news
                            .map((mapnews) => {
                                return (
                                    <Noticias2 noticias={mapnews}/>
                                )
                            })
                    }
            </div>
        </div> 
        
    )
}