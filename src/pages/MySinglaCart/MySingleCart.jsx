/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Rating from "../Rating/Rating";


const MySingleCart = ({ myCartItem, myCartItems, setMyCartItems }) => {

    const { _id, brand, name, price, type, image, rating } = myCartItem

    const handleDelete = _id => {
        fetch(`https://tech-zoo-server.vercel.app/myCart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                if (data.deletedCount > 0) {
                    const remainingItems = myCartItems?.filter(item => item._id !== _id);
                    toast('Item Deleted - if Not Updated Please Refresh')
                    console.log('Cart Items', remainingItems);
                    setMyCartItems(remainingItems);
                }
            })

    }

    return (
        <div>
            <div key={myCartItem._id} className="mt-10 relative flex lg:w-full md:w-full lg:max-w-[48rem] max-w-[390px] md:max-w-[580px] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-10">
                    <h6 className="mb-2 block font-sans text-base font-semibold  leading-relaxed tracking-normal  w-32 rounded-lg  antialiased">
                        Name:{name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Brand Name:{brand}
                    </h4>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Price: {price}
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Type:{type}
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        <Rating rating={rating}></Rating>
                    </p>

                    <div className="flex gap-6">
                        <Link to={`/updateForm/${_id}`}><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Update

                        </button></Link>

                        <Link to=''><button onClick={() => handleDelete(_id)}
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

export default MySingleCart;