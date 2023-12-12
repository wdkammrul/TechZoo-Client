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
import BrandName from "../pages/BrandName/BrandName";
import PrivateRoute from "../AuthenticationPage/AuthProvider/PrivateRoute/PrivateRoute";
import Others from "../pages/Others/Others";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tech-zoo-server.vercel.app/brand')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/others',
                element: <Others></Others>
            },
            {
                path: 'myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://tech-zoo-server.vercel.app/myCart')
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
                path: '/brandName',
                element: <BrandName></BrandName>,
                loader: () => fetch('https://tech-zoo-server.vercel.app/brand')

            },
            {
                path: '/singleBrand/:id',
                element: <SingleBrand></SingleBrand>
            },
            {
                path: '/updateForm/:id',
                element: <PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>
            },
            {
                path: '/detailsPage/:id',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
            }
        ]
    }
])

export default router;