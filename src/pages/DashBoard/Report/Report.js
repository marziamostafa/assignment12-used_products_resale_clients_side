import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Report = () => {

    const [reported, setDeleteReported] = useState([])
    const { data: reportedProduct = [], refetch } = useQuery({
        queryKey: ['dashboard/report'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-marziamostafa.vercel.app/report');
            const data = await res.json();
            return data;
        }
    });
    console.log(reportedProduct)

    const handleReportDelete = id => {
        const proceed = window.confirm('Do you want to delete this book?')
        if (proceed) {
            fetch(`https://b612-used-products-resale-server-side-marziamostafa.vercel.app/dashboard/report/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Buyer Deleted Successfully')
                        const remaining = reported.filter(sel => sel._id !== id)
                        setDeleteReported(remaining)
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <h3 className="text-3xl mb-5 font-bold text-center text-cyan-900">Reported Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProduct?.length &&
                            reportedProduct?.map((order, i) => <tr key={order._id}>

                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={order.image} alt="" />
                                        </div>
                                    </div></td>
                                <td>{order.buyer}</td>
                                <td>{order.productName}</td>
                                <td>{order.SellingPrice}</td>
                                <td>{order.email}</td>
                                <td><button onClick={() => handleReportDelete(order._id)} className='btn btn-success'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Report;