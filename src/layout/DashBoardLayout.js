import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    // const { user } = useContext(AuthContext)

    // const { data: users = [], } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/users/${user.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // });


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/allusers">All Users</Link></li>
                        <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/addproducts">Add A Product</Link></li>
                        <li><Link to="/dashboard/myaddedproducts">My Added Product</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;