import React, {useContext, useState} from 'react';
import { CartContext } from '../context/CartContext'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom'
import {Formik} from 'formik'




const DateCompra = () => {

    const { cart, montoTotal, clear } = useContext(CartContext)
    const [Done, setDone] = useState(false);

    return( 
    
    <>

        <Formik
            initialValues={{
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
            }}
            validate={(valores)=>{

                let errores = {}

                if(!valores.nombre){
                    errores.nombre = 'Por favor ingresa un nombre correcto'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                }

                if(!valores.apellido){
                    errores.apellido = 'Por favor ingresa un apellido correcto'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
                    errores.apellido = 'El nombre solo puede contener letras y espacios'
                }

                if(!valores.correo){
                    errores.correo = 'Por favor ingresa un correo correcto'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo = 'El nombre solo puede contener letras y espacios'
                }

                // if(!valores.telefono){
                //     errores.telefono = 'Por favor ingresa un telefono correcto'
                // }else if(![0-9].test(valores.telefono)){
                //     errores.telefono = 'El nombre solo puede contener letras y espacios'
                // }

                return errores
            }}
            onSubmit={ async (valores, {resetForm})=>{
                
                setTimeout(() => {
                    setDone(true)
                
                }, 1000);
                resetForm()

                    const order ={
                            buyer: {
                                name: valores.nombre,
                                lastName: valores.apellido,
                                phone: valores.telefono,
                                email: valores.correo,
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
            }}
        >
            {({values, errors, touched, handleSubmit, handleChange, handleBlur})=>(

                <div className='flex flex-col justify-center items-center bg-white w-full h-96 lg:h-128 xl:h-150 mt-2 p-3'>

                <div className='bg-green-300 dark:bg-gray-600 dark:text-white w-80 lg:w-96 xl:w-128 lg:h-96 xl:h-auto md:w-96 p-5 rounded shadow overflow-auto'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <label className='text-lg xl:text-3xl'>Nombre: </label>
                        <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={handleChange} onBlur={handleBlur} id='nombre' type="text" name="nombre" value={values.nombre} placeholder='Nombre'></input>
                        {touched.nombre && errors.nombre && <p className='text-red-500'>{errors.nombre}</p>}

                        <label className='text-lg xl:text-3xl'>Apellido: </label>
                        <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={handleChange} onBlur={handleBlur} id='apellido' type="text" name="apellido" value={values.apellido} placeholder='Apellido'></input>
                        {touched.apellido && errors.apellido && <p className='text-red-500'>{errors.apellido}</p>}

                        <label className='text-lg xl:text-3xl'>Correo: </label>
                        <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={handleChange} onBlur={handleBlur} id='correo' type="email" name="correo" value={values.correo} placeholder='Email'></input>
                        {touched.correo && errors.correo && <p className='text-red-500'>{errors.correo}</p>}

                        <label className='text-lg xl:text-3xl'>Telefono: </label>
                        <input className='xl:h-10 xl:text-2xl my-1 text-black' onChange={handleChange} onBlur={handleBlur} id='telefono' type="number" name="telefono" value={values.telefono} placeholder='Telefono'></input>
                        {errors.telefono && <p className='text-red-500'>{errors.telefono}</p>}

                        { Done === false 
                        ? 
                        <button type='submit' onClick={clear} className='bg-blue-400 dark:bg-blue-600 p-2 rounded shadow text-lg xl:text-3xl'>Comprar</button>
                        
                        : 
                        <Link to={"/"}>
                            <button className='bg-indigo-400 dark:bg-indigo-800 p-2 rounded shadow text-lg xl:text-3xl text-white'>Gracias por tu compra!! Volver al inicio</button>
                        </Link>  
                        }
                        <div>
                        <h3 className='text-lg xl:text-3xl my-0.5'>{`Productos: ${cart.map(t=> t.title + `(${t.cantidad})` )}`}</h3>
                        <h3 className='text-lg xl:text-3xl my-0.5'>{`Precio total: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(montoTotal))}`}</h3>
                        
                        
                    </div>
                    </form>
                    
                </div>
                </div>
                

            )}

        </Formik>
        
    
        
    </>
    
    )};

export default DateCompra;
