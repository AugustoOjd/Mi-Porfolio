import React from 'react'
import { useContext } from 'react'
import {FiSmartphone} from 'react-icons/fi'
import { CartContext } from '../context/CartContext'



const CartWidget = () => {
    const {total} = useContext(CartContext)
    return (
        <div>
            <p className='absolute ml-9 md:ml-12 lg:ml-20 xl:ml-20 text-red-600 dark:text-red-300'>{total === 0 ? "" : total}</p>
            <FiSmartphone className='relative w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20'/>
            
        </div>
    )
}

export default CartWidget
