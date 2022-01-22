import React from 'react';

import db from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ComparationContainer = () => {
    
    
    return (
    
    
    <>  
        <label for='phones'>Choose your phone</label>
        <select name='select'>
            <option value="value1">Elige tu celular</option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
        </select>
        
    </>
    
    

    )};

export default ComparationContainer;
