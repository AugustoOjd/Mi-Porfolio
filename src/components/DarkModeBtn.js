import React from 'react'

const Darkmode = () =>{
    document.documentElement.classList.toggle('dark')
}

const DarkModeBtn = () => {
    return (
        <div>
            <input onChange={Darkmode} type='checkbox' className='' />
        </div>
    )
}

export default DarkModeBtn

