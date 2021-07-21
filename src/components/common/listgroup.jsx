import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListGroup extends Component {
    
    // set active class by passing item and selected item
    setActiveClass = (item, selectedItem) => {
          return (item === selectedItem) ? "list-group-item active":"list-group-item";
     }

    render() 
    
    { 
        const {items, textProperty, valueProperty, onItemSelect, selectedItem, path} = this.props;
        return ( 
            <ul className="list-group click-able">
            { items.map(item =>(<li onClick={() => onItemSelect(item)}
            key={item[valueProperty]} className={this.setActiveClass(item,selectedItem)}><Link to={path} className="nounderline text-dark">{item[textProperty]}</Link></li>) )}
        </ul>
         );
    }
}

// set default for list group
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;