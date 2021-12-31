import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

import s21 from '../assets/s21.jpg'
import zflip3 from '../assets/zflip3.jpg'
import a32 from '../assets/a32.jpg'
import a12 from '../assets/a12.jpg'
import a03s from '../assets/a03s.jpg'

import edge20pro from '../assets/edge20pro.jpg'
import g100 from '../assets/g100.jpg'
import e7 from '../assets/e7.jpg'


import iphone13 from '../assets/iphone13.jpg'
import iphone12 from '../assets/iphone12.jpg'
import iphone8 from '../assets/iphone8.jpg'


import mi11 from '../assets/mi11.jpg'
import redmi8 from '../assets/redmi8.jpg'
import redmi9 from '../assets/redmi9.jpg'



export const phones = [

    /*samsung*/

    {
        id: 1,
        marca: 'samsung',
        img: s21,
        title: 'Galaxy S21',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,5"',
        precio: 90000,
    },
    {
        id: 2,
        marca: 'samsung',
        img: zflip3,
        title: 'Z-Flip 3',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 3,
        marca: 'samsung',
        img: a32,
        title: 'Galaxy A32',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 4,
        marca: 'samsung',
        img: a12,
        title: 'Galaxy A12',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 5,
        marca: 'samsung',
        img: a03s,
        title: 'Galaxy A03s',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },


    /*motorola*/

    {
        id: 6,
        marca: 'motorola',
        img: edge20pro,
        title: 'Edge 20 pro',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 7,
        marca: 'motorola',
        img: g100,
        title: 'G100',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 8,
        marca: 'motorola',
        img: e7,
        title: 'E7',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },



    /*apple*/

    {
        id: 9,
        marca: 'apple',
        img: iphone13,
        title: 'iPhone13',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 10,
        marca: 'apple',
        img: iphone12,
        title: 'iPphone11',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 11,
        marca: 'apple',
        img: iphone8,
        title: 'iPhone8',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },



    /*xiaomi*/

    {
        id: 12,
        marca: 'xiaomi',
        img: redmi9,
        title: 'Redmi 9',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 13,
        marca: 'xiaomi',
        img: redmi8,
        title: 'Redmi 8',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
    {
        id: 14,
        marca: 'xiaomi',
        img: mi11,
        title: 'Mi 11',
        memoria: 128,
        ram: 8,
        bateria: 4000,
        camaraP: 12,
        camaraF: 12,
        pantalla: '6,4"',
        precio: 125000,
    },
];


const ItemListContainer = ({greeting}) => {

    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)

    const {marca} = useParams() 

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise ((res)=> {
            setTimeout(() => {
                const myData = marca ? phones.filter(m=> m.marca === marca) : phones;

                res(myData)
            }, 1000);
        })

        getItems
            .then((res)=>{
                setItems(res)
            })
            .finally(()=> setLoading(false))


    }, [marca])

    console.log("conteiner", Items)
    return  (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-3 h-96 p-0.5 m-3 max-w-7xl'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-2 overflow-x-auto'>
                    <h3>{greeting}</h3>
                    {Loading ? <h3>Cargando...</h3> : <ItemList items={Items}/>}
                </div>

            </div>
        </>
    )
}

export default ItemListContainer
