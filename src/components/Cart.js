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
                
                    <div className='bg-green-300 p-1  my-2'>

                    <div className='flex bg-blue-500 w-full h-96 rounded'>

                        <div className='bg-green-100 w-1/2 h-full'>
                            <img className='w-full h-full' src={l.img} alt={l.title}></img>
                        </div>

                        <div className='bg-blue-300 w-1/2 h-full p-5'>
                            <h2 className='text-2xl'>Aqui va el detalle de compra</h2>
                            <p className='text-2xl'>{`Modelo: ${l.title}`}</p>
                            <p className='text-2xl'>{`Cantidad: ${l.cantidad}`}</p>
                            <p className='text-2xl'>{`Precio unidad: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(l.precio))} `}</p>
                            <p className='text-2xl'>{`Precio total unidades: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(l.precio * l.cantidad))}`}</p>

                            <button onClick={()=> {remove(l.id)}} className='bg-gray-500'>Eliminar</button>
                        </div>
                        
                    </div>
                </div>
                
                
            )}

                    <div className='flex justify-around items-center bg-gray-200 h-16 my-1'>
                        <div className='bg-white w-1/3 h-full' >
                            <h2 className=''>{`Precio Total: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(montoTotal))}`}</h2>
                            <h3>{`Cantidad de productos: ${total === 0 ? "" : total}`}</h3>
                        </div>
                        <div className='bg-white w-1/3 h-full' >
                            <button onClick={clear} className='bg-red-300 w-full h-full'> Clear list </button>
                        </div>
                        <div className='bg-white w-1/3 h-full '>
                            <div className='flex justify-center items-center bg-green-400 w-full h-full'>
                            <Link to={"/carrito/finalizar-compra"} className=''> Terminar compra </Link> 
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>
            </>
                
                :

                <div className='flex justify-center items-center bg-blue-300 w-full h-96 mt-2'>

                    <Link to={"/"} className='bg-blue-600 text-2xl p-3 rounded'>No hay productos agregados, volver a home</Link>

                </div>
                
        }

        </>
    )
}

export default Cart
