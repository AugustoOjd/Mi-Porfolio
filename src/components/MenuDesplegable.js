import React from 'react'

const MenuDespegable = ({icon,name}) => {


    return (
        <div className='flex flex-col justify-evenly bg-gradient-to-r from-green-300 to-green-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-500 dark:text-gray-100 shadow mt-0.5 p-2 w-2/5 h-28 md:h-48 lg:h-58 xl:h-76 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-6xl rounded '>
            
            <div href='#' className='hover:text-white dark:hover:text-green-300 relative'>
                <h3 className='p-2'>{icon}</h3>
                <h2 className='p-2'>{name}</h2>
            </div>
            
        
        </div>
        
    )
}

export default MenuDespegable
