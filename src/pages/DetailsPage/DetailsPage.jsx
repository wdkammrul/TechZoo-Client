import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating/Rating";


const DetailsPage = () => {

    const {id} = useParams()
    const [detailsPage, setDetailsPage] = useState(null)
    
    useEffect(() =>{
       if(id){
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data =>{
            const detailsData = data?.find(data => data._id === id)
            setDetailsPage(detailsData)
            console.log(detailsData)
        })
        
       }
    },[id])

    return (
        <div className="mx-auto rounded-lg">
            <figure className="relative lg:h-[500px] h-[210px] w-[315px] mx-auto lg:w-full">
                <img
                    className="lg:w-full lg:h-full rounded-xl object-cover object-center"
                    src={detailsPage?.image}
                />
            </figure>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto p-10">
                <div className="col-span-2">
                    <h1 className="p-4">Details: {detailsPage?.description}</h1>
                </div>
                
                <div className="col-span-1 space-y-3">
                    <h1>Name: {detailsPage?.name}</h1>
                    <h1>Brand Name: {detailsPage?.brand}</h1>
                    <h1>Type: {detailsPage?.type}</h1>
                    <h1>Price: {detailsPage?.price}</h1>
                    <h1><Rating rating={detailsPage?.rating}></Rating> </h1>
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