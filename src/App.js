import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home'

function App() {


  return (
    <div className="container max-auto">

      <BrowserRouter>

        <NavBar/>
        
        <Routes>

          <Route index element={<Home />} />
            <Route path="/samsung" element={<ItemListContainer />} />
              <Route path="/samsung/:id" element={<ItemDetailContainer />}/>

            
            



        </Routes>
        
        
        
        <ItemCount stock={6} initial={1} />

      </BrowserRouter>
    </div>
  );
}

export default App;
