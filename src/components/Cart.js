import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const Cart = () => {

    const { cart, clear, total } = useContext(CartContext)
    

    return (
        <>
            
            {cart.map(l=> 
                <>
                    <div className='bg-gray-200'>

                    <div className='flex bg-blue-500 w-full h-96 mt-2'>

                        <div className='bg-green-100 w-1/2 h-full'>
                            <h2 className='text-2xl'>Aqui va la imagen: {l.img}</h2>
                        </div>

                        <div className='bg-blue-300 w-1/2 h-full p-5'>
                            <h2 className='text-2xl'>Aqui va el detalle de compra</h2>
                            <p className='text-2xl'>{`Modelo: ${l.title}`}</p>
                            <p className='text-2xl'>{`Cantidad: ${l.Contador}`}</p>
                            <p className='text-2xl'>{`Monton: $${l.precio}`}</p>

                            
                        </div>
                        
                    </div>
                </div>

                </>
            )}

                    <div className='flex justify-around items-center bg-gray-200 h-16'>
                        <div className='bg-white w-1/3 h-full' >
                            <h2 className=''>Precio Total:</h2>
                            <h3>{`Cantidad de productos: ${total}`}</h3>
                        </div>
                        <div className='bg-white w-1/3 h-full' >
                            <button onClick={clear} className='bg-red-300 w-full h-full'> Clear list </button>
                        </div>
                        <div className='bg-white w-1/3 h-full'>
                            <button className='bg-green-400 w-full h-full'> Terminar compra </button> 
                        </div>
                        
                        
                        
                    </div>

        </>
    )
}

export default Cart
