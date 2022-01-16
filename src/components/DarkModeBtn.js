import React, {useState} from 'react'


import {BsFillMoonFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'



const DarkModeBtn = () => {

    const [darkMode, setDarkMode] = useState(true)

    const Darkmode = () =>{
        document.documentElement.classList.toggle('dark')
        setDarkMode (!darkMode)
        
        
        }


    return (
        <div >
            <button onClick={Darkmode} className='flex border-black dark:border-white border-2 rounded-full p-2 hover:border-white dark:hover:border-green-300'>  
                {
                    darkMode
                    ?
                    <BsFillMoonFill/>
                    :
                    
                    <FaSun/>
                }
            </button>
            
        </div>
    )
}

export default DarkModeBtn

