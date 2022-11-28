import { useQueries } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const BookOrder = () => {


    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/newbookings`)
            .then(res => res.json())
            .then(data => {

                setInfo(data)
            })

    })



    const [bookDelete, setBookDelete] = useState([])




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

                        window.location.reload()
                    }
                })
        }


    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>sl</th>
                        <th>Image</th>
                        <th>Book Name</th>
                        <th>Buyer Name</th>
                        <th>Booked/Paid</th>
                        <th>If paid Delete book from the shop</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        info?.map((dt, i) => <tr
                            key={dt._id}
                        >
                            <th>{i + 1}</th>
                            <th><img className='w-20 rounded-full' src={dt.image} alt="" /></th>
                            <td>{dt.productName}</td>
                            <td>{dt.buyer}</td>
                            <td>{
                                dt.paid ? "Paid"
                                    :
                                    "Booked"
                            }</td>
                            <td>{
                                dt.paid ?
                                    <button onClick={() => handleBookDelete(dt._id)} className='btn btn-outline'>Delete</button>
                                    :
                                    <></>
                            }</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default BookOrder;