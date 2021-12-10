import React from 'react'
import DarkModeBtn from './DarkModeBtn'


const navbar = () => {
    return (
    
            
                <div className='bg-blue-400 w-full h-16 md:h-28 lg:h-36 grid grid-cols-8 gap-4 justify-items-end content-center text-xl md:text-3xl lg:text-4xl xl:text-6xl font-medium dark:bg-gray-700 dark:text-gray-300'>
                    <div className='col-span-2 hover:bg-blue-500'>
                        <a href={{}} key={{}}>Sobre mi</a>
                    </div>
                    <div className='col-span-2'>
                        <a href={{}} key={{}}>Proyectos</a>
                    </div>
                    <div className='col-span-2'>
                        <a href={{}} key={{}}>Curriculum</a>
                    </div>
                    <DarkModeBtn className='col-span-2' />
                </div>
            
        
    )
}

export default navbar



