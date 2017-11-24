import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
var photo = [];
var request = require("request");
const axios = require("axios");


class NavigateHome extends Component {

  constructor(props){
    super(props)

  }

  nav(){
    this.props.navigatehome("search")
  }
  render(){
    return(
      <button type="button" className="btn btn-primary" onClick={this.nav.bind(this)}>Back Home</button>
    )
  }
}

export default NavigateHome
