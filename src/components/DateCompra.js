import React, {useContext, useState} from 'react';
import { CartContext } from '../context/CartContext'
import { collection, addDoc, getFirestore } from "firebase/firestore";



const DateCompra = () => {

    const { cart, montoTotal } = useContext(CartContext)

    const [Data, setData] = useState({
        nombre: "",
        apellido: "",
        numero: "",
        correo: ""
    });
    
    const buyHandler = async (e)=>{
        e.preventDefault()



        const order ={
            buyer: {
                name: Data.nombre,
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
        <div className='flex flex-col justify-center items-center bg-blue-300 w-full h-96 mt-2 p-3'>

            <div className='bg-green-300 w-80 md:w-96 p-5'>
                <form className='flex flex-col'>
                    <label>Nombre: </label>
                    <input onChange={(e)=>dateInput(e)} id='nombre' type="text" name="name" value={Data.nombre} placeholder='Nombre'></input>
                    <label>Apellido: </label>
                    <input onChange={(e)=>dateInput(e)} id='apellido' type="text" name="lastName" value={Data.apellido} placeholder='Apellido'></input>
                    <label>Correo: </label>
                    <input onChange={(e)=>dateInput(e)} id='correo' type="email" name="email" value={Data.correo} placeholder='Email'></input>
                    <label>Telefono: </label>
                    <input onChange={(e)=>dateInput(e)} id='numero' type="number" name="number" value={Data.numero} placeholder='Telefono'></input>
                </form>
                <div>
                    <h3>{`Productos: ${cart.map(t=> t.title + `(${t.cantidad})` )}`}</h3>
                    <h3>{`Precio total: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(montoTotal))}`}</h3>
                    <button onClick={(e)=>buyHandler(e)} className='bg-blue-500 p-2 rounded'>Comprar</button>
                </div>

                {/* {Data.nombre.length < 3 
                
                ?

                <div>
                    <p>Minimo 3 caracteres</p>
                </div>

                :

                ''
                
                } */}

            </div>
        </div>
        
    </>
    
    )};

export default DateCompra;
