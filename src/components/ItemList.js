import React from 'react'
import Item from './Item'




const ItemList = ({items}) => {

    return (
        <div className='flex'>
            
            <div className='flex'>{items.map(m=><Item img={m.img} modelo={m.title} precio={m.precio} id={m.id} /> ) }</div>
            
        </div>
    )
}



export default ItemList
