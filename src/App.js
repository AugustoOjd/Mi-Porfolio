import React from 'react';
import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar'

function App() {


  return (
    <div className="container max-auto">
        <NavBar/>
        <ItemCount/>
    </div>
  );
}

export default App;
