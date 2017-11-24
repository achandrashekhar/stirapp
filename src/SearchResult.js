import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
var location = [];
var request = require("request");
const axios = require("axios");


class SearchResult extends Component {

  constructor(props){
    super(props)

  }

  componentDidMount(){
    console.log("got this from parent",this.props.venue);
    //<a href="#" className="btn btn-primary">Button</a>

  }


  getMenu(venue){
    if(venue.venue.hasMenu===true){
      return <a href={venue.venue.menu.url}>Menu Link</a>
    } else {
      return "No Menu URL available"
    }
  }

  render(){
    return(
      Object.keys(this.props.venue).map((c,idx)=>{
          return(
            <div className="card w-75">
              <div className="card-block">
              <h3 className="card-title">{this.props.venue[idx].venue.name}</h3>
              <p className="card-text">Address: {this.props.venue[idx].venue.location.address}</p>
              <p className="card-text">{this.props.venue[idx].venue.hours.status}</p>
              <p className="card-text">{this.getMenu(this.props.venue[idx])}</p>
            </div>
          </div>
          )
  })
)
}



}

export default SearchResult