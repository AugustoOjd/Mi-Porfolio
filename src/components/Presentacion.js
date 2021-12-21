import React from 'react'
import ItemList from './ItemList'

const Presentacion = () => {
    return (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-5 h-96 p-1'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-2'>
                    <ItemList/>
                </div>

            </div>
        </>
    )
}

export default Presentacion
