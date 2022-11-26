import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllSellers = () => {

    const { user } = useContext(AuthContext);

    const [deleteSeller, setDeleteSeller] = useState([])


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/allsellers');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteSeller = id => {
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
                        const remaining = deleteSeller.filter(seller => seller._id !== id)
                        setDeleteSeller(remaining)
                        refetch()
                    }
                })
        }
    }

    const handleDw = id => {
        // fetch(`http://localhost:5000/users/admin/${id}`, {
        //     method: 'PUT', 
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.modifiedCount > 0){
        //         toast.success('Make admin successful.')
        //         refetch();
        //     }
        // })
    }
    return (
        <div>
            <h2 className="text-3xl">All Seller</h2>
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
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>


                                <td><button onClick={() => handleDeleteSeller(user._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;