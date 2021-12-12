import React from 'react'

const ItemListContainer = () => {
    return (
        <div className='flex flex-col justify-evenly bg-gradient-to-b from-green-300 to-green-100 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-500 dark:text-gray-100 shadow mt-1 p-2 w-2/5 h-44 md:h-54 lg:h-58 xl:h-80 2xl:h-96 text-2xl font-medium md:text-3xl lg:text-4xl xl:text-6xl'>
            
            <div>
                <h2>
                    Apple
                </h2>
            </div>
            <div>
                <h2>
                    Samsung
                </h2>
            </div>
            <div>
                <h2>
                    Motorola
                </h2>
            </div>
            <div>
                <h2>
                    Xiaomi
                </h2>
            </div>
        
        </div>
        
    )
}

export default ItemListContainer
