import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import { toast } from "react-toastify";


const DetailsPage = () => {

    const { id } = useParams()
    const [detailsPage, setDetailsPage] = useState(null)

    useEffect(() => {
        if (id) {
            fetch('http://localhost:5000/items')
                .then(res => res.json())
                .then(data => {
                    const detailsData = data?.find(data => data._id === id)
                    setDetailsPage(detailsData)
                    // console.log(detailsData)
                })

        }
    }, [id])


    const myCart = (e) => {
        const { name, brand, type, rating, image, price, description } = e
        const data = { name, brand, type, rating, image, price, description }
        console.log(e, data);

        fetch('http://localhost:5000/myCart', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast('Successfully Added To Cart')
                }
                console.log(data)
            })
    }

    return (
        <div className="h-[600px]">
            <div className="mx-auto rounded-lg w-[400px] md:w-[740px] lg:w-full  bg-stone-400  text-black my-10 md:my-20 overflow-x-hidden">
                <figure className="relative   mx-auto lg:w-full">
                    <img
                        className=" w-full md:h-[300px] rounded-xl object-cover object-center"
                        src={detailsPage?.image}
                    />
                </figure>
                <div className="grid md:grid-cols-3 mx-auto p-10">
                    <div className="col-span-2">
                        <h1 className="p-4">Details: {detailsPage?.description}</h1>
                    </div>

                    <div className="col-span-1 space-y-3">
                        <h1>Name: {detailsPage?.name}</h1>
                        <h1>Brand Name: {detailsPage?.brand}</h1>
                        <h1>Type: {detailsPage?.type}</h1>
                        <h1>Price: {detailsPage?.price}</h1>
                        <h1><Rating rating={detailsPage?.rating}></Rating> </h1>

                        <div className="flex gap-4">
                            <Link to={`/updateForm/${detailsPage?._id}`}><button
                                className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Update

                            </button></Link>

                            <Link onClick={() => myCart(detailsPage)}><button
                                className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-info disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add to Cart

                            </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;