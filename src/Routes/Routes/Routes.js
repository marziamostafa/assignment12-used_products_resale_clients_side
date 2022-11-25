import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import OrderedBook from "../../pages/DashBoard/OrderedBook/OrderedBook";
import AllBook from "../../pages/HomePage/AllBook/AllBook";
import Home from "../../pages/HomePage/Home/Home";
import Blog from "../../pages/Shared/Blog/Blog";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <DisplayError></DisplayError>,
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
            },


            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <OrderedBook></OrderedBook>
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