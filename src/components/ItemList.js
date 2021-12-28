import React from 'react'
import Item from './Item'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s21 from '../assets/s21.jpg'
import zflip3 from '../assets/zflip3.jpg'
import a32 from '../assets/a32.jpg'
import a12 from '../assets/a12.jpg'








const ItemList = () => {

    const modSamsung = [

        {
            id: 1,
            img: s21,
            title: 'Galaxy S21',
            memoria: 128,
            ram: 8,
            camara: 12,
            bateria: 4000,
            precio: 90000,
        },
        {
            id: 2,
            img: zflip3,
            title: 'Z-Flip 3',
            memoria: 128,
            ram: 8,
            camara: 12,
            bateria: 4000,
            precio: 130000
        },
        {
            id: 3,
            img: a32,
            title: 'Galaxy A32',
            memoria: 128,
            ram: 6,
            camara: 48,
            bateria: 5000,
            precio: 40000
        },
        {
            id: 4,
            img: a12,
            title: 'Galaxy A12',
            memoria: 128,
            ram: 6,
            camara: 36,
            bateria: 5000,
            precio: 32000
        }
    ];

    const [Items, setItems] = useState([])

    const {id} = useParams();


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
    }, [id])
    

        

    return (
        <div className='flex'>
            
            { Items.map( m => < Item id={m.id} modelo={m.title} precio={m.precio} img={m.img}/> ) }
        </div>
    )
}

export default ItemList
