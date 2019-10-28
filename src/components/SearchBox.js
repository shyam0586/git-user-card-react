import React, { Component } from "react";
import { updateSearchKey, totalQueryResult, addSearchResult } from "../actions";
import { connect } from 'react-redux';
import axios from 'axios';
import './SearchBox.css';
import access_token from '../config';

class SearchBox extends Component { 
    constructor(props) {
        super(props);        
        this.handleChange = this.handleChange.bind(this);        
      }
    
    handleChange(event) {
      if(event.target.value !== ''){
        this.props.updateSearchKey(event.target.value)
        this.triggerSearch(event.target.value);
      }else{
        this.resetSearch();
      }
        
    }    
    resetSearch(){
      this.props.totalQueryResult(0);
      this.props.addSearchResult([]);
      this.props.updateSearchKey('');
    }
    
    triggerSearch(q){
        axios.get(`https://api.github.com/search/users?&access_token=${access_token}&page=1&q=${q}`).then(resp => {                
        
        this.props.totalQueryResult(resp.data.total_count);
        let result = resp.data.items;
        //console.log(result)
        Promise.all(result.map(url =>
          fetch(url.url + '?&access_token=' + access_token).then(resp => resp.json())
        )).then(jsons => {
           this.props.addSearchResult(jsons);
        })                  
      })
        
    }

    render() {
        return (
          <div className="row">
            <div className = "input-container">
            <input placeholder = "Search Here!" type="text" 
            onChange = {this.handleChange} className = "col-lg-12"/>            
            </div>
          </div>
        )
    }
}


const mapStateToProps = state => ({
  perPageResult: state.perPageResult
});



const mapDispatchToProps = {
    updateSearchKey,
    totalQueryResult,
    addSearchResult
   };
   
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
