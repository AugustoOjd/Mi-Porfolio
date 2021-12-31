import React from 'react'
import Item from './Item'

// import s21 from '../assets/s21.jpg'
// import zflip3 from '../assets/zflip3.jpg'
// import a32 from '../assets/a32.jpg'
// import a12 from '../assets/a12.jpg'
// import a03s from '../assets/a03s.jpg'

// import edge20pro from '../assets/edge20pro.jpg'
// import g100 from '../assets/g100.jpg'
// import e7 from '../assets/e7.jpg'


// import iphone13 from '../assets/iphone13.jpg'
// import iphone12 from '../assets/iphone12.jpg'
// import iphone8 from '../assets/iphone8.jpg'


// import mi11 from '../assets/mi11.jpg'
// import redmi8 from '../assets/redmi8.jpg'
// import redmi9 from '../assets/redmi9.jpg'



// export const phones = [

//     /*samsung*/

//     {
//         id: 1,
//         marca: 'samsung',
//         img: s21,
//         title: 'Galaxy S21',
//         memoria: 128,
//         ram: 8,
//         camara: 12,
//         bateria: 4000,
//         precio: 90000,
//     },
//     {
//         id: 2,
//         marca: 'samsung',
//         img: zflip3,
//         title: 'Z-Flip 3',
//         memoria: 128,
//         ram: 8,
//         camara: 12,
//         bateria: 4000,
//         precio: 130000
//     },
//     {
//         id: 3,
//         marca: 'samsung',
//         img: a32,
//         title: 'Galaxy A32',
//         memoria: 128,
//         ram: 6,
//         camara: 48,
//         bateria: 5000,
//         precio: 40000
//     },
//     {
//         id: 4,
//         marca: 'samsung',
//         img: a12,
//         title: 'Galaxy A12',
//         memoria: 128,
//         ram: 4,
//         camara: 36,
//         bateria: 5000,
//         precio: 32000
//     },
//     {
//         id: 5,
//         marca: 'samsung',
//         img: a03s,
//         title: 'Galaxy A03s',
//         memoria: 64,
//         ram: 4,
//         camara: 13,
//         bateria: 5000,
//         precio: 25000
//     },


//     /*motorola*/

//     {
//         id: 6,
//         marca: 'motorola',
//         img: edge20pro,
//         title: 'Edge 20 pro',
//         memoria: 128,
//         ram: 12,
//         camara: 64,
//         bateria: 5000,
//         precio: 150000
//     },
//     {
//         id: 7,
//         marca: 'motorola',
//         img: g100,
//         title: 'G100',
//         memoria: 128,
//         ram: 6,
//         camara: 48,
//         bateria: 5000,
//         precio: 75000
//     },
//     {
//         id: 8,
//         marca: 'motorola',
//         img: e7,
//         title: 'E7',
//         memoria: 32,
//         ram: 4,
//         camara: 28,
//         bateria: 5000,
//         precio: 32000
//     },



//     /*apple*/

//     {
//         id: 9,
//         marca: 'apple',
//         img: iphone13,
//         title: 'iPhone13',
//         memoria: 256,
//         ram: 8,
//         camara: 64,
//         bateria: 4200,
//         precio: 246000
//     },
//     {
//         id: 10,
//         marca: 'apple',
//         img: iphone12,
//         title: 'iPphone11',
//         memoria: 128,
//         ram: 6,
//         camara: 28,
//         bateria: 4000,
//         precio: 170000
//     },
//     {
//         id: 11,
//         marca: 'apple',
//         img: iphone8,
//         title: 'iPhone8',
//         memoria: 32,
//         ram: 4,
//         camara: 16,
//         bateria: 3800,
//         precio: 80000
//     },



//     /*xiaomi*/

//     {
//         id: 12,
//         marca: 'xiaomi',
//         img: redmi9,
//         title: 'Redmi 9',
//         memoria: 128,
//         ram: 8,
//         camara: 64,
//         bateria: 5000,
//         precio: 85000
//     },
//     {
//         id: 13,
//         marca: 'xiaomi',
//         img: redmi8,
//         title: 'Redmi 8',
//         memoria: 64,
//         ram: 6,
//         camara: 48,
//         bateria: 4500,
//         precio: 78000
//     },
//     {
//         id: 14,
//         marca: 'xiaomi',
//         img: mi11,
//         title: 'Mi 11',
//         memoria: 32,
//         ram: 4,
//         camara: 16,
//         bateria: 4500,
//         precio: 48000
//     },
// ];



const ItemList = ({items}) => {

    return (
        <div className='flex'>
            
            <div className='flex'>{items.map(m=><Item img={m.img} modelo={m.title} precio={m.precio} key={m.id}/>) }</div> 
        </div>
    )
}



export default ItemList
