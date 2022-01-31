import React, {useEffect, useState} from 'react';

import db from '../firebase/firebase';

import ComparationList from './ComparationList';
import {phones} from '../data/phones'

const ComparationContainer = () => {

    const [Show, setShow] = useState([]
        // <>
        //     <label  for='phones'>Choose your phone</label>
        //     <select className='overflow-y-scroll '  name='select'>
        //     <option className=''>Selecciona tu telefono</option>
        //     {phones.map(i=> (
        //         <option  className='' id={i.id} value={i.value}>{i.title}</option>
        //     ))}
            
            
        // </select>
        // </>
    );

    useEffect(() => {
        


    }, []);
    
    const clickHandler = (e)=>{
        const option = e.target.value
        console.log(option)
        // setShow(option)
        setShow(phones.filter(i=> i.title === option))
        console.log("esto es filter", phones.filter(i=> i.title === option))
    }

    
    
    return (
    
    
    <>  
        
        <label  for='phones'>Choose your phone</label>
        <select onChange={clickHandler} className='overflow-y-scroll '  name='select'>
            <option className='' >Selecciona tu telefono</option>
            {phones.map(i=> (
                <option  className='' id={i.id} value={i.value}>{i.title}</option>
            ))}
            
            
        </select>
        
        <div>
            {
                Show.map(e=> <ComparationList item={e}/>)
            }
            {console.log("esto es show",Show)}
        </div>


    </>
    
    

    )};

export default ComparationContainer;
