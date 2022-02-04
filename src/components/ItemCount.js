import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'



const ItemCount = ({stock, initial, cantidad, title, precio, img, id}) => {

    const [Contador, setContador] = useState(initial)
    

    const {addItem, elementInList} = useContext(CartContext)

    const inCart = elementInList(id)


    const sumar = ()=>{
        setContador((stock > 0 ? Contador + 1 : 0) && (Contador === stock ? Contador : Contador + 1))
    }

    const restar = ()=>{
        setContador(Contador > 1 ? Contador - 1 : Contador)
    }

    const addToCart = (e)=>{
        cantidad = Contador
        
        e.preventDefault()
        addItem({id, cantidad, title, precio, img})

        console.log(cantidad)
        console.log(title)
        console.log(precio)
        
    }

    return (

        <>
            
            
        { inCart 
        
        ?

        <>
            <h3 className='my-2 lg:text-3xl font-semibold text-red-500'>ya agregaste este producto</h3>
            <div className='flex'>
                {/* <h2 className='bg-blue-600 text-white p-1 mr-1'>Agregaste {Contador >= 1 ? Contador : 0 } productos al carrito </h2> */}
                <Link to={"/carrito"} className='bg-green-600 p-2 rounded lg:text-3xl'>
                    Ir al carrito
                </Link>
            </div>
        </>

        :

            <>
            
            <div className='flex flex-wrap justify-center items-end bg-green-50 h-auto w-auto rounded shadow dark:bg-gray-600'>

                <div className='flex bg-white dark:bg-gray-100 h-10 w-full rounded shadow'>
                    
                        <div>
                            <button onClick={restar} className='bg-red-400 h-full w-10 text-xl font-bold rounded-r-sm lg:text-3xl'> 
                                -
                            </button>
                        </div>
                        <div className='flex justify-center items-center bg-white-500 h-full w-full lg:text-3xl'>
                            <p className='text-lg xl:text-xl font-bold lg:text-3xl'>
                                {Contador}
                            </p>
                        </div>
                        <div>
                            <button onClick={sumar} className='bg-green-600 h-full w-10 text-xl font-bold rounded-l-sm lg:text-3xl'> 
                                +
                            </button>
                        </div>
                    
                </div>
                
                <button onClick={addToCart} className='flex justify-center items-center dark:bg-blue-700 bg-blue-300 w-full h-11 rounded shadow hover:bg-green-700 hover:text-white dark:hover:bg-green-700'>
                    
                    <p className='flex justify-center items-center font-semibold dark:text-white p-3 lg:text-3xl'>
                        Agregar al carrito
                    </p>

                </button>

            </div>

            
            
            </>

        }

        </>
    )
}

export default ItemCount
