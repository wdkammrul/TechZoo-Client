import { Link } from "react-router-dom";


const DetailsPage = () => {
    return (
        <div className="mx-auto rounded-lg">
            <figure className="relative lg:h-[500px] h-[210px] w-[315px] mx-auto lg:w-full">
                <img
                    className="lg:w-full lg:h-full rounded-xl object-cover object-center"
                    src='https://i.ibb.co/1MWhwCx/istockphoto-958956392-612x612.jpg'
                />
            </figure>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto p-10">
                <div className="col-span-2">
                    <h1 className="p-4">Details</h1>
                </div>
                
                <div className="col-span-1">
                    <h1>Name</h1>
                    <h1>Brand Name</h1>
                    <h1>Type</h1>
                    <h1>Price</h1>
                    <h1>Rating</h1>
                    <div className="flex gap-6">
                        <Link to='/updateForm'><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Update

                        </button></Link>

                        <Link to='/myCart'><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to Cart

                        </button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;