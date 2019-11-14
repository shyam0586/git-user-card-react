import React, { Component } from "react";
import SearchResultStats from './SearchResultStats';
import SearchResultCards from './SearchResultCards';
import Pagination from './Pagination';

import { updateSearchKey, totalQueryResult, updateCurrentResultPage, addSearchResult } from "../actions";
import { connect } from 'react-redux';
import axios from 'axios';
import './SearchBox.css';
import access_token from '../config';
import AbortablePromise from "promise-abortable";


class SearchBox extends Component {     
    constructor(props) {
        super(props);              
        this.handleChange = this.handleChange.bind(this);        
        this.cancel = '';
        this.promiseCall = '';
      }
          
      onPageChanged = data => {
        if(this.props.searchWord !== ''){
          this.triggerSearch(this.props.searchWord);
        }
        
      }

    handleChange(event) {
      this.resetPaginationToOne();
      if(event.target.value !== ''){
        this.props.updateSearchKey(event.target.value)
        this.triggerSearch(event.target.value);
      }else{
        this.resetSearch();
      }
        
    }   
    resetPaginationToOne(){
      this.props.updateCurrentResultPage(1)
    } 
    resetSearch(){
      this.props.totalQueryResult(0);
      this.props.addSearchResult([]);
      this.props.updateSearchKey('');
    }
    
    triggerSearch(q){
        if (this.cancel) {
          // Cancel the previous request before making a new request
          this.cancel.cancel();
        }
        if (this.promiseCall) {
          // Cancel the previous request before making a new request
          this.promiseCall.abort();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        this.props.addSearchResult([])        
        axios.get(`https://api.github.com/search/users?&access_token=${access_token}&page=${this.props.currentPage}&q=${q}&per_page=${this.props.perPageResult}`, {
          cancelToken: this.cancel.token
        }).then(resp => {  
                                      
        this.props.totalQueryResult(resp.data.total_count);
        let result = resp.data.items;                   
        //console.log(resp.data.total_count)
        
        this.promiseCall = AbortablePromise.all(result.map(url =>
          fetch(url.url + '?&access_token=' + access_token).then(resp => resp.json())
        )).then(jsons => {
           this.props.addSearchResult(jsons);
        })                 
      }).catch((error) => {
        console.log(error)
      });
        
    }

    render() {        
        return (
          <div className = "container">
            <div className="row">
              <div className = "input-container">
                <input placeholder = "Search Here!" type="text" 
                  onChange = {this.handleChange}  className = "col-lg-12"/>            
              </div>
            </div>
            <div className = "row">            
              <SearchResultStats></SearchResultStats>   
              <SearchResultCards></SearchResultCards>
              <Pagination pageNeighbours={this.props.pageNeighbours} onPageChanged={this.onPageChanged}></Pagination>                
            </div>
          </div>
        )
    }
}


const mapStateToProps = state => ({
  perPageResult: state.perPageResult,
  currentPage: state.currentPage,
  totalResult: state.totalResult,
  pageNeighbours: state.pageNeighbours,
  searchWord: state.searchWord
});



const mapDispatchToProps = {
    updateSearchKey,
    totalQueryResult,
    addSearchResult,
    updateCurrentResultPage
   };
   
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
