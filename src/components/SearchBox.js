import React, { Component } from "react";
import { updateSearchKey, totalQueryResult, addSearchResult } from "../actions";
import { connect } from 'react-redux';
import axios from 'axios';

class SearchBox extends Component { 
    constructor(props) {
        super(props);        
        this.handleChange = this.handleChange.bind(this);        
      }
    
    handleChange(event) {
        this.props.updateSearchKey(event.target.value)
        this.triggerSearch(event.target.value);
    }    

    triggerSearch(q){
        axios.get(`https://api.github.com/search/users?page=1&per_page=1&q=${q}`).then(resp => {                
        
        this.props.totalQueryResult(resp.data.total_count);
        let result = resp.data.items;
        console.log(result)
        this.props.addSearchResult(result);
        })
        
    }

    render() {
        return (
          <div>
            <input placeholder = "Search Here!" type="text" 
            onChange = {this.handleChange} />            
          </div>
        )
    }
}




const mapDispatchToProps = {
    updateSearchKey,
    totalQueryResult,
    addSearchResult
   };
   
export default connect(null, mapDispatchToProps)(SearchBox);
