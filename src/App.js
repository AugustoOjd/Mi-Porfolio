import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

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
            <Route path="/:marca" element={<ItemListContainer />} />

            <Route path="/productos/:itemId" element={<ItemDetailContainer />}/>
            

            <Route path="*" element={<Navigate to="/" />} />

            
            



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
