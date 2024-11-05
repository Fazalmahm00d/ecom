function Login(){
    return(
        <div className="bg-neutral-500 w-full h-[100vh] flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg">
                <h1>Login Form</h1>
                <div className="flex">
                    <button>Login</button>
                    <button>Signup</button>
                </div>
                <form action="">
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    <a>Forgot Password?</a>
                    <button>Login</button>
                </form>
                <div>Not a Member <a className="text-blue-600">Signup now</a></div>
            </div>
        </div>
    )
}

export default Login;