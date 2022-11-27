import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast, { useToaster } from 'react-hot-toast';

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

    console.log(users)
    return (
        <div>
            <h2 className="text-3xl">All Seller</h2>
            <div className="overflow-x-auto">
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