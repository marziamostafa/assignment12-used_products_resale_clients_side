import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { category_name, image, _id } = category
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>All the {category_name} books you will get here</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`allbook/${_id}`}>All Books</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;