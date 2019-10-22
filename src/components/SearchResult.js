import React, { Component } from "react";
import SearchResultStats from './SearchResultStats';
import SearchResultCards from './SearchResultCards';
import SearchResultPagination from './SearchResultPagination';
class SearchResult extends Component {
    render() {  
        return (<div>
                    <SearchResultStats></SearchResultStats>   
                    <SearchResultCards></SearchResultCards>
                    <SearchResultPagination></SearchResultPagination>
                </div>)
    }
}

   
export default SearchResult;

