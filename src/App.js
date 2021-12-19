import React, {useState} from 'react';
import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar'

function App() {


  return (
    <div className="container max-auto">
        <NavBar/>
        <ItemCount stock={6} initial={1} />
    </div>
  );
}

export default App;
