import React from 'react'

import {Link} from 'react-router-dom'

const Item = ({ id, modelo, precio, img, title}) => {


    return (


        <>
            <div  className='flex bg-green-300 h-full w-64 md:w-80 lg:w-128 xl:w-150 shadow p-0.5 mx-2 rounded dark:bg-gray-700'>
                
                <div className='flex flex-wrap content-end items-center bg-white dark:bg-gray-100 h-full shadow p-2 rounded'>

                    <img src={img} alt={`${id}-${title}`} className='h-52 md:h-72 lg:h-96 xl:h-128 w-full rounded' />
                    <p className='text-lg  my-0.5 mx-10 hidden' >{id}-</p>
                    <h2 className='text-2xl lg:text-3xl font-bold my-0.5 mx-10'>{modelo}</h2>
                    <h3 className='text-xl lg:text-2xl xl:text-3xl font-semibold  my-0.5 mx-10'> {(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(precio))}</h3>
                    <Link to={`/productos/${id}`} className='flex justify-center items-center bg-blue-300 hover:bg-green-600 rounded shadow w-full h-12 font-bold my-0.5 mx-10 text-xl lg:text-3xl'>Detalle</Link>

                </div>
                
            </div>
        </>
    )
}

export default Item
