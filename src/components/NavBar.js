import React from 'react'
import DarkModeBtn from './DarkModeBtn'
import CartWidget from './CartWidget'
import MenuDespegable from './MenuDesplegable'

import {FiMenu} from 'react-icons/fi'
import {DiApple} from 'react-icons/di'
import {SiSamsung} from 'react-icons/si'
import {SiMotorola} from 'react-icons/si'
import {SiXiaomi} from 'react-icons/si'


const marcas= [
    {
        icon: <DiApple/>,
        name: 'Apple'
    },
    {   
        icon: <SiSamsung/>,
        name: 'Samsung'
    },
    {
        icon: <SiMotorola/>,
        name: 'Motorola'
    },
    {
        icon: <SiXiaomi/>,
        name: 'Xiaomi'
    },
]


const navbar = () => {

    let listaMenu = marcas.map(m => (<MenuDespegable name={m.name} icon={m.icon}/>))


    // const [Menu, setMenu] = useState('hola')

    return (
    
            <>
                <div className='bg-green-300 rounded-b-md shadow flex justify-evenly items-center w-full h-14 md:h-28 lg:h-36 text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold dark:bg-gray-700 dark:text-gray-100 '>
                    <button className='lg:hidden'>
                        <FiMenu className='w-10 h-10'/>
                    </button>
                    <div className='hover:text-white dark:hover:text-green-300'>
                        <a href={{}} key={{}}>Home</a>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <a href={{}} key={{}}>Apple</a>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <a href={{}} key={{}}>Samsung</a>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <a href={{}} key={{}}>Motorola</a>
                    </div>
                    <div className='hidden lg:flex hover:text-white dark:hover:text-green-300'>
                        <a href={{}} key={{}}>Xiaomi</a>
                    </div>
                    <a href='#' className='hover:text-white dark:hover:text-green-300'>
                        <CartWidget/>
                    </a>
                    <div>
                        <DarkModeBtn className='' />
                    </div>
            
                </div>

                <div  className=''>{listaMenu}</div>
            
            </>
        
    )
}


export default navbar



