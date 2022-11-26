import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAddedProduct = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/dashBoard/allbook?email=${user.email}`

    const [bookDelete, setBookDelete] = useState([])


    const { data: products = [], refetch } = useQuery({
        queryKey: ['dashboard/allbook', user?.email],
        queryFn: async () => {

            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('usersToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    const handleBookDelete = id => {
        const proceed = window.confirm('Are you sure, want to delete this Item?')
        if (proceed) {
            fetch(`http://localhost:5000/dashboard/allbook/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Items Deleted Successfully')
                        const remaining = bookDelete.filter(book => book._id !== id)
                        setBookDelete(remaining)
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <div className='flex justify-center mb-5 mt-5'>
                <h1 className='text-3xl'>My Added Items </h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.length && products?.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <th><img className="mask mask-circle h-24" src={product.image} alt="" /></th>
                                    <th>{product.name}</th>
                                    <th>{product.SellingPrice}</th>
                                    <th><button onClick={() => handleBookDelete(product._id)} className='btn btn-danger'>remove</button></th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedProduct;