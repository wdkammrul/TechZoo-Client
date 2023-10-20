import { Link } from "react-router-dom";


const MyCart = () => {
    return (
        <div className="flex gap-4 overflow-x-hidden">
            <div className="mt-10 relative flex lg:w-full md:w-full lg:max-w-[48rem] max-w-[390px] md:max-w-[580px] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src="https://i.ibb.co/1MWhwCx/istockphoto-958956392-612x612.jpg"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-10">
                    <h6 className="mb-2 block font-sans text-base font-semibold  leading-relaxed tracking-normal  w-32 rounded-lg  antialiased">
                        Name:
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Brand Name:
                    </h4>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        <h1>Price:</h1>
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        <h1>Type:</h1>
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        <h1>Rating:</h1>
                    </p>

                    <div className="flex gap-6">
                        <Link to='/updateForm'><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Update

                        </button></Link>

                        <Link to=''><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Delate

                        </button></Link>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MyCart;