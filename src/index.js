import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,  BrowserRouter } from 'react-router-dom';

import Register from './components/register';
import Landing from './components/landing';
import Login from './components/login';
import About from './components/about';
import Contact from './components/contact';
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/"><Landing /></Route>
    <Route path="/register"><Register /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/contact"><Contact /></Route>
  </BrowserRouter>,
  document.getElementById('root')
);
