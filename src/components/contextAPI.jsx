import { createContext, useState } from "react";


export const CartContext=createContext();

const CartProvider=(props)=>{
    const [cartitems,setCartItems]=useState([]);
    const[isAuthenticate,setIsAuthenticate]=useState(localStorage.getItem('token'))
    const globalObject={
        cartitems,
        setCartItems,
        isAuthenticate,
        setIsAuthenticate
    }
    return(
        <CartContext.Provider value={globalObject}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
