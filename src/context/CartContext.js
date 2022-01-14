import {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext({
    List: [],
    
});

export const CartProvider = ({children}) => {
    
    const [Cart, setCart] = useState([])

    
    const addItem = (cantidad)=>{

        setCart((prev)=>{
            return prev.concat(cantidad)

        })
    }

    // const addName = ()=>{
        
    // }

    // const elementInList = (cantidad)=>{
    //     return Cart.some(e=> e === cantidad.id )
    // }

    const clearList = ()=>{
        setCart([])
    }


    
    const context ={
        cart: Cart,
        total: Cart.length,
        addItem:addItem,
        clear: clearList,
        // elementInList: elementInList,
        // addName:addName
    }

    return(
        <CartContext.Provider value={context} >
            {children}
        </CartContext.Provider>
    )


}






