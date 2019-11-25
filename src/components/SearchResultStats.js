import React from "react";
import { connect } from 'react-redux';
import "./SearchResultStats.css";

function SearchResultStats(props){
    if(props.totalResult <= 0){
        return null;
    }
    
    return (<div className = "row">
                <b>{props.totalResult}</b> 
                <span className = "result-static-text">
                    results found for the search term
                </span>  
                <b>{props.searchWord}</b>
            </div>)
}

const mapStateToProps = state => ({
    totalResult: state.totalResult,
    searchWord: state.searchWord
  });

export default connect(mapStateToProps, null)(SearchResultStats);

