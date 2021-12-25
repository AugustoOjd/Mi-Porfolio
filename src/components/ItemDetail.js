import React from 'react'
import s21Detail from '../assets/s21Detail.jpg'

const ItemDetail = ({Item}) => {

    return (
        <>
            <di className='flex content-center w-full'>
                
                <div className='bg-blue-200 h-full w-1/2'>
                    <img src={s21Detail} className='h-full w-full'></img>
                </div>


                <div className='bg-red-200 h-full w-1/2 p-2 text-sm md:text-xl lg:text-2xl xl:text-3xl'>
                    <h2 className='font-bold'>Samsung Galaxy S21</h2>

                        <div className='flex'>
                            <h3>Memoria interna:</h3>
                            <p className='font-bold'> 88</p>
                        </div>

                        <div className='flex' >
                            <h3>Memoria ram:</h3>
                            <p className='font-bold'> 88</p>
                        </div>

                        <div className='flex'>
                            <h3>Bateria:</h3>
                            <p className='font-bold'> 88</p>
                        </div>

                        <div className='flex'>
                            <h3>Camara principal:</h3>
                            <p className='font-bold'> 88</p>
                        </div>

                        <div className='flex'>
                            <h3>Camara Frontal:</h3>
                            <p className='font-bold'> 88</p>
                        </div>

                        <div className='flex'>
                            <h3>Pantalla:</h3>
                            <p className='font-bold'> 88</p>
                        </div>

                    <h2>$99999</h2>

                    <button className='bg-blue-300'>Agregar</button>


                </div>


            </di>
            
        </>
    )
}

export default ItemDetail
