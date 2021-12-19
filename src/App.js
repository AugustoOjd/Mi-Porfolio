import React from 'react';
import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar'
import Presentacion from './components/Presentacion';

function App() {


  return (
    <div className="container max-auto">
        <NavBar/>
        <Presentacion />
        <ItemCount stock={6} initial={1} />
    </div>
  );
}

export default App;
