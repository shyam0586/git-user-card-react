import React, { Component } from "react";
import { connect } from 'react-redux';

class SearchResultStats extends Component {
    render() {        
        if(this.props.searchWord !== ''){
            return (<div>
                    <b>{this.props.totalResult}</b> results found for the search term <b>{this.props.searchWord}</b>
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

