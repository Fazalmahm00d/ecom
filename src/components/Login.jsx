import { useState } from "react"

function Login(){
    const logInURL="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnCRZfZTUHUPdYrWGjYPV7PSstRIKboSM"
    const signUpURL="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnCRZfZTUHUPdYrWGjYPV7PSstRIKboSM"
    const [isLogin,setIsLogin]=useState(false);
    async function sendToFirebase(data){
        
        const URL=isLogin ? logInURL : signUpURL
        const response= await fetch(URL,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        })
        const result = await response.json();
        localStorage.setItem('token',result.idToken)
    }
    function switchLogInMode(){
        setIsLogin(true);
    }
    function switchSignUpMode(){
        setIsLogin(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const data={
            email,
            password,
            returnSecureToken:true
        }
        console.log(data)

        sendToFirebase(data);
    }
    return(
        <div className="bg-neutral-500 w-full h-[100vh] flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg flex flex-col gap-5 items-center justify-center p-5">
                <h1 className="text-2xl font-bold ">{isLogin ? "Login Form": "Signup Form"}</h1>
                
                <div className="flex gap-3 border-2 border-gray-200 rounded-2xl w-full">
                    <button className={`rounded-2xl w-[50%] ${isLogin ? "bg-blue-500 text-white":" "} px-4 py-2`} onClick={switchLogInMode}>Login</button>
                    <button className={`rounded-2xl w-[50%] ${!isLogin ? "bg-blue-500 text-white":" "}  px-4 py-2`} onClick={switchSignUpMode}>Signup</button>
                </div>
                <form  onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                    <input className="text-xl" name="email" type="email" placeholder="Email Address"/>
                    <input className="text-xl" name="password" type="password" placeholder="Password"/>
                    <a className="text-sm text-blue-600 font-bold">Forgot Password?</a>
                    <button type="submit" className="rounded-md bg-blue-500 text-white p-2">{isLogin ? "Login" : "Signup"}</button>
                </form>
                {
                isLogin ? <div className="text-base ">Not a Member? <a className="text-blue-600 cursor-pointer" onClick={switchSignUpMode}>Signup now</a></div>  : <div></div>
                } 
            </div>
        </div>
    )
}

export default Login;