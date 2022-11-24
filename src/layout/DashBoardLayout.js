import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
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
                        <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;