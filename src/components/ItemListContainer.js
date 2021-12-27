import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-3 h-96 p-0.5 m-3 max-w-7xl'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-2 overflow-x-auto'>
                    <ItemList/>
                </div>

            </div>
        </>
    )
}

export default ItemListContainer
