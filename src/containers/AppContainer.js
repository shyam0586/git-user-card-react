import React, { Component } from "react";
import { connect } from "react-redux";
import {addSearchResult} from '../actions'
import App from "../components/App";

class AppContainer extends Component{
    render(){
        const {searchResultArr} = this.props;
        return (            
            <App searchResultArr = {searchResultArr} />              
        )
    }
}

const mapStateToProps = ({    
    searchResultArr
}) => ({
    searchResultArr    
});

const mapDispatchToProps = {
    addSearchResult
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);