import React from 'react';
import ReactDom from 'react-dom';
const Table = () => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<h1>Hello I'm a table</h1>,document.getElementById("root-upper"))};
        </React.Fragment>
        
     );
}
 
export default Table;