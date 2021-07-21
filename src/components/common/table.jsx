import React from 'react';
import _ from 'lodash';

const Table = ({columns, items, onSort}) => {
    return ( 
        <table className="table table-bordered table-hover">
            <thead className="click-able">
                <tr>
                {columns.map(column => <th onClick={() => onSort(column)} key={column}>{column.toUpperCase()}</th>)}
                </tr>
            </thead>
            <tbody>{items.map(item => <tr key={item._id}>
                {columns.map(column => <td key={item._id + column}>{_.get(item,column)}</td>)}
            </tr>)}</tbody>
        </table>
     );
}
 
export default Table;