import React, {useEffect, useState} from 'react';
import chuckNorris from '../assets/chuckNorris.jpg'

const BannerSelect = () => {

    const [Joke, setJoke] = useState();

    useEffect(() => {
        const URL = 'https://api.chucknorris.io/jokes/random'
        fetch(URL)
            .then(res => res.json())
            .then(data => setJoke(data.value))
            .catch(err => console.log(err))
            
    }, []);
    


    return (
    <div>
        <div className='flex justify-center items-center bg-green-300 w-full h-28 md:h-48 mt-2 p-1'>
            
            <div className='flex justify-between items-center bg-white w-full h-full rounded'>

                <div className='w-24 h-24 md:w-40 md:h-40 '>
                    <img src={chuckNorris} alt='chuckNorris aprueba' />
                </div>

                <div>
                    <h2>{Joke}</h2>
                </div>

                <div>
                    <h3>Selecciona tu celular</h3>
                </div>
                

            </div>
                

        </div>
    </div>);
};

export default BannerSelect;
