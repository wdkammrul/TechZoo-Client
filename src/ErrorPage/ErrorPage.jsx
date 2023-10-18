import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="items-center text-center mt-48">
            <h1 className="text-7xl text-info">404</h1>
            <h1 className="text-5xl my-7">Opppps! Not Found </h1>
            <Link to="/"><button className="btn btn-info">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;