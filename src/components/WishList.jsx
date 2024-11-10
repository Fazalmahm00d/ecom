import { useContext, useEffect} from "react";
import { CartContext } from "./contextAPI";


function WishList(props){
    const WishContextData=useContext(CartContext);
    const closeWishDisplay=()=>{
        props.setWishDisplay(false);
    }
    
    useEffect(()=>{
        WishContextData.getWishData();
    }
,[])
    return(
        <div className="absolute top-0 left-0 flex justify-center items-center h-[100vh] w-full bg-neutral-500 bg-opacity-[0.5] z-[999]">
            <div className="bg-white p-8 w-[50%]">
            <div className="text-xl font-bold ">Your WishList</div>
            {
                WishContextData.wishitems.map((items)=>{
                    return <div className="flex justify-between items-center text-base mt-3">
                        <div className="flex gap-2 items-center">
                        <img className="h-[5rem] w-[5rem]" src={items.img} alt="" />
                        <h3 className="font-bold">{items.name}</h3>
                        </div>
                        <p>Rs.{items.price}</p>
                    </div>
                })
            }
            <div className="flex gap-2 mt-3 w-full">
            <button className="w-[50%] bg-red-700 text-white p-3 rounded" onClick={closeWishDisplay}>Close</button>
            <button className="w-[50%] bg-green-700 text-white p-3 rounded">Buy Now</button>
            </div>
            </div>

        </div>
    )
}

export default WishList