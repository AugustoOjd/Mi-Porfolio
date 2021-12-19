import React from 'react'
import {BsFillMoonFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'

const Darkmode = () =>{
    document.documentElement.classList.toggle('dark')

}

const DarkModeBtn = () => {
    return (
        <div >
            <button onClick={Darkmode} className='flex border-black dark:border-white border-2 rounded-full p-2 hover:border-white dark:hover:border-green-300'> <BsFillMoonFill/> <FaSun/></button>
            
        </div>
    )
}

export default DarkModeBtn

