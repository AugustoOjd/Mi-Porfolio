import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'



const ItemCount = ({stock, initial, onAdd}) => {

    const [Contador, setContador] = useState(initial)
    const [CountStock, setCountStock] = useState(stock)


    const { cart } = useParams()

    const sumar = ()=>{
        setContador((stock > 0 ? Contador + 1 : Contador) && (Contador === stock ? Contador : Contador + 1))
        setCountStock(stock - 1)
        console.log(CountStock)
    }

    const restar = ()=>{
        setContador(Contador > 1 ? Contador - 1 : Contador)
        setCountStock(stock + 1)
        console.log(CountStock)
    }

    const addToCart = ()=>{
        console.log(Contador)
    }


    // const [CountStock, setCountStock] = useState(stock)

    // let resStock = () =>{setCountStock( CountStock === 0 ? CountStock : CountStock -1) || (setContador(CountStock > 0 ? Contador + 1 : Contador)) }
    // let sumStock = () =>{setCountStock( CountStock === stock ? CountStock : CountStock + 1) || (setContador(Contador === 1 ? Contador : Contador - 1)) }


    // // let sumar = () => {setContador( setCountStock(Contador + 1 ))}
    // // let restar = () => {setContador( Contador - 1)}

    return (

        <>
            <div className='flex flex-wrap justify-center items-end bg-green-50 h-auto w-auto rounded shadow dark:bg-gray-600'>

                <div className='flex bg-white dark:bg-gray-100 h-10 w-full rounded shadow'>
                    
                        <div>
                            <button onClick={restar} className='bg-red-400 h-full w-10 text-xl font-bold rounded-r-sm'> 
                                -
                            </button>
                        </div>
                        <div className='flex justify-center items-center bg-white-500 h-full w-full'>
                            <p className='text-lg xl:text-xl font-bold'>
                                {Contador}
                            </p>
                        </div>
                        <div>
                            <button onClick={sumar} className='bg-green-600 h-full w-10 text-xl font-bold rounded-l-sm'> 
                                +
                            </button>
                        </div>
                    
                </div>
                
                <Link to={""} onClick={addToCart} className='flex justify-center items-center dark:bg-blue-700 bg-blue-300 w-full h-11 rounded shadow hover:bg-green-700 hover:text-white dark:hover:bg-green-700'>
                    
                    <p className='flex justify-center items-center font-semibold dark:text-white p-3'>
                        Agregar al carrito
                    </p>

                </Link>

            </div>
        </>
    )
}

export default ItemCount
