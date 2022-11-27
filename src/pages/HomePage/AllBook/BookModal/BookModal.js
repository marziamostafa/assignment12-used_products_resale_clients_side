import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookModal = ({ bookList, setBookList }) => {
    const { user } = useContext(AuthContext)

    const { name, SellingPrice, image, setBooked, booked } = bookList;

    const location = useLocation();
    const navigate = useNavigate();


    const handleBookings = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;


        const buyer = {
            productName: name,
            buyer: buyerName,
            email,
            phone,
            SellingPrice,
            location,
            image,

        }
        // console.log(buyer)

        fetch('http://localhost:5000/allbookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acknowledged)
                if (data.acknowledged) {
                    setBookList([]);
                    toast.success('Booked successfully')
                    navigate('/dashboard/myorder')
                    // refetch() 
                } else {
                    toast.error(data.message)
                }
            })

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBookings} className='grid grid-cols-1 gap-3 mt-10'>

                        <input type="text" defaultValue={name} placeholder="Your Name" disabled className="input w-full input-bordered " />

                        <input type="text" defaultValue={SellingPrice} disabled placeholder="Selling Price" className="input w-full input-bordered " />

                        <input name="buyerName" type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email" className="input w-full input-bordered" />

                        <input name="phone" type="text" placeholder="Enter Phone Number" className="input w-full input-bordered" />

                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />

                        <input className='btn btn-primary w-full' type="submit" value="Book" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookModal;