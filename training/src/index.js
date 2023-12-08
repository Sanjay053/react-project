import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import {  BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Service from "./component/service";
import Create from "./crud/create";
import Edit from "./crud/edit";

import './index.css';
import './App.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<Create />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
