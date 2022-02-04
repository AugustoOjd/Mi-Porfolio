import React from 'react';
import linkedinLogo from '../assets/linkedinLogo.png'
import cvLogo from '../assets/cvLogo.png'

const Footer = () => {
    return (
        <>
            <div className=' bg-green-300 dark:bg-gray-600 w-full h-36 lg:h-80 mt-2'>
                <div className='flex justify-evenly items-center pt-6 lg:pt-12'>
                    <div className='bg-white p-2 rounded-lg w-20 h-20 lg:w-48 lg:h-48'>
                        <a href='#'><img src={linkedinLogo} alt='linkedin'/></a>
                    </div>
                    <div className='bg-white p-2 rounded-lg w-20 h-20 lg:w-48 lg:h-48'>
                        <a href='#'><img src={cvLogo} alt='' className='' /></a>
                    </div>
                    
                </div>
                
            </div>
            <div className='text-center text-lg'>
                    <p>Derechos reservados 2022</p>
            </div>
        </>);
};

export default Footer;
