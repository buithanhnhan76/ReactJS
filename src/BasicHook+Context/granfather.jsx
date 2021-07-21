// hook
import React,{useState, useEffect} from 'react';
import Father from './father';

// declare a context
export const GrandFatherContext = React.createContext();
// name display in dom
GrandFatherContext.displayName="GrandFatherContext";

// passing value to son, so I use context to avoid pass prop to father 
const GrandFather = () => {
    
    // set state by using hook (GrandFather's state: {gif: "Bicycle"})
    // const [GrandFatherComputer,Fix] = useState({computer:"broken"});
    const [GrandFatherComputer,Fix] = useState({computer: "broken"});
    
    // you can use useEffect too
    // useEffect(()=>{
    //     function Initial(){
    //         Fix({computer: "broken"});
    //     }
    //     Initial();
    // },[]);

    return ( 
        // set the context provider value
        <GrandFatherContext.Provider value={{GrandFatherComputer,Fix}}>
        <h1>GrandFather: The GrandFather's computer has been {GrandFatherComputer.computer}</h1>
        <Father />
        </GrandFatherContext.Provider>
     );
};
 
export default GrandFather;

