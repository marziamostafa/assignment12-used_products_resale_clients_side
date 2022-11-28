import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const Buyers = () => {


    const [deleteBuyer, setDeleteBuyer] = useState([])
    const { data: users = [], refetch } = useQuery({
        queryKey: ['dashboard/allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/allbuyers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer = id => {
        const proceed = window.confirm('Do you want to delete this Buyer?')
        if (proceed) {
            fetch(`http://localhost:5000/users/allbuyers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully')
                        const remaining = deleteBuyer.filter(buyer => buyer._id !== id)
                        setDeleteBuyer(remaining)
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-medium text-blue-800">All Buyers</h2>
            <div className="overflow-x-auto pr-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button className='btn btn-xs btn-danger' onClick={() => handleDeleteBuyer(user._id)}>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Buyers;