import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar/Navbar";
import Footer from "../SharedPage/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 font-poppins overflow-x-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;