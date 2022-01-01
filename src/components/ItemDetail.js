import React from 'react'


const ItemDetail = ({id,img, title, memoria, ram, bateria, camaraP, camaraF, pantalla, precio }) => {

    return (
        <>
            <div className='flex content-center w-full max-w-7xl'>
                
                <div className='bg-blue-200 h-full w-1/2'>
                    <img src={img} className='h-full w-full'></img>
                </div>


                <div className='flex flex-wrap content-evenly bg-gray-50 h-full w-1/2 p-2 text-sm md:text-xl lg:text-2xl xl:text-3xl'>
                    <h2 className='font-bold'>{title}</h2>

                        <div>
                            <h2>{id}</h2>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Memoria interna: </h3>
                            <p className='font-bold'>{memoria}GB</p>
                        </div>

                        <div className='flex w-full' >
                            <h3 className='pr-1'>Memoria ram: </h3>
                            <p className='font-bold'>{ram}GB</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Bateria: </h3>
                            <p className='font-bold'>{bateria}mhz</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Camara principal: </h3>
                            <p className='font-bold'>{camaraP}MP</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Camara Frontal:</h3>
                            <p className='font-bold'>{camaraF}MP</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Pantalla: </h3>
                            <p className='font-bold'>{pantalla}</p>
                        </div>
                        
                        <div className='flex w-full'>
                            <p className='pr-1'>Precio: </p>
                            <h2 className='w-full font-bold text-md lg:text-2xl'>${precio}</h2>
                        </div>
                        
                        <div>
                            
                        </div>
                        <button className='bg-blue-300 w-20 md:w-44 md:h-12 rounded shadow font-semibold'>Agregar</button>


                </div>


            </div>
            
        </>
    )
}

export default ItemDetail
