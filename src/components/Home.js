import React from 'react'
import ComparationContainer from './ComparationContainer'
import BannerJoke from './BannerJoke'
import BannerSelect from './BannerSelect'



const Home = () => {
    return (
        <>  
            <BannerJoke/>
            <BannerSelect/>
            <div className='flex justify-center items-center bg-green-50 w-full h-128 lg:h-150 mt-2'>

                <div className='flex justify-center items-center border border-green-400 dark:bg-gray-500 h-full w-1/2 mr-0.5'>
                    <ComparationContainer/> 
                </div>
                <div className='flex justify-center items-center border border-green-400 dark:bg-gray-500 h-full w-1/2 ml-0.5'>
                    <ComparationContainer/> 
                </div>
            
            

            </div>

            
            
        </>
    )
}

export default Home
