import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAddedProduct = () => {

    const navigate = useNavigate()
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


    const handleMakeAdd = (id, event) => {


        const advertiseBook = products.filter(book => book._id === id)
        const advertise = advertiseBook[0]
        console.log(advertise)
        const proceed = window.confirm('Do you want To Advertise this product?')
        if (proceed) {
            const advertisedBook = {
                category_id: advertise.category_id,
                product_id: advertise._id,
                name: advertise.name,
                email: advertise.email,
                details: advertise.details,
                image: advertise.image,
                location: advertise.location,
                originalPrice: advertise.originalPrice,
                resalePrice: advertise.resalePrice,
                sellerName: advertise.sellerName,
                used: advertise.yearOfUse,
                postTime: advertise.postTime
            }
            fetch('http://localhost:5000/makeadd', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('usersToken')}`

                },
                body: JSON.stringify(advertisedBook)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success('Advertise Added')
                    navigate('/')
                    window.location.reload()

                })
        }
    }

    return (
        <div className='bg-slate-200'>
            <div className='flex justify-center mb-5 mt-5'>
                <h1 className='text-3xl text-center font-medium text-blue-800'>My Added Books </h1>
            </div>

            <div className="overflow-x-auto pr-5">
                <table className="table w-full m">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Make add</th>
                            <th>Product</th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody className='bg-slate-200'>

                        {
                            products?.length && products?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>

                                    <th>
                                        <button disabled={sessionStorage.getItem(`buttonDisable${product._id}` || false)} onClick={() => {
                                            handleMakeAdd(product._id)
                                            sessionStorage.setItem(`buttonDisable${product._id}`, true);
                                        }} className='btn btn-outline btn-success'>Post Advertise</button>
                                    </th>


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