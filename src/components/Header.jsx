import { Link } from 'react-router-dom';
import matoaLogo from '../assets/image 5.svg'
import Cart from './Cart'
import { isValidElement, useContext, useEffect, useState } from 'react';
import { CartContext } from './contextAPI';
import Heart from '../assets/love.svg'
import WishList from './WishList';
function Header(){
    const MyContext=useContext(CartContext)
    const [cartDisplay,setCartDisplay]=useState(false);
    const [wishDisplay,setWishDisplay]=useState(false);
    const [headToLogin,setHeadToLogin]=useState(false);
    const arr=MyContext.cartitems
    let length=arr.length
    const arr2=MyContext.wishitems
    let length2=arr2.length
    const displayCart=()=>{
        MyContext.isAuthenticate ? setCartDisplay(true):setHeadToLogin(true)
    }
    const displayWish=()=>{
        MyContext.isAuthenticate ? setWishDisplay(true):setHeadToLogin(true)
    }
    // function showPopUp(){
    //     return(
    //         <div className='z-[999] bg-red-200'>
    //             <Link to='/login'></Link>
    //         </div>
    //     )
    // }
    function logOutHandler(){
        console.log('function called')
        localStorage.clear();
        MyContext.setIsAuthenticate(false);
        MyContext.setIsEmail(undefined)
    }
    useEffect(()=>{
        MyContext.getCartData()
    }
,[MyContext.isEmail])
useEffect(()=>{
    MyContext.getWishData();
},[MyContext.isEmail])
    return(
        <div className='flex justify-center'>
            <div className='flex bg-[#F7F6F4] justify-between items-center w-[80%] py-6 '>
            <div className='w-[25%]'>
                <Link to="/"><img src={matoaLogo} alt="" /></Link>
            </div>
            <div className='flex items-center justify-center text-xl gap-5 text-[#333333] w-[50%]'>
                <div>Watches</div>
                <div>Eyewear</div>
                <div>Accessories</div>
                <div>News</div>
            </div>
            <div className='flex items-center justify-around w-[25%]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5237 20.7717L29.2907 28.5388C29.4922 28.7475 29.4893 29.0792 29.2842 29.2843C29.0791 29.4895 28.7474 29.4923 28.5387 29.2908L20.7718 21.5236C16.6849 25.2028 10.4107 24.956 6.62562 20.967C2.8405 16.978 2.92281 10.6996 6.81121 6.81129C10.6996 2.92294 16.9781 2.84063 20.9671 6.6257C24.9561 10.4108 25.203 16.6849 21.5237 20.7717ZM4.98375 14.0244C4.98375 19.0174 9.03142 23.065 14.0245 23.065C19.0151 23.0592 23.0593 19.015 23.0652 14.0244C23.0652 9.03141 19.0175 4.98379 14.0245 4.98379C9.03142 4.98379 4.98375 9.03141 4.98375 14.0244Z" fill="black"/>
                </svg>
                    <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0936 5.42956C18.6949 8.04536 17.4098 10.7298 14.9952 11.9018C18.6302 13.0124 21.1149 16.365 21.12 20.1659V21.6059C21.12 21.871 20.9051 22.0859 20.64 22.0859C20.3749 22.0859 20.16 21.871 20.16 21.6059V20.1659C20.16 15.9243 16.7215 12.4859 12.48 12.4859C8.23842 12.4859 4.79997 15.9243 4.79997 20.1659V21.6059C4.79997 21.871 4.58506 22.0859 4.31997 22.0859C4.05487 22.0859 3.83997 21.871 3.83997 21.6059V20.1659C3.84504 16.365 6.32977 13.0124 9.96477 11.9018C7.55016 10.7298 6.26507 8.04536 6.86637 5.42956C7.46766 2.81376 9.79595 0.959961 12.48 0.959961C15.164 0.959961 17.4923 2.81376 18.0936 5.42956ZM12.48 1.92586C9.829 1.92586 7.67997 4.07489 7.67997 6.72586C7.68293 9.37559 9.83023 11.5229 12.48 11.5259C15.1309 11.5259 17.28 9.37682 17.28 6.72586C17.28 4.07489 15.1309 1.92586 12.48 1.92586Z" fill="black"/>
                    </svg>
                    
                    <div className='text-xl'>{MyContext.isAuthenticate ? <button onClick={logOutHandler}>Log Out</button> : <Link to="/login">Log In</Link>}</div>
                </div>
                <button className='bg-[#f1ddc9] p-3 rounded-full relative' onClick={displayCart} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2908 3.84C19.8033 3.83988 20.2256 4.24237 20.25 4.7543L21.1187 22.9943C21.1312 23.2566 21.0357 23.5125 20.8545 23.7025C20.6733 23.8925 20.4222 24 20.1596 24H4.79962C4.53714 23.9999 4.28615 23.8923 4.10505 23.7023C3.92396 23.5123 3.82856 23.2565 3.84106 22.9943L4.70966 4.7543C4.73406 4.24241 5.15623 3.83993 5.6687 3.84H8.68627C8.68627 1.71923 10.4055 0 12.5263 0C14.647 0 16.3663 1.71923 16.3663 3.84H19.2908ZM15.4063 3.84C15.4045 2.25017 14.1161 0.961799 12.5263 0.96C10.9364 0.961799 9.64807 2.25017 9.64627 3.84H15.4063ZM5.66871 4.8H8.68628V8.16C8.68628 8.4251 8.90118 8.64 9.16628 8.64C9.43138 8.64 9.64628 8.4251 9.64628 8.16V4.8H15.4063V8.16C15.4063 8.4251 15.6212 8.64 15.8863 8.64C16.1514 8.64 16.3663 8.4251 16.3663 8.16V4.8H19.2798L19.9742 19.2H4.98298L5.66871 4.8ZM4.9368 20.16L4.79962 23.04H20.1596L20.0205 20.16H4.9368Z" fill="#333333"/>
                    </svg>
                    <span className='absolute top-[-0.3rem] right-[-0.5rem] z-50 h-6 w-6 bg-red-500 text-white px-2 pt-1  text-xs rounded-full text-center'>{length}</span>
                </button>
                <button className='bg-[#f1ddc9] p-3 rounded-full relative' onClick={displayWish} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-heart" viewBox="-1 -2 18 18">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                    
                    <span className='absolute top-[-0.3rem] right-[-0.5rem] z-50 h-6 w-6 bg-red-500 text-white px-2 pt-1  text-xs rounded-full text-center'>{length2}</span>
                </button>
            </div>
        </div>
        {
            wishDisplay ? <WishList setWishDisplay={setWishDisplay} />:""
        }
        {
            cartDisplay ? <Cart setCartDisplay={setCartDisplay} />:""
        }
        {
            headToLogin ? <div className='absolute top-0 left-0 flex justify-center items-center h-[100vh] w-full bg-neutral-500 bg-opacity-[0.5] z-[999]'>
                <div className='p-5 text-xl bg-white flex gap-10 items-center'>Login First to access Cart<Link to="/login">
                <button className='bg-blue-700 text-l rounded-xl text-white px-5 py-2'>Go To Login</button></Link></div>
            </div>:""
        }
        </div>
    )
}

export default Header;
