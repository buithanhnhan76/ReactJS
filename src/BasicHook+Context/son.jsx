import React,{useContext} from 'react';
import { GrandFatherContext } from './granfather';


const Son = () => {
    const CurrentGrandFatherContext = useContext(GrandFatherContext);
    return ( 
        <div>
        <span>THE SON: </span>
        <button onClick={() => CurrentGrandFatherContext.Fix({computer:"FIXED"})}>Fix</button>
        </div>
     );
}
 
export default Son;