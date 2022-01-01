import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'
import { phones } from '../data/phones'



const ItemDetailContainer = () => {

    const [Product, setProduct] = useState([])
    const [Loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log(itemId)

    useEffect(() => {
        setLoading(true)
        const getItems = new Promise ((res)=>{
            setTimeout(() => {
                const myData = phones.find((i)=> i.id === itemId)
                res(myData)
            }, 1000);
        })


        getItems
            .then((res)=> setProduct(res))
            .finally(()=> setLoading(false))
        
    }, [itemId])

    return (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-3 h-96 p-0.5 m-3 max-w-7xl'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-1'>
                    
                    { Loading ? <h3>Cargando modelo...</h3> :  <ItemDetail {...Product} />}
                </div>


            </div>
            
        </>
    )
}

export default ItemDetailContainer

