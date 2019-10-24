import React, { Component } from "react";
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import ModalWindow from './ModalWindow';

class App extends Component {
    render() {
        return (
          <div className = "container">
               <SearchBox></SearchBox> 
               <SearchResult></SearchResult>
               <ModalWindow></ModalWindow>
          </div>
        )
    }
}
export default App;

