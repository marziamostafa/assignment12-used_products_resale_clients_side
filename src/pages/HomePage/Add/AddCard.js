import React from 'react';
import { Link } from 'react-router-dom';

const AddCard = ({ add }) => {
    const { name, details, image, _id } = add

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`allbook/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddCard;