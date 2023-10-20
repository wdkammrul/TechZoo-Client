import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const SingleBrand = () => {
    return (
        <div className=" gap-4 overflow-x-hidden">
            <div className="carousel w-full mt-10">
                <div id="slide1" className="carousel-item  relative w-full">
                    <img src="https://i.ibb.co/K7JKfb5/sumudu-mohottige-b-Igpii04-UIg-unsplash.jpg" className=" w-full h-[250px] md:h-[400px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VxmCXsQ/png-transparent-mobile-advertising-smartphone-creativity-information-technology-electronics-service.png" className="w-full h-[250px] md:h-[400px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/q08R3bq/silivan-munguarakarama-Hing5i-QTUn-M-unsplash.jpg" className="w-full h-[250px] md:h-[400px] " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>

            <div className="mt-20 relative w-[400px] md:w-[740px] lg:w-full mx-auto flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
                        <Rating></Rating>
                    </p>

                    <div className="flex gap-6">
                        <Link to='/detailsPage'><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Details

                        </button></Link>

                        <Link to='/updateForm'><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Update

                        </button></Link>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default SingleBrand;