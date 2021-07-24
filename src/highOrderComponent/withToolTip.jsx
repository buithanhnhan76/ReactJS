import React from "react";
import { useState } from "react"
// withTootTip receive a component
export default function withToolTip(Component){
    return function WithToolTip(props) {
        const [mousein,handleMouse] = useState(false);
        const handleMouseOver = () =>{
            handleMouse(true);
        }
        const handleMouseOut = () => {
            handleMouse(false);
        }
        return (
            <Component {...props} mousein={mousein} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
         );
    }
}