import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar'
import Presentacion from './components/Presentacion';

function App() {


  return (
    <div className="container max-auto">

      
        
        <NavBar/>
        <Presentacion />
        <ItemDetailContainer/>
        <ItemCount stock={6} initial={1} />

      
    </div>
  );
}

export default App;
