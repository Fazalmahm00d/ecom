import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./contextAPI";
import Img4 from '../assets/image 9.png'
import Img5 from '../assets/Mask Group.png'
import Img6 from '../assets/Mask Group (1).png'
import Img7 from '../assets/Mask Group (2).png'
import cicilLogo from '../assets/logo-cicil-white 1.svg'
import Header from "./Header";
import Footer from "./Footer";
import Img01 from '../assets/accessories.jpg'
import Img02 from '../assets/3545.jpg'


function Dynamic(){
    const result=useParams();
    const MyContext=useContext(CartContext)
    async function sendToFb(name,img,price){
      const newCartItem={
          name,
          img,
          price
      }
      try{
      const response = await fetch(`https://fir-db-7355f-default-rtdb.firebaseio.com/watchecom/${MyContext.isEmail}/cart.json`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCartItem) 
        });
        const data= await response.json();
        console.log(data);
        MyContext.getCartData()
      }
      catch(error)
      {
          console.error("err:",error)
      }
  }   
    // function addToCart(name,img,price){
    //     const newItem={
    //         name,
    //         img,
    //         price
    //     }
    //     MyContext.setCartItems([...MyContext.cartitems,newItem])
    // }
    const comp3data=[
        {
          id:'24apfi0h',
          img:Img4,
          name:"Singo Maple",
          discount:"20% Off",
          price:1260,
        },
        { 
          id:'24pqfi0h',
          img:Img5,
          name:"Singo Ebony",
          discount:"20% Off",
          price:1264, 
        },
        {
          id:'24appqfi0h',
          img:Img6,
          name:"Rakai Ebony",
          discount:"15% Off",
          price:1118, 
        },
        {
          id:'24appqfia0h',
          img:Img7,
          name:"Mini Maple",
          discount:"10% Off",
          price:1024, 
        },
        {
          id:'24appqf10h',
          img:Img01,
          name:"Classy Black",
          discount:"10% Off",
          price:1124, 
        },
        {
          id:'24appqqah',
          img:Img02,
          name:"Royale Brown",
          discount:"10% Off",
          price:1824, 
        },
      ]
      
      const filtereddata=comp3data.find((item)=>(item.id===result.id))
      console.log(filtereddata)
    return(
        <div className="bg-[#F7F6F4]">
            <Header/>
            <div className="py-16 ">
            <div className="px-20">Home/Product/Watches/<span className="text-orange-600">{filtereddata.name}</span></div>
            <div className="mt-10 h-[70vh] w-full flex">
                <div className="w-[40%] h-full bg-[#f1ddc9] relative flex items-center justify-end">
                    <img className="h-[80%] absolute right-[-12rem] " src={filtereddata.img} alt="" />
                </div>
                <div className="w-[60%] flex items-center justify-center">
                    <div className="">
                         <h1 className="text-5xl uppercase">{filtereddata.name}</h1>
                         <div className="mt-5 text-2xl font-medium">Rs.{filtereddata.price}</div>
                         <div className="mt-2 text-l font-bold text-red-700">{filtereddata.discount}</div>
                         <div className="flex gap-5 mt-10">
                        <button onClick={()=>sendToFb(filtereddata.name,filtereddata.img,filtereddata.price)} className="p-4 bg-[#D84727] text-white flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3185 10.9521L23.7585 20.3388C23.7111 20.513 23.5593 20.6384 23.3794 20.6522L13.4145 21.4187L12.9434 22.3601H22.4935C22.7291 22.3601 22.9202 22.5512 22.9202 22.7868C22.9202 23.0225 22.7291 23.2135 22.4935 23.2135H12.2534C12.1055 23.2135 11.9682 23.137 11.8904 23.0112C11.8126 22.8854 11.8056 22.7283 11.8717 22.596L12.4221 21.4952L12.2856 21.5056L12.2534 21.5068C12.0575 21.5069 11.8866 21.3736 11.8392 21.1835L8.59504 8.16336C8.54305 7.9796 8.37513 7.8529 8.18416 7.85334H5.42667C5.19103 7.85334 5 7.66231 5 7.42667C5 7.19103 5.19103 7 5.42667 7H8.18416C8.76369 7.00089 9.27074 7.39002 9.4215 7.9496L10.0374 10.4213C10.0646 10.4161 10.0923 10.4134 10.12 10.4134H25.9069C26.0398 10.4134 26.1651 10.4754 26.2458 10.581C26.3266 10.6866 26.3534 10.8238 26.3185 10.9521ZM14.3868 15.9601C14.3868 15.7244 14.5778 15.5334 14.8135 15.5334H16.9468V13.4C16.9468 13.1644 17.1378 12.9734 17.3735 12.9734C17.6091 12.9734 17.8002 13.1644 17.8002 13.4V15.5334H19.9335C20.1692 15.5334 20.3602 15.7244 20.3602 15.9601C20.3602 16.1957 20.1692 16.3867 19.9335 16.3867H17.8002V18.5201C17.8002 18.7557 17.6091 18.9467 17.3735 18.9467C17.1378 18.9467 16.9468 18.7557 16.9468 18.5201V16.3867H14.8135C14.5778 16.3867 14.3868 16.1957 14.3868 15.9601ZM10.2473 11.2667H25.3482L23.0138 19.8243L12.5798 20.6272L10.2473 11.2667ZM13.5334 24.0668C13.0622 24.0668 12.6801 24.4489 12.6801 24.9202C12.6801 25.3915 13.0622 25.7735 13.5334 25.7735C14.0047 25.7735 14.3868 25.3915 14.3868 24.9202C14.3868 24.4489 14.0047 24.0668 13.5334 24.0668ZM20.3602 24.9202C20.3602 24.4489 20.7423 24.0668 21.2135 24.0668C21.6848 24.0668 22.0669 24.4489 22.0669 24.9202C22.0669 25.3915 21.6848 25.7735 21.2135 25.7735C20.7423 25.7735 20.3602 25.3915 20.3602 24.9202Z" fill="white"/>
                         </svg> Add To Cart</button>
                        <button className="p-4 border-2 border-[#D84727] bg-[#f1ddc9] text-[#D84727]">
                            <img src={cicilLogo} alt="" />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dynamic;