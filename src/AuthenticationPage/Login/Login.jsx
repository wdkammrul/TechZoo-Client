import { Link } from "react-router-dom";


const Login = () => {

    // step-2 
    const handleLogin = e =>{
        e.preventDefault()

        const form = e.target
        const email = form.email.value 
        const password = form.password.value 
        // console.log(email, password)

        const loginData = {email, password}
        console.log(loginData)
        
    }

    return (
        <div>
            
            {/* step-1  */}
            <form onSubmit={handleLogin} className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-4 mt-10">
                <div className="form-control">
                    <h2 className="text-3xl text-center my-6 uppercase">Log in</h2>
                    <label className="label">
                        <span className="label-text text-xl font-extrabold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label mt-5">
                        <span className="label-text text-xl font-extrabold">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                    <label className="label mx-auto mt-4 ">
                        <a href="#" className="label-text-alt text-start  link link-hover  hover:text-green-400 font-bold text-info underline">Forgot password?</a>
                    </label>

                </div>
                <div className="form-control mt-6 ">
                    <button className="btn btn-info">Log In</button>

                    <div className="flex my-8 ">
                        <p className="text-center">No account ? Please <Link to='/register'> <span className="underline font-extrabold text-info text-2xl">Register</span></Link></p>
                    
                    </div>

                    <button className=" m-auto btn btn-success uppercase">Log in with Google </button>
                </div>
            </form>
        </div>
    );
};

export default Login;