import React,{useReducer} from 'react';
function reducer(state, action){
    switch(action.type){
        case "increment":
            return {value: state.value + 1};
        case "decrement":
            return {value: state.value -1};
        
    }
}
function Count() {
    const [state,dispatch] = useReducer(reducer,{value:0});
    return ( 
        <div>
            Value: {state.value}
            {/* pass type to reducer by dispatch */}
            <button onClick={() => dispatch({type:"increment"})}>+</button>
            <button onClick={() => dispatch({type:"decrement"})}>-</button>
        </div>
     );
}
 
export default Count;