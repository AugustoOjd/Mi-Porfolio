import React from 'react';




const ComparationList = ({ item}) => {
    
    
    return (

    <>  
        <div>
            <h2 className='text-2xl font-bold my-1'>{item.title}</h2>
            <img className='w-44 h-44 md:w-72 md:h-56 rounded-lg' src={item.img} alt={`${item.id}-${item.title}`}/>
            
            <div className='flex'>
                <p className='text-xl mr-1'>
                    Marca:
                </p>
                <h3 className='text-xl font-semibold'>
                    {item.marca.toUpperCase()}
                </h3>
            </div>
            
            <div className='flex'>
                <p className='text-lg mr-1'>
                    Camara principal:
                </p>
                <h3 className='text-lg font-semibold'>
                    {item.camaraP}MP
                </h3>
            </div>

            <div className='flex'>
                <p className='text-lg mr-1'>
                    Camara frontal:
                </p>
                <h3 className='text-lg font-semibold'>
                    {item.camaraF}MP
                </h3>
            </div>

            <div className='flex'>
                <p className='text-lg mr-1'>
                    Bateria:
                </p>
                <h3 className='text-lg font-semibold'>
                    {item.bateria}mhz
                </h3>
            </div>

            <div className='flex'>
                <p className='text-lg mr-1'>
                    Pantalla:
                </p>
                <h3 className='text-lg font-semibold'>
                    {item.pantalla}
                </h3>
            </div>

            <div className='flex'>
                <p className='text-lg mr-1'>
                    Precio:
                </p>
                <h3 className='text-lg font-semibold'>
                    {(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(item.precio))}
                </h3>
            </div>
            
        </div>
    </>
    
    )
};

export default ComparationList;
