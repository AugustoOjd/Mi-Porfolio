import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import {DiApple} from 'react-icons/di'
import {SiSamsung} from 'react-icons/si'
import {SiMotorola} from 'react-icons/si'
import {SiXiaomi} from 'react-icons/si'




function App() {

  
  const marcas= [
    {
      icon: <DiApple/>,
      name: 'Apple'
    },
    {   
      icon: <SiSamsung/>,
      name: 'Samsung'
    },
    {
      icon: <SiMotorola/>,
      name: 'Motorola'
    },
    {
      icon: <SiXiaomi/>,
      name: 'Xiaomi'
    },
]

  return (
    <div className="container max-auto">
        <NavBar/>
        
        <div>{marcas.map(m => (<ItemListContainer name={m.name} icon={m.icon}/>))}</div>


    </div>
  );
}

export default App;
