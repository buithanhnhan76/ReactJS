import React from "react";
import withToolTip from "./withToolTip";

// withToolTip is a higher order component
// mean a function receive an component and return an component
const Square = (props) => {
    return ( 
        <div>
        <button style={{width:200,height:200}} mousein={props.mousein}
        >
        </button>
        <br />
        {props.mousein && <div>"Some Tool Tip"</div>}
        </div>
     );
}
 
export default withToolTip(Square);