import React from 'react';




const ComparationList = ({ item}) => {
    
    
    return (

    <>  
        <div>
            <h2>{item.title}</h2>
            <h3>{item.marca}</h3>
            <p>{item.precio}</p>
            <p>{item.id}</p>
            <img src={item.img} alt={`${item.id}-${item.title}`}/>
        </div>
    </>
    
    )
};

export default ComparationList;
