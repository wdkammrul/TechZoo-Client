import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <form className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-4 mt-10">
                <div className="form-control">
                    <h2 className="text-3xl text-center my-6 uppercase">Register Here</h2>

                    <label className="label">
                        <span className="label-text text-xl font-extrabold">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />

                    <label className="label mt-3">
                        <span className="label-text text-xl font-extrabold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label mt-3">
                        <span className="label-text text-xl font-extrabold">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6 ">
                    <button className="btn btn-info">Register</button>

                    <div className="flex my-8 ">
                        <p className="text-center">Have an account ? <Link to='/login'> <span className="underline font-extrabold text-info text-2xl">Log In</span> here</Link></p>

                    </div>                  
                </div>
            </form>
        </div>
    );
};

export default Register;