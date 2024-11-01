import React from 'react';
import BannerImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
    <div className='flex flex-col-reverse  lg:flex-row justify-between items-center bg-base-200 rounded-lg py-5'>
        <div className='text-center lg:text-left mt-5 lg:mt-0 p-5'>
            <h1 className='text-2xl lg:text-4xl font-bold mb-1'>Books to freshen up your bookshelf</h1>
            <button className='btn btn-primary mt-2'>View The List</button>
        </div>
        <div>
            <img src={BannerImg} alt=""/>
        </div>
    </div>
    );
};

export default Banner;