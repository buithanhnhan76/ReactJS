import React,{useCallback, useMemo} from 'react';
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
    // function only run if memo2 changed
    // pass entire function to Callback
    const showMemo2Console = useCallback(() => {
        console.log(memo2); }
    ,[memo2]);
    return ( 
    <React.Fragment>
        <h1>memo1: {memo}</h1>
        <h1>memo2: {memo2}</h1>
        <input type="text" value={memo} onChange={(e) => {changeMemo(e.currentTarget.value)}}/>
        <input type="text" value={memo2} onChange={(e) => {changeMemo2(e.currentTarget.value)}}/>
        {consoleLog}
        {/* showMemo only run if memo2 is changed */}
        {showMemo2Console()}
    </React.Fragment>
        );
}
 
export default MeMo;