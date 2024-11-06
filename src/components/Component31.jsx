import { useContext } from 'react'
import Heart from '../assets/love.svg'
import { CartContext } from './contextAPI';

function Component31(props){
    const MyContextData=useContext(CartContext);

    function addToCart(){
        const newItem={
            name:props.data.name,
            img:props.data.img,
            price:props.data.price
        }
        MyContextData.setCartItems([...MyContextData.cartitems,newItem]);
        console.log("item added to cart",MyContextData.cartitems)
    }
    return(
        <div className=" p-3 bg-white group ">
             <img src={props.data.img} alt="" width="200px" height="220px" />
             <div className='py-5'>
                <h2 className='font-700 text-2xl font-medium '>{props.data.name}</h2>
                <p className='font-light text-sm'>{props.data.discount}</p>
                <div className='text-xl font-bold mt-5'>Rs.{props.data.price}</div>
             </div>
             <div className=' gap-2 items-center hidden justify-center  group-hover:flex '>
              <button className='p-2 w-[20%] border-2 border-[#d84727]'>
                <img src={Heart} alt="" />
              </button>
              <button className='py-2 w-[80%] bg-[#d84727] text-white' onClick={addToCart}>Add To Cart</button>
             </div>
           </div>
    )
}

export default Component31