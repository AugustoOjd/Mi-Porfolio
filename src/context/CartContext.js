import {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [Cart, setCart] = useState([])

    
    const addItem = (item)=>{
        // console.log("esto es item",item)



        setCart((prev)=>{
            // console.log(prev)
            return prev.concat(item )
            
        })
        
    }

    const removeItem = (id)=>{
        const remove = Cart.filter(e=> e.id !== id )
        
        setCart(remove)

        
    }


    const elementInList = (id)=>{
        
        return Cart.some(e=> e.id === id )
    }

    

    const clearList = ()=>{
        setCart([])
    }

    
    const context ={
        cart: Cart,
        total: Cart.reduce((acc, item)=>{return acc += item.cantidad},0),
        montoTotal: Cart.reduce((acc, item)=>{return acc += (item.cantidad * item.precio)}, 0),
        addItem:addItem,
        clear: clearList,
        remove: removeItem,
        elementInList: elementInList,
    }

    return(
        <CartContext.Provider value={context} >
            {children}
        </CartContext.Provider>
    )


}






