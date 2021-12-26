import React from 'react'

import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import s21Detail from '../assets/s21Detail.jpg'

const ItemDetailContainer = () => {


    const phoneDetail = [
        {
            id: 1,
            title: 'SAMSUNG GALAXY S21',
            img: s21Detail,
            memoria: 128,
            ram: 8,
            bateria: 4000,
            camaraP: 12,
            camaraF: 12,
            pantalla: '6,5"',
            precio: 130000,
        },
    ]


    const [Detail, setDetail] = useState([])

    const getDetail = () =>{
        const item = new Promise ((res, rej)=>{

            setTimeout(() => {
                if(phoneDetail.length > 0)
                    {res(phoneDetail)
                }else{
                    rej(console.log('no hay stock'))
                }

            }, 2000);
        })

        item
                .then(res =>(setDetail(res)))
                .catch(err =>(console.log(err)))

        
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-3 h-96 p-0.5 m-3 max-w-7xl'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-1'>
                    
                    { Detail.map( d => <ItemDetail img={d.img} title={d.title} memoria={d.memoria} ram={d.ram} bateria={d.bateria} camaraP={d.camaraP} camaraF={d.camaraF} pantalla={d.pantalla} precio={d.precio} />)}

                </div>


            </div>
            
        </>
    )
}

export default ItemDetailContainer

