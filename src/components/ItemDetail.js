import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <>
        {product.map(product=>
            <>
                <div className='flex content-center w-full max-w-7xl'>
                
                <div className='bg-blue-200 h-full w-1/2'>
                    <img src={product.img} alt={product.title} className='h-full w-full'></img>
                </div>


                <div className='flex flex-wrap content-evenly bg-gray-50 h-full w-1/2 p-2 text-sm md:text-xl lg:text-2xl xl:text-3xl'>
                    <h2 className='font-bold'>{product.title}</h2>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Memoria interna: </h3>
                            <p className='font-bold'>{product.memoria}GB</p>
                        </div>

                        <div className='flex w-full' >
                            <h3 className='pr-1'>Memoria ram: </h3>
                            <p className='font-bold'>{product.ram}GB</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Bateria: </h3>
                            <p className='font-bold'>{product.bateria}mhz</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Camara principal: </h3>
                            <p className='font-bold'>{product.camaraP}MP</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Camara Frontal:</h3>
                            <p className='font-bold'>{product.camaraF}MP</p>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Pantalla: </h3>
                            <p className='font-bold'>{product.pantalla}</p>
                        </div>
                        
                        <div className='flex w-full'>
                            <p className='pr-1'>Precio: </p>
                            <h2 className='w-full font-bold text-md lg:text-2xl'>${product.precio}</h2>
                        </div>

                        <div className='flex w-full'>
                            <h3 className='pr-1'>Stock: </h3>
                            <p className='font-bold'>{product.stock}</p>
                        </div>
                        
                        <div>
                            
                        </div>
                        <ItemCount/>


                </div>


            </div>  
            </>    
        )}
        </>
    )
}

export default ItemDetail
