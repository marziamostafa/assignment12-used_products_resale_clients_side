import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const OrderedBook = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/allbookings?email=${user?.email}`;

    const { data: allbookings = [] } = useQuery({
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

    const handleReport = id => {
        const proceed = window.confirm('Want To Report this product?')
        const reportProduct = allbookings.filter(prod => prod._id === id)
        const report = reportProduct[0]
        // console.log('report ', report)
        if (proceed) {
            const reportProduct = {
                buyer: report.buyer,
                email: report.email,
                image: report.image,
                SellingPrice: report.SellingPrice,
                productName: report.productName
            }
            fetch('http://localhost:5000/report', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('usersToken')}`

                },
                body: JSON.stringify(reportProduct)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        toast.success('Repoeted successfully')
                    }
                    else {
                        toast.error(result.message)
                    }
                })
        }
    }
    console.log(allbookings)

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
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbookings?.length &&
                            allbookings?.map((ord, i) => <tr key={ord._id}>

                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full">
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

                                </td>
                                <td>

                                    <button disabled={sessionStorage.getItem(`buttonDisable${ord._id}` || false)} onClick={() => {
                                        handleReport(ord._id)
                                        sessionStorage.setItem(`buttonDisable${ord._id}`, true);
                                    }} className='btn btn-outline btn-success'>Report</button>
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