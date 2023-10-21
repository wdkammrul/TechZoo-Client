import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MySingleCart from "../MySinglaCart/MySingleCart";


const MyCart = () => {


    const allMyCartData = useLoaderData()
    console.log(allMyCartData)

    const [myCartItems, setMyCartItems] = useState(allMyCartData)
    
    

    return (
        <div className="flex flex-col gap-4 overflow-x-hidden">
            
             {
                allMyCartData?.map(myCartItem =>(
                     <MySingleCart key={myCartItem._id} myCartItem={myCartItem} myCartItems={myCartItems} setMyCartItems={setMyCartItems}></MySingleCart>
                ))
             }

        </div>
    );
};

export default MyCart;