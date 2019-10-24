import React, { Component } from "react";
import { connect } from 'react-redux';

class SearchResultPagination extends Component {
    render() {               
            return <div></div>
           
    }
}
 


const mapStateToProps = state => ({
    totalResult: state.totalResult,
    searchWord: state.searchWord
  });


export default connect(mapStateToProps, null)(SearchResultPagination);

