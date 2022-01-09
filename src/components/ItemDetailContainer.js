import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'
import {phones} from '../data/phones'



const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [Loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const getPhones = new Promise((res, rej)=>{
            let uno = "1"
            if(uno === "1"){
                setTimeout(()=>{
                    res(phones)
                }, 1000)
            }else{
                rej("Hubo un error al cargar los productos")
            }
        })

        getPhones
            .then((item)=>{
                if(itemId){
                    const myData = item.filter((e)=> e.id === parseInt(itemId))
                    setProduct(myData)
                }else{
                    setProduct(item)
                }
            })
            .finally(()=> setLoading(false))
        
    }, [itemId])

    return (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-3 h-auto p-0.5 m-3 max-w-7xl'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-1'>
                    
                    { Loading ? <h3>Cargando modelo...</h3> : <ItemDetail product={product}/>}
                </div>


            </div>
            
        </>
    )
}

export default ItemDetailContainer



