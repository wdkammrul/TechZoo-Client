import { useLoaderData, useNavigate } from "react-router-dom";

const BrandName = () => {

    const brandNames = useLoaderData()
    console.log(brandNames)
    
    const brandNavigate = useNavigate()

    const handleBrandName = (id) => {
         brandNavigate(`/singleBrand/${id}`)
    }


    return (
        <div className="mt-16">

            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-center ">Our Brand Names </h1>
            </div>

            <div className="mx-auto">
                <div className="grid mt-16 lg:grid-cols-3 justify-around mx-auto  gap-5">

                   {
                     brandNames?.map(brandName => (
                         <div onClick={ () => handleBrandName(brandName._id)} key={brandName._id} className="card card-compact w-[310px]  bg-base-100 shadow-xl">
                             <figure><img src={brandName?.logo} alt="Shoes" /></figure>

                             <div className="text-end absolute left-52 top-48 bg-info text-white text-sm m-4 p-4 rounded-lg">
                                <h1>{brandName?.name} </h1>
                             </div>
                         </div>
                     ))
                   }

                </div>
            </div>

        </div>
    );
};

export default BrandName;