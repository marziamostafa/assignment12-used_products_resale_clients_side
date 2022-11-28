import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {


    const { user } = useContext(AuthContext)

    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }

    });
    console.log(users)
    const Role = users[0]?.role

    console.log(Role)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-200">
                    <Outlet></Outlet>
                </div>
                {
                    user?.emailVerified ?
                        <div className="drawer-side bg-slate-200">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 text-base-content">
                                <p className='text-2xl font-bold text-green-900'>Buyer Profile</p>
                                <li><Link to='/dashboard/myorder'>My Orders</Link></li>
                            </ul>
                        </div>
                        :
                        <div className="drawer-side bg-slate-200">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                            <ul className="menu p-4 w-80 text-base-content">
                                {
                                    Role === "admin" ?
                                        <>
                                            <p className='text-2xl font-bold text-green-900'>Admin Profile</p>

                                            <li><Link to='/dashboard/report'>All report</Link></li>

                                            <li><Link to={'/dashboard/sellers'}>All Sellers</Link></li>

                                            <li><Link to={'/dashboard/buyers'}>All Buyers</Link></li>

                                        </>
                                        :
                                        <></>
                                }
                                {Role === 'seller' ?
                                    <>
                                        <p className='text-2xl font-bold text-green-900'>Seller Profile</p>
                                        <li><Link to='/dashboard/addproducts'>Add Item</Link></li>
                                        <li><Link to='/dashboard/myaddedproducts'>My Added Products</Link></li>

                                        <li><Link to='/dashboard/bookorder'>Orders From Buyers</Link></li>
                                    </>
                                    : <></>
                                }

                                {Role === "buyer" ?

                                    <>
                                        <p className='text-2xl font-bold text-green-900'>Buyer Profile</p>
                                        <li><Link to='/dashboard/myorder'>My Orders</Link></li>
                                    </>
                                    :
                                    <></>
                                }








                                {/* <li><Link to="/dashboard">My Orders</Link></li> */}
                                {/* <li><Link to="/dashboard/allusers">All Users</Link></li> */}
                                {/* <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                    <li><Link to="/dashboard/addproducts">Add A Product</Link></li>
                    <li><Link to="/dashboard/myaddedproducts">My Added Product</Link></li> */}
                            </ul>
                        </div>
                }
            </div>

        </div>
    );
};

export default DashBoardLayout;