import React, { Component } from 'react';
import ListGroup from './common/listgroup';

class QuotesListGroup extends Component {
    // state = {  }
    render() { 
        // use path to comback to the quotes page after select some quotes(quotes details)
        const {items, selectedItem, onItemSelect, path} = this.props;
        return ( 
            <ListGroup items={items} selectedItem={selectedItem} onItemSelect={onItemSelect} path={path}> </ListGroup>
         );
    }
}

export default QuotesListGroup;