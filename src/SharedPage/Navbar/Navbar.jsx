import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthenticationPage/AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

    
    const { user, signOutFromSite } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/others'>Others</NavLink></li>
        <li><NavLink to='/myCart'>My Cart </NavLink></li>
    </>
 
    const userLogout = () => {
        signOutFromSite()  
    }
   
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>     
                </div>
                <img className="w-32 h-32" src="https://i.ibb.co/THmK9VZ/TechZoo.png" alt="" />

                <Link to="/" className="btn btn-info text-white normal-case text-xl">TechZoo</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <> <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photo || user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                             <li>{user?.email}</li>
                            <li className="mt-2"><a onClick={userLogout}>Logout</a></li>
                        </ul>
                    </div>
                    </>
                        :
                        <Link to="/login" className="btn btn-info text-white">Login</Link>
                }
            </div>
        </div >
    );
};

export default Navbar;