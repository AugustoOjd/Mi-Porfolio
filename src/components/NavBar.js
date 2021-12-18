import React from 'react'
import DarkModeBtn from './DarkModeBtn'
import CartWidget from './CartWidget'
import {FiMenu} from 'react-icons/fi'



const navbar = () => {
    return (
    
            
                <div className='bg-green-300 rounded-b-md shadow flex justify-evenly items-center w-full h-14 md:h-28 lg:h-36 text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold dark:bg-gray-700 dark:text-gray-100 '>
                    <div>
                        <FiMenu/>
                    </div>
                    <div className=''>
                        <a href={{}} key={{}}>Home</a>
                    </div>
                    <div className='hidden lg:flex'>
                        <a href={{}} key={{}}>Apple</a>
                    </div>
                    <div className='hidden lg:flex'>
                        <a href={{}} key={{}}>Samsung</a>
                    </div>
                    <div className='hidden lg:flex'>
                        <a href={{}} key={{}}>Motorola</a>
                    </div>
                    <div className='hidden lg:flex'>
                        <a href={{}} key={{}}>Xiaomi</a>
                    </div>
                    <div>
                        <CartWidget/>
                    </div>
                    <div>
                        <DarkModeBtn className='' />
                    </div>
                
                </div>
            
        
    )
}


export default navbar



