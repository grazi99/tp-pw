import './indice.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
import Inicio from './components/Inicio';
import Testeo from './components/Testeo';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import NoticiaUM1 from './components/NoticiaUM1';
import NoticiaUM2 from './components/NoticiaUM2';
import NoticiaD1 from './components/NoticiaD1';
import NoticiaD2 from './components/NoticiaD2';
import Deportes from './components/Deportes';
import Politica from './components/Politica';
import Espectaculos from './components/Espectaculos';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/test">
            <Testeo />
          </Route>
          <Route path="/noticiaUM1">
            <NoticiaUM1 />
          </Route>
          <Route path="/noticiaUM2">
            <NoticiaUM2 />
          </Route>
          <Route path="/noticiaD1">
            <NoticiaD1 />
          </Route>
          <Route path="/noticiaD2">
            <NoticiaD2 />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/deportes">
            <Deportes />
          </Route>
          <Route path="/politica">
            <Politica />
          </Route>
          <Route path="/espectaculos">
            <Espectaculos />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
    </Router>
  );
}