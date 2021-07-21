import React from 'react';
import Son from './son';

const Father = () => {
    return (
        <div>
            <h1>Father: The computer is passing to the son, not the father</h1>
            <Son />
        </div>
        
     );
}
 
export default Father;