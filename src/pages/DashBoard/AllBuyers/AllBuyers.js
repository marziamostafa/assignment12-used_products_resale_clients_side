import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllBuyers = () => {

    const { user } = useContext(AuthContext);

    const [deleteBuyer, setDeleteBuyer] = useState([])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/allbuyers');
            const data = await res.json();
            return data;
        }
    });


    const handleDeleteBuyer = id => {
        const proceed = window.confirm('Are you sure, want to delete this Seller?')
        if (proceed) {
            fetch(`http://localhost:5000/users/allsellers/${id}`, {
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
            <h2 className="text-3xl">All Buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

                                <td><button onClick={() => handleDeleteBuyer(user._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;