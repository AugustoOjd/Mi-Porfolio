import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="container max-auto">
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
