import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar/Navbar";
import Footer from "../SharedPage/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 font-poppins overflow-x-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;