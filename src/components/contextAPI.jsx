import { createContext, useState } from "react";


export const CartContext=createContext();

const CartProvider=(props)=>{
    const [cartitems,setCartItems]=useState([]);
    const [wishitems,setWishItems]=useState([]);
    const [isEmail,setIsEmail]=useState(localStorage.getItem('email'));

    async function getCartData() {
        try {
            const response = await fetch(`https://fir-db-7355f-default-rtdb.firebaseio.com/watchecom/${isEmail}/cart.json`)
            const data = await response.json();
            console.log(data);
            const arr=[]
            for(let key in data){
                arr.push({ id:key ,...data[key]});
            }
            console.log(arr)
            setCartItems(arr)
        }
        catch (error) {
            console.log(error)
        }
    }
    async function getWishData() {
        try {
            const response = await fetch(`https://fir-db-7355f-default-rtdb.firebaseio.com/watchecom/${isEmail}/wishlist.json`)
            const data = await response.json();
            console.log(data);
            const wisharr=[]
            for(let key in data){
                wisharr.push({ id:key ,...data[key]});
            }
            console.log(wisharr)
            setWishItems(wisharr)
        }
        catch (error) {
            console.log(error)
        }
    }
    const[isAuthenticate,setIsAuthenticate]=useState(localStorage.getItem('token'))
    const globalObject={
        cartitems,
        setCartItems,
        isAuthenticate,
        setIsAuthenticate,
        getCartData,
        isEmail,
        setIsEmail,
        wishitems,
        setWishItems,
        getWishData,
    }
    return(
        <CartContext.Provider value={globalObject}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
