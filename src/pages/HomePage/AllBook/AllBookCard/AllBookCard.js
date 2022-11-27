import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";


const AllBookCard = ({ book, setBookList }) => {

    const { condition, details, image, location, mobileNumber, name, buyingPrice, postTime, sellerName, SellingPrice, yearsOfUse, email, status } = book


    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/dashboard/allsellers')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    console.log(info)
    console.log(status)


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="card-title font-bold text-2xl">{name}</p>
                <p className='text-lg'>Details: {details}</p>
                <p className='text-lg'> Condition: {condition}</p>
                <p className='text-lg'> Location: {location}</p>
                <p className='text-lg'> Original Price: {buyingPrice} Taka</p>
                <p className='text-lg'>Selling Price : {SellingPrice} Taka</p>
                <p className='text-lg' >YearsOfUse : {yearsOfUse} Years</p>
                {/* {
      status === 'verified' ?
      
} */}
                <p className='text-lg'>Seller Name :     <div className='flex items-center text-cyan-700 font-medium'>{sellerName}{
                    status === 'verified' ?
                        <FcApproval></FcApproval> :
                        ''
                }</div></p>
                <p className='text-lg'>Number : {mobileNumber}</p>
                <p className='text-lg'>Post Time : {postTime}</p>



                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setBookList(book)}
                    >Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default AllBookCard;