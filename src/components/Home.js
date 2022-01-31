import React from 'react'
import ComparationContainer from './ComparationContainer'



const Home = () => {
    return (
        <>  
            <div className='flex justify-center items-center bg-blue-300 w-full h-36 mt-2'>
                    <h2>Aqui va un banner</h2>

            </div>

            <div className='flex justify-center items-center bg-blue-300 w-full h-128 mt-2'>

                <div className='flex justify-center items-center bg-green-400 h-full w-1/2'>
                    <ComparationContainer/> 
                </div>
                <div className='flex justify-center items-center bg-red-400 h-full w-1/2'>
                    <ComparationContainer/> 
                </div>
            
            

            </div>

            
            
        </>
    )
}

export default Home
