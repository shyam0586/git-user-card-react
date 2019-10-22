import React, { Component } from "react";
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';


class App extends Component {
    render() {
        return (
          <div>
              <SearchBox></SearchBox>
              <SearchResult searchResultArr = {this.props.searchResultArr}></SearchResult>
          </div>
        )
    }
}
export default App;

