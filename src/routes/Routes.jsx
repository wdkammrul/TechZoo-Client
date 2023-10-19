import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../AuthenticationPage/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../AuthenticationPage/Register/Register";
import SingleBrand from "../pages/SingleBrand/SingleBrand";
import UpdateForm from "../pages/UpdateForm/UpdateForm";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'singleBrand',
                element: <SingleBrand></SingleBrand>
            },
            {
                path: 'updateForm',
                element: <UpdateForm></UpdateForm>
            },
            {
                path: 'detailsPage',
                element: <DetailsPage></DetailsPage>
            }
        ]
    }
])

export default router;