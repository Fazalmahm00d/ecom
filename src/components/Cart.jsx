import { useContext, useEffect, useState } from "react";
import { CartContext } from "./contextAPI";


function Cart(props){
    const CartContextData=useContext(CartContext);
    const closeCartDisplay=()=>{
        props.setCartDisplay(false);
    }
    const arr=CartContextData.cartitems;
    const [expenses,setExpenses]=useState()
    async function updateTotal(){
        const totalExpenses= await arr.reduce(
                (sum,ele) => Number(sum)+Number(ele.price)
                ,0);
        setExpenses(totalExpenses)
    }
    updateTotal();
    useEffect(()=>{
        CartContextData.getCartData()
    }
,[])
    return(
        <div className="absolute top-0 left-0 flex justify-center items-center h-[100vh] w-full bg-neutral-500 bg-opacity-[0.5] z-[999]">
            <div className="bg-white p-8 w-[50%]">
            <div className="text-xl font-bold ">Your Cart</div>
            {
                CartContextData.cartitems.map((items)=>{
                    return <div className="flex justify-between items-center text-base mt-3">
                        <div className="flex gap-2 items-center">
                        <img className="h-[5rem] w-[5rem]" src={items.img} alt="" />
                        <h3 className="font-bold">{items.name}</h3>
                        </div>
                        <p>Rs.{items.price}</p>
                    </div>
                })
            }
            <div className="flex font-700 mt-5">
              Total Expenses:<span className="pl-3 font-bold tracking-wide "> Rs.{expenses}</span>  
            </div>
            <div className="flex gap-2 mt-3 w-full">
            <button className="w-[50%] bg-red-700 text-white p-3 rounded" onClick={closeCartDisplay}>Close</button>
            <button className="w-[50%] bg-green-700 text-white p-3 rounded">Buy Now</button>
            </div>
            </div>

        </div>
    )
}

export default Cart