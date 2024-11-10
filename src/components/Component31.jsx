import { useContext } from 'react'
import Heart from '../assets/love.svg'
import { CartContext } from './contextAPI';
import { Link } from 'react-router-dom';

function Component31(props){
    const MyContextData=useContext(CartContext);

    // function addToCart(){
    //     const newItem={
    //         name:props.data.name,
    //         img:props.data.img,
    //         price:props.data.price
    //     }
    //     MyContextData.setCartItems([...MyContextData.cartitems,newItem]);
    //     console.log("item added to cart",MyContextData.cartitems)
    // }
    async function sendToFb(name,img,price){
        const newCartItem={
            name,
            img,
            price
        }
        try{
        const response = await fetch(`https://fir-db-7355f-default-rtdb.firebaseio.com/watchecom/${MyContextData.isEmail}/cart.json`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newCartItem)   
          });
          const data= await response.json();
          console.log(data);
          MyContextData.getCartData()
        }
        catch(error)
        {
            console.error("err:",error)
        }
    }
    async function sendToFbWish(name,img,price){
      const newCartItem={
          name,
          img,
          price
      }
      try{
      const response = await fetch(`https://fir-db-7355f-default-rtdb.firebaseio.com/watchecom/${MyContextData.isEmail}/wishlist.json`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCartItem)   
        });
        const data= await response.json();
        console.log(data);
        MyContextData.getWishData()
      }
      catch(error)
      {
          console.error("err:",error)
      }
  }
    return(
        <Link to={`/items/${props.data.id}`}>
        <div className=" p-3 bg-white group ">
             <img className='w-full h-[15rem]' src={props.data.img} alt="" width="200px" height="220px" />
             <div className='py-5'>
                <h2 className='font-700 text-2xl font-medium '>{props.data.name}</h2>
                <p className='font-light text-sm'>{props.data.discount}</p>
                <div className='text-xl font-bold mt-5'>Rs.{props.data.price}</div>
             </div>
             <div className=' gap-2 items-center hidden justify-center  group-hover:flex '>
              <button onClick={(e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    sendToFbWish(props.data.name,props.data.img,props.data.price)
                    }}  className='p-2 w-[20%] border-2 border-[#d84727]'>
                <img src={Heart} alt="" />
              </button>
              <button className='py-2 w-[80%] bg-[#d84727] text-white' onClick={(e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    sendToFb(props.data.name,props.data.img,props.data.price)
                    }}>Add To Cart</button>
             </div>
           </div>
        </Link>
    )
}

export default Component31