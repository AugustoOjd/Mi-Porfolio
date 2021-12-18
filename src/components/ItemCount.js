import React, { useState } from 'react'


const modSam = [
    {
        modelo: ' Galaxy S21',
        stockArr: 6
    },
    {
        modelo: 'Galaxy A12',
        stockArr: 3
    }
]


const ItemCount = ({stock, initial, onAdd}) => {

    const [Contador, setContador] = useState(1)

    let sumar = () => setContador(Contador + 1)
    let restar = () => setContador(Contador - 1)


    return (

        <>
            <div className='flex flex-wrap justify-center items-end bg-green-100 h-72 w-72 rounded shadow dark:bg-gray-600 m-3'>
                
                <div className='text-red-500 text-lg'>
                    <h3> Nombre: { modSam[0].modelo} </h3>  
                    <p> Stock: {modSam[0].stockArr} </p>
                </div>

                <div className='flex bg-white dark:bg-gray-100 h-10 w-4/5 mt-32 rounded shadow'>
                    
                        <div>
                            <button onClick={restar} className='bg-red-400 h-full w-9 text-xl font-bold rounded-r-sm'> 
                                -
                            </button>
                        </div>
                        <div className='flex justify-center items-center bg-white-500 h-full w-full'>
                            <p className='text-lg font-bold'>
                                {Contador}
                            </p>
                        </div>
                        <div>
                            <button onClick={sumar} className='bg-green-600 h-full w-9 text-xl font-bold rounded-l-sm'> 
                                +
                            </button>
                        </div>
                    
                </div>
                
                <button className='flex justify-center items-center dark:bg-blue-700 bg-blue-300 w-4/5 h-9 m-2 rounded shadow hover:bg-green-700 hover:text-white dark:hover:bg-green-700'>
                    
                    <p className='flex font-medium dark:text-white '>
                        Agregar al carrito
                    </p>

                </button>

            </div>
        </>
    )
}

export default ItemCount
