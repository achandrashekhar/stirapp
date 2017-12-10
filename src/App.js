import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import MainPage from './MainPage'
import SearchResult from './SearchResult'
import NavigateHome from './NavigateHome'
const axios = require("axios");
var location = [];
var request = require("request");
let phot


class App extends Component {

  constructor(props){
    super(props)

  }

componentWillMount(){
  this.setState({screenName:"search"})
}

 callFunc(info,results){
console.log("got this from my sweetie pie child",info);
//console.log("what is this that I get in the parent",photosArray);
this.setState({screenName:results,venues:info})
    //console.log("what is the location I got",this.state.loc);
    //console.log("this",loc);
  //this.findNearBy(location,activity)
 }

 navhome(search){
   this.setState({screenName:search})
 }



  render() {
    phot = this.state.photos
    if(this.state.screenName==="search"){
    return (
      <div className="App">
        <div className="intro">
        Explore SF neighbourhoods
        <p>    try typing in "coffee" or "burger" </p>
        </div>
        <MainPage getInfo = {this.callFunc.bind(this)} loca= {""}/>

      </div>
      );
    } else {
      return(
      <div>

      <NavigateHome navigatehome = {this.navhome.bind(this)}/>
      <div className="resultpage">
        <SearchResult venue = {this.state.venues} resp = {this.state.res}/>
        </div>

      </div>
    )
  }

  }
}

export default App;
