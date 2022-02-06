import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'


const Cart = () => {

    const { cart, clear, total, remove, montoTotal } = useContext(CartContext)



    return (

        <>

        {
            
            cart.length

            ?

        

            
            <>
            {cart.map(l=> 
                
                    <div className='bg-green-300 dark:bg-gray-600 p-1  my-2'>

                    <div className='flex w-full h-96 lg:h-128 xl:h-150 rounded'>

                        <div className='bg-green-100 w-1/2 h-full'>
                            <img className='w-full h-full' src={l.img} alt={l.title}></img>
                        </div>

                        <div className='bg-white dark:bg-gray-100 w-1/2 h-full p-5'>
                            <h2 className='text-lg md:text-3xl lg:my-3 font-semibold'>{`Modelo: ${l.title}`}</h2>
                            <p className='text-lg md:text-3xl lg:my-3 font-semibold'>{`Cantidad: ${l.cantidad}`}</p>
                            <p className='text-lg md:text-3xl lg:my-3 font-semibold'>{`Precio unidad: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(l.precio))} `}</p>
                            <p className='text-lg md:text-3xl lg:my-3 font-semibold'>{`Precio total unidades: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(l.precio * l.cantidad))}`}</p>

                            <button onClick={()=> {remove(l.id)}} className='bg-red-300 text-lg md:text-3xl p-1 lg:p-3 rounded mt-2 font-semibold'>Eliminar</button>
                        </div>
                        
                    </div>
                </div>
                
                
            )}

                    <div className='flex justify-around items-center bg-gray-200 h-16 lg:h-28 my-1'>
                        <div className='bg-white w-1/3 h-full' >
                            <h2 className='text-xs md:text-lg lg:text-2xl font-semibold'>{`Precio Total: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(montoTotal))}`}</h2>
                            <h3 className='text-sm md:text-lg lg:text-2xl'>{`Cantidad de productos: ${total === 0 ? "" : total}`}</h3>
                        </div>
                        <div className='bg-white w-1/3 h-full' >
                            <button onClick={clear} className='bg-red-300 w-full h-full rounded font-semibold text-lg lg:text-3xl'> Clear list </button>
                        </div>
                        <div className='bg-white w-1/3 h-full '>
                            
                            <Link to={"/carrito/finalizar-compra"}>
                                <div className='flex justify-center items-center bg-green-400 w-full h-full rounded font-semibold text-lg lg:text-3xl'>
                                    <button to={"/carrito/finalizar-compra"} className=''> Terminar compra </button> 
                                </div>
                            </Link>
                            
                        </div>
                        
                    </div>
            </>
                
                :

                <div className='flex justify-center items-center  w-full h-80 mt-2'>

                    <Link to={"/"} className='bg-blue-400 dark:bg-blue-600 dark:text-white lg:text-2xl xl:text-3xl p-2 lg:p-5 rounded shadow font-semibold'>No hay productos agregados, volver a home</Link>

                </div>
                
        }

        </>
    )
}

export default Cart
