import React, {useContext, useState} from 'react';
import { CartContext } from '../context/CartContext'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom'



const DateCompra = () => {

    const { cart, montoTotal } = useContext(CartContext)

    const [Errors, setErrors] = useState({
        errName : ""
    });

    const [Data, setData] = useState({
        nombre: "",
        apellido: "",
        numero: "",
        correo: ""
    });
    
    const buyHandler = async (e)=>{
        e.preventDefault()

        if(Data.nombre.length < 4 && Data.nombre.length > 10){
            setErrors(Errors.errName = "nombre invalido")
        }


        const order ={
            buyer: {
                name: (Data.nombre.length < 4 && Data.nombre.length > 10) ? Data.nombre : null,
                lastName: Data.apellido,
                phone: Data.numero,
                email: Data.correo,
            },
            items: [
                {
                    id: cart.map(i => i.id),
                    title: cart.map(t=> t.title + `(${t.cantidad})` ),
                    price: cart.map(p=> p.precio),
            }], 
            total: montoTotal
        }

        const db = getFirestore()
        

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "orders"), order );
        console.log("Document written with ID: ", docRef.id);

        
        
        
        console.log("click", order)
        
    }

    const dateInput = (e)=>{
        
        const newData = {...Data}
        newData[e.target.id]= e.target.value
        setData(newData)
        // console.log(newData)
        // console.log("esto es Data", Data.nombre)
    }   

    return( 
    
    <>
        <div className='flex flex-col justify-center items-center bg-white w-full h-96 lg:h-128 xl:h-150 mt-2 p-3'>

            <div className='bg-green-300 dark:bg-gray-600 dark:text-white w-80 lg:w-96 xl:w-128 lg:h-96 xl:h-auto md:w-96 p-5 rounded shadow overflow-auto'>
                <form className='flex flex-col'>
                    <label className='text-lg xl:text-3xl'>Nombre: </label> <p>{Errors.errName}</p>
                    <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={(e)=>dateInput(e)} id='nombre' type="text" name="name" value={Data.nombre} placeholder='Nombre'></input>
                    <label className='text-lg xl:text-3xl'>Apellido: </label>
                    <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={(e)=>dateInput(e)} id='apellido' type="text" name="lastName" value={Data.apellido} placeholder='Apellido'></input>
                    <label className='text-lg xl:text-3xl'>Correo: </label>
                    <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={(e)=>dateInput(e)} id='correo' type="email" name="email" value={Data.correo} placeholder='Email'></input>
                    <label className='text-lg xl:text-3xl'>Telefono: </label>
                    <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={(e)=>dateInput(e)} id='numero' type="number" name="number" value={Data.numero} placeholder='Telefono'></input>
                </form>
                <div>
                    <h3 className='text-lg xl:text-3xl my-0.5'>{`Productos: ${cart.map(t=> t.title + `(${t.cantidad})` )}`}</h3>
                    <h3 className='text-lg xl:text-3xl my-0.5'>{`Precio total: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(montoTotal))}`}</h3>
                    <Link to={"/"}><button onClick={(e)=>buyHandler(e)} className='bg-blue-400 dark:bg-blue-600 p-2 rounded shadow text-lg xl:text-3xl'>Comprar</button></Link>
                </div>
            </div>
        </div>
        
    </>
    
    )};

export default DateCompra;
