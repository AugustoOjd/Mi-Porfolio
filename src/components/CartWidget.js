import React from 'react'
import { useContext } from 'react'
import {FiSmartphone} from 'react-icons/fi'
import { CartContext } from '../context/CartContext'



const CartWidget = () => {
    const {total} = useContext(CartContext)
    return (
        <div>
            <FiSmartphone className='w-10 h-10'/>
            <p>{total === 0 ? "" : total}</p>
        </div>
    )
}

export default CartWidget
