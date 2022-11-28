import React from 'react';
import { Link } from 'react-router-dom';

const AddCard = ({ add, handleDeleteAdds }) => {
    const { name, details, image, _id, category_id } = add


    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>

                    <h2 className="card-title text-black">{name}</h2>

                </div>
                <p>{details}</p>

                <div className='flex justify-between'>
                    <button onClick={() => handleDeleteAdds(_id)} className='bg-gray-300 text-black rounded p-3 hover:bg-gray-100 font-bold  mask-circle mask' title='Delete this add'>X</button>
                    <div className="card-actions justify-end">
                        <Link to={`allbook/${category_id}`}> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddCard;