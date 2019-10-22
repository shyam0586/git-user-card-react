import React, { Component } from "react";
import { connect } from 'react-redux';

class SearchResultCards extends Component {
    render() {         
         return (
                <ul>
                    {this.props.searchResultArr.map(function(git, index){
                        console.log(index)
                        return <li key={ index }>{git.login}</li>;
                      })}
                </ul>
            )
            
    }
}
 


const mapStateToProps = state => ({
    searchResultArr: state.searchResultArr
  });


export default connect(mapStateToProps, null)(SearchResultCards);

