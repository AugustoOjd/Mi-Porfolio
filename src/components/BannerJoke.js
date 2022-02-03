import React from 'react';
import techBanner from '../assets/techBanner.jpg'

const BannerJoke = () => {
    return (
    <div>
        <div className='flex justify-center items-center bg-blue-300 w-full h-36 md:h-80 mt-2'>
            <img src={techBanner} alt='' className='h-full w-full'></img>
        </div>
    </div>);
};

export default BannerJoke;
