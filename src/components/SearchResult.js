import React, { Component } from "react";
import SearchResultStats from './SearchResultStats';
import SearchResultCards from './SearchResultCards';
import Pagination from './Pagination';
import { connect } from 'react-redux';

class SearchResult extends Component {
    onPageChanged = data => {
        console.log("ONPAGECHANGED");
        console.log(data);
    }

    render() {  
        //console.log("INSIDE PAGINATION PAGE")
        //console.log(this.props.totalResult)
        return (<div>
                    <SearchResultStats></SearchResultStats>   
                    <SearchResultCards></SearchResultCards>
                    <Pagination pageNeighbours={this.props.pageNeighbours} onPageChanged={this.onPageChanged}></Pagination>
                </div>)
    }
}


const mapStateToProps = state => ({
    totalResult: state.totalResult,
    currentPage: state.currentPage,
    perPageResult: state.perPageResult,
    pageNeighbours: state.pageNeighbours
    
  });


export default connect(mapStateToProps, null)(SearchResult);

   


