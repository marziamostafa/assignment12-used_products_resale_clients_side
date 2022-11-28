
import React, { useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";


const AllBookCard = ({ book, setBookList }) => {

    const { condition, details, image, location, mobileNumber, name, buyingPrice, postTime, sellerName, SellingPrice, yearsOfUse, email, status } = book


    const [info, setInfo] = useState([])
    const [vname, setVname] = useState('')
    const [payment, setPayment] = useState('')
    useEffect(() => {
        fetch(`https://b612-used-products-resale-server-side-marziamostafa.vercel.app/newbookings`)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                const array = info.filter(dt => dt.productName === name)
                const array2 = info.filter(dt => dt.paid === true)
                const vdata = array[0];
                const pdata = array2[0]
                const newName = vdata.productName;
                const donePayment = pdata.paid

                setVname(newName)
                setPayment(donePayment)

            })

    }, [info, name])



    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="card-title font-bold text-2xl">{name}</p>
                <p className='text-lg'>Details: {details}</p>
                <p className='text-lg'> Condition: {condition}</p>
                <p className='text-lg' >YearsOfUse : {yearsOfUse} Years</p>
                <p className='text-lg'>Selling Price : {SellingPrice} Taka</p>
                <p className='text-lg'> Original Price: {buyingPrice} Taka</p>
                <p className='text-lg'> Location: {location}</p>


                <div className="card bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sellers Info</h2>

                        <p className='text-lg'>Seller Name :     <div className='flex items-center text-yellow-300 font-medium'>{sellerName}{
                            status === 'verified' ?
                                <FcApproval></FcApproval> :
                                ''
                        }</div></p>

                        <p className='text-lg'>Number : {mobileNumber}</p>
                        <p className='text-lg'>Post Time : {postTime}</p>
                    </div>
                </div>

                <div className="card-actions justify-center">
                    {
                        name === vname ?
                            <button className="btn btn-primary text-white" disabled>Already Booked</button>
                            :
                            <label
                                htmlFor="booking-modal"
                                className="btn btn-primary text-white "
                                onClick={() => setBookList(book)}
                            >Book Now</label>
                    }

                </div>
            </div>
        </div>
    );




};

export default AllBookCard;