import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-4/5">
                <div className=''>
                    <img alt='' src={banner1} className="w-full" />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src={banner2} className="carousel-img w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src={banner3} className=" w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Get food <br />
                        at home
                    </h1>
                </div>
                <div className="absolute flex justify-between w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <p className='text-white text-xl'>We are proving you the opportunity to get any home made food at your home. So order now!</p>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};


export default Banner;