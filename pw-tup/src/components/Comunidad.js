import React from 'react';
import './comunidad.css';
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunctions";
import Noticias2 from './Noticias2';
const axios = require('axios');
export default function Comunidad() {
    
    const [filtered, setFiltered] = useState(false)
    const [news, setNews] = useState([])
    const [title, setTitle] = useState([])
    const [author, setAuthor] = useState([])
    const [body, setBody] = useState([])
    const [date, setDate] = useState([])

    const clickFunction = () => {
        setFiltered(!filtered)
    }
    const getNews = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar"
}
    const fetchNews = () => {
        httpGet('api/news/')
          .then((res) => setNews(res.data))

      }
    
    const createNews = () => {
        httpPost('api/news/', { title: title, author:author, body:body, date:date})
          .then(fetchNews)
    }
/*
    const deleteRecipe = () =>{
        httpDelete('api/Recipes/'+{id:this.id} +"/")
            .then(fetchRecipes)
    }

    const modifyRecipe = () =>{
        httpPut('api/Recipes/'+ {id:this.id})
            .then(fetchRecipes)
    }
*/ 
      useEffect(fetchNews, [])

    return (
        <div>
            <div>
                <h1>Noticias</h1>
            </div>
            <div className="inputWide">
                <form onSubmit={createNews}>
                    <fieldset>
                        <legend>Crear noticias</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Titulo</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Autor</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={author}
                                   onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Cuerpo</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={body}
                                   onChange={(e) => setBody(e.target.value)}
                            />
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Fecha</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={date}
                                   onChange={(e) => setDate(e.target.value)}
                                   placeholder="Ej: 2021-11-30"
                            />
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">CREAR NOTICIA</button>
                    </fieldset>
                </form>
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



