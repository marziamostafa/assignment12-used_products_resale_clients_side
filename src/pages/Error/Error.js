import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="card w-full bg-orange-100 shadow-xl">
                <figure><img src="https://www.intuitivecare.net/wp-content/uploads/2022/03/pc-error-icon-teal.svg" alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-4xl">{`Could Not Find That Page`}</h2>
                    <p className='text-lg border border-red-400'>Error</p>


                    <div className="card-actions justify-end">
                        <Link to='/'><button variant="primary" className='btn btn-info'>Go back to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;