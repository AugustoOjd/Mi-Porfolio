import React from 'react'
import DarkModeBtn from './DarkModeBtn'
import CartWidget from './CartWidget'
// import {DiApple} from 'react-icons/di'
// import {SiSamsung} from 'react-icons/si'
// import {SiMotorola} from 'react-icons/si'
// import {SiXiaomi} from 'react-icons/si'



const navbar = () => {
    return (
    
            
                <div className='bg-green-300 rounded-b-md shadow flex justify-evenly items-center w-full h-14 md:h-28 lg:h-36 text-xl md:text-3xl lg:text-4xl xl:text-6xl font-medium dark:bg-gray-700 dark:text-gray-100 '>
                    <div>
                        <CartWidget/>
                    </div>
                    <div className=''>
                        <a href={{}} key={{}}>Home</a>
                    </div>
                    <div className=''>
                        <a href={{}} key={{}}>Apple</a>
                    </div>
                    <div className=''>
                        <a href={{}} key={{}}>Samsung</a>
                    </div>
                    <div className=''>
                        <a href={{}} key={{}}>Motorola</a>
                    </div>
                    <div className=''>
                        <a href={{}} key={{}}>Xiaomi</a>
                    </div>
                    <div>
                        <DarkModeBtn className='' />
                    </div>
                
                </div>
            
        
    )
}


export default navbar



