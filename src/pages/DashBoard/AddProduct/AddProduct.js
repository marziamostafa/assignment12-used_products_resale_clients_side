import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FcApproval } from "react-icons/fc";

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHosKey = '9d6aa2076dbbb0db4cd5da13528fcb1a';
    console.log(imageHosKey)
    const navigate = useNavigate()

    const [info, setInfo] = useState([])
    const [istatus, setStatus] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/dashboard/allsellers')
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                const array = info.filter(dt => dt.email === user.email)
                const vdata = array[0];
                console.log(array)
                console.log(vdata)
                setStatus(vdata.status)
            })
    }, [user.email, info])
    console.log(istatus)



    const handleAddItem = (data) => {
        console.log(data)
        alert('This may take some time. Please wait')
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHosKey} `
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)


                    const item = {

                        category_id: data.categoryId,
                        name: data.bookName,
                        image: imgData.data.url,
                        location: data.location,
                        buyingPrice: data.buyingPrice,
                        SellingPrice: data.sellingPrice,
                        yearOfUse: data.yearOfUse,
                        postTime: data.postTime,
                        sellerName: data.sellerName,
                        condition: data.condition,
                        mobileNumber: data.mobileNumber,
                        details: data.details,
                        email: user?.email,
                        status: istatus

                    }


                    fetch('http://localhost:5000/allbook', {

                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('usersToken')}`

                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(result => {

                            console.log(result)
                            toast.success('added Item successfully')
                            navigate('/dashboard/myaddedproducts')
                        })

                }
            })
    }

    return (
        <div>
            <div className='pr-5'>
                <div className='flex justify-center text-3xl font-bold'><h1>Add item</h1></div>
                <form onSubmit={handleSubmit(handleAddItem)}>

                    <div className='grid grid-cols-2 bg-gray-300 p-5 rounded-2xl '>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Seller Name</span></label>
                            <input
                                type="text" {...register("sellerName", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            {errors.seller && <p className='text-red-500'>{errors.sellerName.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">status</span></label>
                            {
                                istatus ?
                                    <input defaultValue={istatus} disabled type="text" {...register("status", {

                                    })} className="input input-bordered w-full max-w-xs" />
                                    :
                                    <input defaultValue={''} disabled type="text" {...register("status", {
                                        // required: "Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                            }
                            {errors.status && <p className='text-red-500'>{errors.status.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input defaultValue={user?.email} disabled type="email" {...register("email", {
                                // required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Book Name</span></label>
                            <input type="text" {...register("bookName", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.bookName && <p className='text-red-500'>{errors.bookName.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Buying Price</span></label>
                            <input type="text" {...register("buyingPrice", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.buyingPrice && <p className='text-red-500'>{errors.buyingPrice.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Selling Price</span></label>
                            <input type="text" {...register("sellingPrice", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.sellingPrice && <p className='text-red-500'>{errors.sellingPrice.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Condition</span></label>
                            <input type="text" {...register("condition", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Details</span></label>
                            <textarea type="text" {...register("details", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs textarea" />
                            {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Year of use</span></label>
                            <input type="text" {...register("yearOfUSe", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.yearOfUSe && <p className='text-red-500'>{errors.yearOfUSe.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Mobile Number</span></label>
                            <input type="text" {...register("mobileNumber", {
                                required: 'Required'
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Write date and time</span></label>
                            <input type="text" {...register("postTime", {
                                required: 'Required'
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.postTime && <p className='text-red-500'>{errors.postTime.message}</p>}
                        </div>


                        <div className=''>
                            <label className="label"> <span className="label-text">Chose Brand </span></label>
                            <select className="select select-bordered  w-full max-w-xs" {...register("categoryId")}>
                                <option value="637f660f6da9ff0205fb6cae">Novel</option>
                                <option value="637f660f6da9ff0205fb6caf">Science Fiction</option>
                                <option value="637f660f6da9ff0205fb6cb0">Thriller</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                            <input type="file" {...register("image", {
                                required: 'Required'
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                        </div>

                    </div>
                    <input className='btn btn-primary btn-outline w-full mt-4' value="Add" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;