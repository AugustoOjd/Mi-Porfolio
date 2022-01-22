import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home'
import Cart from './components/Cart'
import { CartProvider } from '../src/context/CartContext';
import DateCompra from './components/DateCompra'

import {phones} from '../src/data/phones'
import db from './firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { fileUpload } from './firebase/fileUpload'

function App() {


  // const arrayUpload = ()=>{

  //   phones.forEach(async (element) => {
  //     const imgURL = await fileUpload(element.img)

  //     addDoc(collection(db, 'phones'), {...element, img: imgURL })
  //   });

  // }


  return (
    
    <>
    <CartProvider>
    <div className="container max-auto">
      
      <BrowserRouter>

        <NavBar/>
        {/* <button onClick={arrayUpload}>SUBIR COSAS</button> */}
        <Routes>

          <Route index element={<Home />} />
            <Route path="/:marca" element={<ItemListContainer />} />

            <Route path="/productos/:itemId" element={<ItemDetailContainer />}/>
            
            <Route path="/carrito" element={<Cart/>} />

            <Route path="/carrito/finalizar-compra" element={<DateCompra/>} />

            

            <Route path="*" element={<Navigate to="/" />} />

            
            



        </Routes>

      </BrowserRouter>
      
    </div>
    </CartProvider>
    </>
  );


}

export default App;
