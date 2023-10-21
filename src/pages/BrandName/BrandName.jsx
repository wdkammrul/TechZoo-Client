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
                         <div onClick={ () => handleBrandName(brandName._id)} key={brandName._id} className="card card-compact  bg-base-100 rounded-lg">
                             <figure><img className="w-[310px] h-[230px]" src={brandName?.logo} alt="Shoes" /></figure>

                             <div className="text-center absolute left-56 top-52 bg-info w-32 text-white text-sm m-4 p-4 rounded-lg">
                                <h1 className="">{brandName?.name} </h1>
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