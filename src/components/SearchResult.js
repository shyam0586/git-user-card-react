import React, { Component } from "react";
import SearchResultStats from './SearchResultStats';
import SearchResultCards from './SearchResultCards';
import Pagination from './Pagination';
class SearchResult extends Component {
    render() {  
        return (<div>
                    <SearchResultStats></SearchResultStats>   
                    <SearchResultCards></SearchResultCards>
                    <Pagination></Pagination>
                </div>)
    }
}

   
export default SearchResult;

