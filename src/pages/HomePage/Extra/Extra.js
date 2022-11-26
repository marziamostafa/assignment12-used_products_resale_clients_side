import React from 'react';

const Extra = () => {
    return (
        <div>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className="card w-96 bg-red-200 shadow-xl">
                    <div className="card-body grid grid-cols-2">
                        <img className='rounded ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZok-rEw3hTLuxvkSqoh3MjNL4QBUPZEtp7n7Sq1KiNUf57juxHDBAKIPhmMSQqmg0VA&usqp=CAU" alt="" />
                        <div>
                            <h2 className="card-title">Meet us offline in</h2>
                            <p>4 Embankment Drive Road,sector-10,Uttara</p>
                            <p className='flex'><small>017XXXXXXXX</small></p>
                        </div>

                    </div>
                </div>
                <div className="card w-96 bg-orange-200 shadow-xl">
                    <div className="card-body grid grid-cols-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtXxEZC8QUSQVKaIuln14cay53CwKqkhfqA&usqp=CAU" alt="" />
                        <div>
                            <h2 className="card-title">Keep track of your favourite book</h2>
                            <p>Keep track on your favourite types of book </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-green-100 shadow-xl">
                    <div className="card-body grid grid-cols-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwUdQTkJDQfsOjqvBnbhvYRYv-aNqAjp6vA&usqp=CAU" alt="" />
                        <div>
                            <h2 className="card-title">Try virtual book shop </h2>
                            <p>A new feature is coming to read book online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;