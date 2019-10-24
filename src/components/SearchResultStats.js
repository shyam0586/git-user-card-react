import React, { Component } from "react";
import { connect } from 'react-redux';
import "./SearchResultStats.css";
class SearchResultStats extends Component {
    render() {        
        if(this.props.totalResult > 0 ){
            return (<div className = "row">
                    <b>{this.props.totalResult}</b> <span className = "result-static-text">results found for the search term</span>  <b>{this.props.searchWord}</b>
                    </div>)        
        }else{
            return <div></div>
        }    
    }
}
 


const mapStateToProps = state => ({
    totalResult: state.totalResult,
    searchWord: state.searchWord
  });


export default connect(mapStateToProps, null)(SearchResultStats);

