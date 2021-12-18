import React from 'react'

const ItemCount = () => {
    return (

        <>
            <div className='flex justify-center items-end bg-green-100 h-72 w-72 rounded shadow dark:bg-gray-500 '>
                <div className='flex bg-white dark:bg-gray-100 h-14 w-4/5 rounded mb-3 shadow'>
                    
                    <div>
                        <button className='bg-red-400 h-full w-9 text-xl font-bold rounded-r-sm'> 
                            -
                        </button>
                    </div>
                    <div className='flex justify-center items-center bg-white-500 h-full w-full'>
                        <p className='text-lg font-medium'>
                            99999
                        </p>
                    </div>
                    <div>
                        <button className='bg-green-600 h-full w-9 text-xl font-bold rounded-l-sm'> 
                            +
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ItemCount
