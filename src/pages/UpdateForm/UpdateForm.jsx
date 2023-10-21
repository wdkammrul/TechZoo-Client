import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateForm = () => {

    const { id } = useParams()
    console.log(id)

    const [updateData, setUpdateData] = useState({
        _id: '',
        name: '',
        brand: '',
        type: '',
        price: '',
        rating: '',
        description: '',
        image: '',
    })

    useEffect(() => {
        if (id) {
            fetch('https://tech-zoo-server.vercel.app/items')
                .then(res => res.json())
                .then(data => {
                    const updateData = data?.find(data => data._id === id)
                    setUpdateData(updateData)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, [id])

    const handleUpdateForm = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const rating = form.rating.value
        const type = form.type.value
        const price = form.price.value
        console.log(name, rating, type, price, brand)

        const newItemData = { name, rating, type, price, brand }
        console.log("newItemData", newItemData)


        fetch(`https://tech-zoo-server.vercel.app/items/${updateData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItemData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast('Update Successfully')
            });
    }


    return (
        <div className="w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-800 p-24">

            <h2 className="text-5xl font-extrabold text-center mb-6 uppercase">Update</h2>



            <form onSubmit={handleUpdateForm}>

                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={updateData?.name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="brand" className="select select-error w-full border" defaultValue={updateData?.brand}>
                                <option value="" disabled>Select Brand</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                                <option value="Google">Google</option>
                                <option value="Intel">Intel</option>
                                <option value="Hp">Hp</option>
                            </select>
                        </label>
                    </div>
                </div>



                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={updateData?.type} placeholder="Type (types of products)" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={updateData?.rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-6">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={updateData?.price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input className="btn btn-block btn-info mt-6" type="submit" value="Submit" />


            </form>


        </div>
    );
};

export default UpdateForm;