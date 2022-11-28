import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";


const Sellers = () => {

    const [deleteSeller, setDeleteSeller] = useState([])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['dashboard/allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/allsellers');
            const data = await res.json();
            return data;
        }
    });


    const handleDeleteSeller = id => {
        const proceed = window.confirm('Do you want to delete this Seller?')
        if (proceed) {
            fetch(`http://localhost:5000/users/allsellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully')
                        const remaining = deleteSeller.filter(seller => seller._id !== id)
                        setDeleteSeller(remaining)
                        refetch()
                    }
                })

        }
        // window.location.reload()
    }


    const handleVerify = id => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Buyer verified successful.')
                    refetch();
                }
            })
    }

    console.log(users)
    return (
        <div>
            <h2 className="text-3xl text-center font-medium text-blue-800">All Sellers</h2>
            <div className="overflow-x-auto pr-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verify Buyer</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td><div className='flex items-center'>{user.email}{
                                    user?.status === 'verified' &&
                                    <FcApproval></FcApproval>
                                }</div></td>
                                <td>{user.role}</td>

                                <th>
                                    {user?.status !== 'verified' ?
                                        <button onClick={() => handleVerify(user._id)} className='btn btn-xs bg-green-600'>Verify</button>
                                        :
                                        <button className='btn btn-xs bg-green-600'>Verified</button>
                                    }


                                </th>
                                <td><button className='btn btn-xs btn-danger' onClick={() => handleDeleteSeller(user._id)}>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Sellers;