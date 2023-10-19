import { Link } from "react-router-dom";

const BrandName = () => {

    return (
        <div className="mt-16">

            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-center ">Our Brand Names </h1>
            </div>

            <div className="grid mt-16 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">

                <div className="  card  card-compact w-[310px] bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1MWhwCx/istockphoto-958956392-612x612.jpg" alt="Shoes" /></figure>

                    <div className="text-end absolute left-52 top-48 bg-info text-white text-sm m-4 p-4 rounded-lg">
                        <Link to="/singleBrand"><h1>Brand Name  </h1></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandName;