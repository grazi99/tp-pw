
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

export default function App() {
  return (
    <Router>
      <Navbar />
        {/*
         A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
    </Router>
  );
}