import React, {useState} from 'react'
import DarkModeBtn from './DarkModeBtn'
import CartWidget from './CartWidget'
import MenuDespegable from './MenuDesplegable'

import { NavLink } from 'react-router-dom'

import {FiMenu} from 'react-icons/fi'
import {DiApple} from 'react-icons/di'
import {SiSamsung} from 'react-icons/si'
import {SiMotorola} from 'react-icons/si'
import {SiXiaomi} from 'react-icons/si'



const marcas= [
    {
        id: 1,
        icon: <DiApple/>,
        name: 'Apple'
    },
    {   
        id: 2,
        icon: <SiSamsung/>,
        name: 'Samsung'
    },
    {
        id: 3,
        icon: <SiMotorola/>,
        name: 'Motorola'
    },
    {
        id: 4,
        icon: <SiXiaomi/>,
        name: 'Xiaomi'
    },
]


const Navbar = () => {

    const [Down, setDown] = useState(false)
    // const [UP, setUP] = useState(true)


    const Desplegar = ()=>{
        if(Down === false){
            setDown(marcas.map(m => (<MenuDespegable key={m.id} name={m.name} icon={m.icon}/>))) 
        }else{
            setDown(false)
        }
            
            
            
        console.log("click")
    }

    return (
    
            <>
                <div className='bg-green-300 rounded-b-md shadow flex justify-evenly items-center w-full h-14 md:h-28 lg:h-36 text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold dark:bg-gray-700 dark:text-gray-100'>
                    <button className='lg:hidden'>
                        <FiMenu onClick={Desplegar} className='w-10 h-10 hover:text-white dark:hover:text-green-300'/>
                    </button>
                    <div className='hover:text-white dark:hover:text-green-300'>
                        <NavLink to={"/"} className={ ({isActive })  => (isActive) ? 'text-white dark:text-green-300' : ''}>Home</NavLink>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <NavLink to={"/apple"} className={ ({isActive })  => (isActive) ? 'text-white dark:text-green-300' : ''}>Apple</NavLink>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <NavLink to={"/samsung"} className={ ({isActive })  => (isActive) ? 'text-white dark:text-green-300' : ''}>Samsung</NavLink>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <NavLink to={"/motorola"} className={ ({isActive })  => (isActive) ? 'text-white dark:text-green-300' : ''}>Motorola</NavLink>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <NavLink to={"/xiaomi"} className={ ({isActive })  => (isActive) ? 'text-white dark:text-green-300' : ''}>Xiaomi</NavLink>
                    </div>
                    <NavLink to={"/carrito"} href='#' className='hover:text-white dark:hover:text-green-300'>
                        <CartWidget/>
                    </NavLink>
                    <div>
                        <DarkModeBtn className='' />
                    </div>
            
                </div>
                
                    <div className='block absolute lg:hidden'>{Down}</div>
            
            </>
        
    )
}


export default Navbar



