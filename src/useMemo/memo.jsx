import React,{useMemo} from 'react';
import { useState } from 'react';

const MeMo = () => {
    const [memo,changeMemo] = useState("");
    const [memo2,changeMemo2] = useState("");
    // useMemo, only run if [memo] is changed => performent
    const consoleLog = useMemo(()=>{
         showMemoOnConsole();
    },[memo]);
    function showMemoOnConsole(){
        console.log(memo);
    }
    return ( 
    <React.Fragment>
        <h1>memo1: {memo}</h1>
        <h1>memo2: {memo2}</h1>
        <input type="text" value={memo} onChange={(e) => {changeMemo(e.currentTarget.value)}}/>
        <input type="text" value={memo2} onChange={(e) => {changeMemo2(e.currentTarget.value)}}/>
        {consoleLog}
    </React.Fragment>
        );
}
 
export default MeMo;