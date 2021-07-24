import React, { Component } from 'react';
// lodash to help build pagination
import _ from 'lodash';
// quotes list group
import QuotesListGroup from './quoteslistgroup';
// pagination
import Pagination from './common/pagination';
// paginate function to paginate data
import { paginate } from '../utils/paginate';
// table
import Table from './common/table';


class Quotes extends Component {
    state = {
        // quotes is an array of objects
        quotes: [
            { _id: 1, quote: "You only live once, but if you do it right, once is enough.", author: "Mae West", category: "Life"},
            { _id: 2, quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon", category: "Life"},
            { _id: 3, quote: "Get busy living or get busy dying.", author: "Stephen King", category: "Life"},
            { _id: 4, quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth", category: "Life"},
            { _id: 5, quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca", category: "Life"},
            { _id: 6, quote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford", category: "Life"},
            { _id: 7, quote: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra", category: "Life"},
            { _id: 8, quote: "In order to write about life first you must live it.", author: "Ernest Hemingway", category: "Life"},
            { _id: 9, quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett", category: "Life"},
            { _id: 10, quote: "The unexamined life is not worth living.", author: "Socrates",category: "Life"},
            { _id: 11, quote: "Loved you yesterday, love you still, always have, always will", author: "Elaine Davis", category: "Love"},
            { _id: 12, quote: "If I know what love is, it is because of you", author: "Hermann Hesse", category: "Love"},
            { _id: 13, quote: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you", author: "A. A. Milne", category: "Love"},
            { _id: 14, quote: "Women are meant to be loved, not to be understood", author: "Oscar Wilde", category: "Love"},
            { _id: 15, quote: "You make me want to be a better man", author: "Melvin Udall", category: "Love"},
        ],
        category: [{_id: "", name: "All Category"},
            {_id: 1, name:"Love"},
            {_id: 2, name:"Life"}
        ],
        selectedItem: {},
        currentPage: 1,
        pageSize: 5,
        columns: ["quote","author"],
        sortColumn: {path: "quote", order: "asc"}
        
     }

     handleSort = (sortColumn) => {
         const newSortColumn = {...this.state.sortColumn};
         if(this.state.sortColumn.path === sortColumn)
         {
            newSortColumn.order = this.state.sortColumn.order === "asc"?"desc":"asc";
         }
         else
         {
             newSortColumn.path = sortColumn;
             newSortColumn.order = "asc";
         }
         this.setState({sortColumn: newSortColumn});
     }

     handleCategorySelect = (selectedItem) => {
        this.setState({selectedItem: selectedItem, currentPage:1})
     }
     handlePageChange = (page, pagesCount) => {
        switch (page) {
            case "Previous":
                if(this.state.currentPage !== 1)
                this.setState({currentPage: this.state.currentPage - 1});
                break;
            case "Next":
                if(this.state.currentPage !== pagesCount)
                this.setState({currentPage: this.state.currentPage + 1});
                break;
            default:
                this.setState({currentPage: page});
                break;
        }
     }

    //  render quotes by passing quotes and category
     renderQuotes = (allquotes, category,sortColumn) => {
        const filterquotes = category&&category._id?allquotes.filter(quote => quote.category === category.name):allquotes;
        const sortedquotes = _.orderBy(filterquotes,[sortColumn.path],[sortColumn.order]);
        const quotes = paginate(sortedquotes, this.state.currentPage, this.state.pageSize);
        return <Table items={quotes} columns={this.state.columns} onSort={this.handleSort}></Table>
        
        // return quotes.map(quote => <tr key={quote._id}>
        //     <td><Link key={quote._id} className="quotes-heading" to={`/quotes/${quote.category}/${quote._id}`}>{quote.quote}</Link></td>
        // </tr>)
     }

     lengthOfQuotes = (allquotes, category) => {
        const filterquotes = category&&category._id?allquotes.filter(quote => quote.category === category.name):allquotes;
        return filterquotes.length;
     }

    render() { 
        return ( 
            <div className="container-fluid mt-3 ml-2">
                <div className="row">
                    <div className="col-10">
                    <h1>My favorite quotes</h1> 
                        {this.renderQuotes(this.state.quotes,this.state.selectedItem,this.state.sortColumn)}
                    <Pagination itemsCount={this.lengthOfQuotes(this.state.quotes,this.state.selectedItem)}
                    pageSize={this.state.pageSize} currentPage={this.state.currentPage} 
                    onPageChange={this.handlePageChange}></Pagination>
                    </div>
                    <div className="col-2">
                        <QuotesListGroup items={this.state.category} 
                        selectedItem={this.state.selectedItem}
                        onItemSelect={this.handleCategorySelect}
                        path="/quotes"
                        ></QuotesListGroup>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default Quotes;