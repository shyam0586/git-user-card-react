import React, { Component } from "react";
import SearchBox from './SearchBox';
import ModalWindow from './ModalWindow';

class App extends Component {
    render() {
        return (
          <div className = "container">
               <SearchBox></SearchBox>             
               <ModalWindow></ModalWindow>
          </div>
        )
    }
}
export default App;

