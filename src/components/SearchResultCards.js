import React, { Component } from "react";
import { connect } from 'react-redux';

class SearchResultCards extends Component {
    render() {        
        
            return <div></div>
            
    }
}
 


const mapStateToProps = state => ({
    totalResult: state.totalResult,
    searchWord: state.searchWord
  });


export default connect(mapStateToProps, null)(SearchResultCards);

