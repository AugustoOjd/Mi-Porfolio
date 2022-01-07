import React, { useState } from 'react'


// const modSam = [
//     {
//         modelo: ' Galaxy S21',
//         stockArr: 6
//     },
//     {
//         modelo: 'Galaxy A12',
//         stockArr: 3
//     }
// ]


const ItemCount = ({stock, initial}) => {

    // const [Contador, setContador] = useState(initial)

    // const [CountStock, setCountStock] = useState(stock)

    // let resStock = () =>{setCountStock( CountStock === 0 ? CountStock : CountStock -1) || (setContador(CountStock > 0 ? Contador + 1 : Contador)) }
    // let sumStock = () =>{setCountStock( CountStock === stock ? CountStock : CountStock + 1) || (setContador(Contador === 1 ? Contador : Contador - 1)) }


    // // let sumar = () => {setContador( setCountStock(Contador + 1 ))}
    // // let restar = () => {setContador( Contador - 1)}

    return (

        <>
            <div className='flex flex-wrap justify-center items-end bg-green-50 h-24 w-64 rounded shadow dark:bg-gray-600 m-3'>

                <div className='flex bg-white dark:bg-gray-100 h-10 w-4/5 rounded shadow'>
                    
                        <div>
                            <button className='bg-red-400 h-full w-9 text-xl font-bold rounded-r-sm'> 
                                -
                            </button>
                        </div>
                        <div className='flex justify-center items-center bg-white-500 h-full w-full'>
                            <p className='text-lg font-bold'>
                                {}
                            </p>
                        </div>
                        <div>
                            <button className='bg-green-600 h-full w-9 text-xl font-bold rounded-l-sm'> 
                                +
                            </button>
                        </div>
                    
                </div>
                
                <button className='flex justify-center items-center dark:bg-blue-700 bg-blue-300 w-4/5 h-9 m-1 rounded shadow hover:bg-green-700 hover:text-white dark:hover:bg-green-700'>
                    
                    <p className='flex justify-center items-center dark:text-white '>
                        Comprar
                    </p>

                </button>

            </div>
        </>
    )
}

export default ItemCount
