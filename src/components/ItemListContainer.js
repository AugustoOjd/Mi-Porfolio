import React from 'react'




const ItemListContainer = ({name}) => {


    return (
        <div className='flex flex-col justify-evenly bg-gradient-to-r from-green-300 to-green-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-500 dark:text-gray-100 shadow mt-0.5 p-2 w-2/5 h-28 md:h-46 lg:h-54 xl:h-80 text-2xl font-medium md:text-3xl lg:text-4xl xl:text-6xl rounded'>
            
            <div>
                {name}
            </div>
            
        
        </div>
        
    )
}

export default ItemListContainer
