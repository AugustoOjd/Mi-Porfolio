import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';




function App() {

  
  const marcas= [
    {
        name: 'Apple'
    },
    {
        name: 'Samsung'
    },
    {
        name: 'Motorola'
    },
    {
        name: 'Xiaomi'
    },
]

  const marca = marcas.map(m => (<ItemListContainer name={m.name}/>))

  return (
    <div className="container max-auto">
        <NavBar/>
        
        <h2>{marca}</h2>


    </div>
  );
}

export default App;
