import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import AddProduct from "../../pages/DashBoard/AddProduct/AddProduct";


import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";
import Buyers from "../../pages/DashBoard/Buyers/Buyers";
import DashHome from "../../pages/DashBoard/Home/DashHome";
import MyAddedProduct from "../../pages/DashBoard/MyAddedProduct/MyAddedProduct";
import OrderedBook from "../../pages/DashBoard/OrderedBook/OrderedBook";
import Payment from "../../pages/DashBoard/Payment/Payment";
import Report from "../../pages/DashBoard/Report/Report";
import Sellers from "../../pages/DashBoard/Sellers/Sellers";
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
                    return fetch(`http://localhost:5000/allbook/${params.id}`)
                },
                element: <AllBook></AllBook>
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
                    return fetch(`http://localhost:5000/allbookings/${params.id}`)
                }
            },
            {
                path: '/dashboard/report',
                element: <Report></Report>
            },

        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <DisplayError></DisplayError>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <MyAppointment></MyAppointment>
    //         },
    //         {
    //             path: '/dashboard/allusers',
    //             element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/adddoctor',
    //             element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/managedoctors',
    //             element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/payment/:id',
    //             element: <AdminRoute><Payment></Payment></AdminRoute>,
    //             loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
    //         },
    //     ]
    // }
])

export default router;