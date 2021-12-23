import React from 'react'
import Item from './Item'
import { useState, useEffect } from 'react';








const ItemList = () => {

    const modSamsung = [

        {
            id: 1,
            src: '',
            title: 'Galaxy S21',
            memoria: 128,
            ram: 8,
            camara: 12,
            bateria: 4000,
            precio: 120000,
        },
        {
            id: 2,
            src: '',
            title: 'Z-Flip 3',
            memoria: 128,
            ram: 8,
            camara: 12,
            bateria: 4000,
            precio: 130000
        }
    ];

    const [Items, setItems] = useState([])


    const getpromesa = () =>{
        
        const delay = new Promise ((res,rej)=>{


            setTimeout(() => {
                if(modSamsung.length > 0){
                    res( modSamsung)
                }else{
                    rej(console.log('no hay productos'))
                }
            }, 2000);
        })
    
        delay
            .then( res => {setItems(res)})
            .catch( err =>{console.log(err)})

    }

    useEffect(() => {
        getpromesa()
    }, [])
    

        

    return (
        <div className='flex'>
            
            { Items.map( m => < Item key={m.id} modelo={m.title} bateria={m.bateria} memoria={m.memoria}  precio={m.precio}/> ) /* { modSamsung.map( m => < Item key={m.id} modelo={m.title} bateria={m.bateria} memoria={m.memoria}  precio={m.precio} img={m.src}/> ) }  */}
        </div>
    )
}

export default ItemList
