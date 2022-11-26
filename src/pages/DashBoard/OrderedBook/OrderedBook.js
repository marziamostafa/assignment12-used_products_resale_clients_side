import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const OrderedBook = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/allbookings?email=${user?.email}`;
    const { data: orderList = [] } = useQuery({
        queryKey: ['allbookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h3 className="text-3xl mb-5 font-bold">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList?.length &&
                            orderList?.map((ord, i) => <tr key={ord._id}>

                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={ord.image} alt="" />
                                        </div>
                                    </div></td>
                                <td>{ord.productName}</td>
                                <td>{ord.SellingPrice}</td>
                                <td>
                                    {
                                        ord.SellingPrice && !ord.paid && < Link to={`/dashboard/payment/${ord._id}`}>
                                            <button className=' btn btn-primary btn-sm'>
                                                Pay
                                            </button>
                                        </Link>

                                    }

                                    {
                                        ord.SellingPrice && ord.paid && <button className=' btn btn-success btn-sm'>
                                            Paid
                                        </button>
                                    }
                                    {/* {
                                    order.resalePrice && <button className=' btn btn-success btn-sm'>
                                        Paid
                                    </button>
                                } */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default OrderedBook;