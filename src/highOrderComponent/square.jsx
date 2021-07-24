import React from "react";
import withToolTip from "./withToolTip";

// withToolTip is a higher order component
// mean a function receive an component and return an component
const Square = (props) => {
    return ( 
        <div>
        <button style={{width:200,height:200}} mousein={props.mousein}
        onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}
        >
        </button>
        <br />
        {props.mousein && "Some Tool Tip"}
        </div>
     );
}
 
export default withToolTip(Square);