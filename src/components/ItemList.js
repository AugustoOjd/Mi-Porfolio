import React from 'react'
import Item from './Item'








const ItemList = () => {

    const delay = new Promise ((res,rej)=>{
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

        setTimeout(() => {
            if(modSamsung.length > 0){
                res(modSamsung.map( m => < Item key={m.id} modelo={m.title} bateria={m.bateria} memoria={m.memoria}  precio={m.precio} img={m.src}/> ))
            }else{
                rej(console.log('no hay productos'))
            }
        }, 2000);
    })

    delay
        .then( res => {console.log(res)})
        .catch( err => {console.log(err)})

        

    return (
        <div className='flex'>
            {  } 
        </div>
    )
}

export default ItemList
