import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'


import db from '../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';


const ItemListContainer = ({greeting}) => {

    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)

    const {marca} = useParams() 

    console.log(marca)

    useEffect( async () => {
        setLoading(true);

        const getItems = marca ?
        query(collection(db, 'phones'), where('marca', '==', marca))
        /* query(collection(db, 'phones'), where('marca', '==', marca), orderBy("name")) */
        :
        collection(db, 'phones');

    try {
        const querySnapshot = await getDocs(getItems)

        console.log(querySnapshot.docs)

        setItems(querySnapshot.docs.map(el => {
            return { ...el.data(), id: el.id }
        }))
    }
    catch {
        console.log("SE ROMPIO")
    }
    
    setLoading(false)

        // const getItems = new Promise ((res)=> {
        //     setTimeout(() => {
        //         const myData = marca ? phones.filter(m=> m.marca === marca) : phones;

        //         res(myData)
        //     },);
        // })

        // getItems
        //     .then((res)=>{
        //         setItems(res)
        //     })
        //     .finally(()=> setLoading(false))


    }, [marca])

    return  (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-700 rounded shadow my-3 h-auto p-0.5 m-3 max-w-7xl'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-2 overflow-x-auto'>
                    <h3>{greeting}</h3>
                    {Loading ? <h3>Cargando...</h3> : <ItemList items={Items}/>}
                </div>
                

            </div>
            
        </>
    )
}

export default ItemListContainer
