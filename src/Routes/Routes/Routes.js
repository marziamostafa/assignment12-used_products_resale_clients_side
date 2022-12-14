import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import AddProduct from "../../pages/DashBoard/AddProduct/AddProduct";


import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";
import BookOrder from "../../pages/DashBoard/BookOrder/BookOrder";
import Buyers from "../../pages/DashBoard/Buyers/Buyers";
import DashHome from "../../pages/DashBoard/Home/DashHome";
import MyAddedProduct from "../../pages/DashBoard/MyAddedProduct/MyAddedProduct";
import OrderedBook from "../../pages/DashBoard/OrderedBook/OrderedBook";
import Payment from "../../pages/DashBoard/Payment/Payment";
import Report from "../../pages/DashBoard/Report/Report";
import Sellers from "../../pages/DashBoard/Sellers/Sellers";
import Error from "../../pages/Error/Error";
import AllBook from "../../pages/HomePage/AllBook/AllBook";
import Home from "../../pages/HomePage/Home/Home";
import Blog from "../../pages/Shared/Blog/Blog";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allbook/:id',
                loader: async ({ params }) => {
                    return fetch(`https://b612-used-products-resale-server-side-marziamostafa.vercel.app/allbook/${params.id}`)
                },
                element: <PrivateRoute><AllBook></AllBook></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <DashHome></DashHome>
            },
            {
                path: '/dashboard/myorder',
                element: <OrderedBook></OrderedBook>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/sellers',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers></Buyers>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myaddedproducts',
                element: <MyAddedProduct></MyAddedProduct>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: async ({ params }) => {
                    console.log(params.id)
                    return fetch(`https://b612-used-products-resale-server-side-marziamostafa.vercel.app/allbookings/${params.id}`)
                }
            },
            {
                path: '/dashboard/report',
                element: <Report></Report>
            },
            {
                path: '/dashboard/bookorder',
                element: <BookOrder></BookOrder>
            },

        ]
    },
    { path: '*', element: <Error></Error> },
])

export default router;