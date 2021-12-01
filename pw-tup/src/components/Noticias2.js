import React from 'react'
import {useEffect, useState} from "react";
import {httpGet, httpPost, httpDelete, httpPut} from "../utils/httpFunctions";
import axios from 'axios';
import './noticias.css';
import img from './news.jpg';
function Noticias2({noticias}) {
    const [news, setNews] = useState([])
    const [title, setTitle] = useState([])
    const [author, setAuthor] = useState([])
    const [body, setBody] = useState([])
    const [date, setDate] = useState([])
    let newsid=noticias.id
    let newstitle=noticias.title;
    let newsauthor = noticias.author;
    let newsbody = noticias.body;
    let newsdate = noticias.date;
    

    

    const deleteNews = () =>{
        httpDelete('api/news/'+newsid +"/")
            .then(fetchNews)
    }
    const modifyNews = () =>{
        httpPut('api/news/'+newsid+"/", {id:newsid, title:title, author:newsauthor, body:body, date:date})
            .then(fetchNews)
    }


    const fetchNews = () => {
        httpGet('api/news/')
            .then((res) => setNews(res.data))
    }

    let finalnews = news;


    return (
    <div className="central">
                <div className="aver">
                    <div className="titulo">
                        <h2>{noticias.title}</h2>
                        <h4 style={{width: "900px"}}>{noticias.author}</h4>
                    </div>
            <div className="imagen">
            <img src={img} width="500"/>
            </div>
            <br/>
            <div className="textoNoticiaD1">
                <p style={{width: "800px"}}>
                    {noticias.body}
                </p>
            </div>
                <p>{noticias.date}</p>
        </div>
        <div>
                <form onSubmit={deleteNews}>
                <button type="submit" className="bg-black text-white px-2 px-1">
                    Borrar Noticia
                </button>
                </form>
                <form onSubmit={modifyNews}>
                    <input type="text" id="disabledTextInput" className="form-control" value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder="Modificar titulo"
                    />
                    <input type="text" id="disabledTextInput" className="form-control"  value={body}
                           onChange={(e) => setBody(e.target.value)}
                           placeholder="Modificar noticia"
                    />
                    <input type="text" id="disabledTextInput" className="form-control" value={date}
                           onChange={(e) => setDate(e.target.value)}
                           placeholder="Modificar fecha. Ej: 2021-11-30"
                    />
                <button type="submit" className="bg-black text-white px-2 px-1">
                    Modificar Noticia
                </button>
            </form>
            </div>
    </div>

    )
}

export default Noticias2