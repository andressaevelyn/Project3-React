import React, { useState} from 'react';
import './App.css';
import CardAvaliacao from './Components/CardAvaliacao/CardAvaliacao';
import Estante from './Components/Estante/Estante';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Me from './assets/WhatsApp Image 2023-01-04 at 07.20.47.jpeg';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Favoritos from './pages/Favoritos/Favoritos';
import Resenhas from './pages/Resenhas/Resenhas';
import Avaliados   from './pages/Avaliados/Avaliados';
import MyComponent from './Components/Hook/Hook';


function App() {
  return (
    <div className="App">
      <MyComponent />
      <Header imagem={Me}  name={"Andressa Evelyn"}  lidos={2} vouLer={2}/>
      <hr />
      <div className='principal'>
      <Router> 
      <Menu />
      <Routes>
        <Route path='./' />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/avaliados' element={<Avaliados />} />
        <Route path='/estante' element={<Estante />}/>
        <Route path='/resenhas' element={<Resenhas />} />
      </Routes>
        
      </Router>
      </div>
    </div>
  );
}

export default App;
