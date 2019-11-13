import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateCurrentClickCard } from "../actions";
import './SearchResultCards.css';

class SearchResultCards extends Component {   
    handleClick(i){
        this.props.updateCurrentClickCard(i);
    };    
    render() {     
            
            return (             
                <div className = "row">
                    {this.props.searchResultArr.map((git, index) => {                        
                        return (<div key={index} className="cardContainer col-lg-3">
                        <img src={git.avatar_url} className="card-img-top" alt="avatar"/>
                        <div className="card-body">
                          <h5 className="card-title">{git.name}</h5>
                          <p className="card-text"><b>Company</b> : {git.company}</p>
                          <p className="card-text"><b>Location</b> : {git.location}</p>
                          <p className="card-text"><b>No of Repos </b> : {git.public_repos}</p>                                                                              
                        </div>
                        <button type="button" onClick={this.handleClick.bind(this,index)} className="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                View More Details
                          </button>
                      </div>)
                      })}
                </div>
            )                       
    }
}
 

const mapStateToProps = state => ({    
    searchResultArr: state.searchResultArr 
  });

const mapDispatchToProps = {
    updateCurrentClickCard
   };
   
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultCards);

